const { User, Token, UserGame, Sequelize, Game, sequelize } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret, API_URL } = require('../config/config.json')[env];
const { Op } = Sequelize;
const transporter = require('../config/nodemailer');

const UserController = {
    async register(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 9);
            const user = await User.create({
                username: req.body.username,
                password,
                email: req.body.email,
                role: 'user',
                gender: "",
                image: "",
                confirmed: false,
            });
            res.status(201).send({ user, message: 'Usuario creado con éxito' });
        } catch (error) {
            res.status(500).send({ message: 'Hubo un problema al tratar de crear el usuario' });
        }
    },

    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    username: req.body.username
                }
            })
            if (!user) { return res.status(400).send({ message: 'Usuario o contraseña incorrectas' }) }

            const isMatch = await bcrypt.compare(req.body.password, user.password);

            if (!isMatch) { return res.status(400).send({ message: 'Usuario o contraseña incorrectas' }) }

            const token = jwt.sign({ id: user.id }, jwt_secret);

            Token.create({ token, UserId: user.id });

            res.send({ message: 'Bienvenid@ ' + user.username, user, token })
        } catch (error) {
            res.status(500).send({ message: 'Hubo un problema al tratar de iniciar sesión' });
        }
    },
    async getMyInfo(req, res) {
        try {
            const user = await User.findOne({
                where: { username: req.user.dataValues.username },
                include: [Game]
            })
            res.send(user)
        } catch (error) {
            res.status(500).send({ message: 'Hubo un problema al tratar de obtener los datos del usuario' });
        }
    },
    async getMyCol(req, res) {
        try {
            res.send(await UserGame.findAll({ include: [Game], where: { UserId: +req.user.id } }))
        } catch (error) {
            res.status(500).send({ message: "Ha habido problemas al tratar de obtener tu colección de juegos.", error })
        }
    },
    async newColGame(req, res) {
        try {
            await UserGame.create({
                UserId: req.user.id,
                GameId: req.body.GameId,
                comment: req.body.comment,
                rating: req.body.rating
            });
            res.status(201).send({ message: "Se ha introducido con éxito el juego a tu colección." })
        } catch (error) {
            res.status(500).send({ message: "Ha habido problemas al tratar de añadir un juego a tu colección.", error })
        }
    },
    async updateColGame(req, res) {
        try {
            await UserGame.update({
                comment: req.body.comment,
                rating: req.body.rating
            }, {
                where: {
                    [Op.and]: [{ UserId: +req.user.id }, { GameId: +req.body.GameId }]
                }
            });
            res.send({ message: "Se ha actualizado con éxito el juego" })
        } catch (error) {
            res.status(500).send({ message: "Ha habido problemas al tratar de actualizar el juego.", error })
        }
    },
    async deleteColGame(req, res) {
        try {
            await UserGame.destroy({
                where: {
                    [Op.and]: [{ UserId: +req.user.id }, { GameId: +req.params.game }]
                }
            })
            res.send({ message: "Has borrado el juego de tu colección." })
        } catch (error) {
            res.status(500).send({ message: "Ha habido problemas al tratar de eliminar el juego de tu colección de juegos.", error })
        }
    },
    async updateUser(req, res) {
        try {
            if (req.body.password) {
                var newPassword = await bcrypt.hash(req.body.password, 9)
            }
            await User.update({...req.body, password: newPassword }, { where: { id: +req.user.id } });
            res.send({ message: "Has actualizado con éxito tu información." })
        } catch (error) {
            res.status(500).send({ message: "Ha habido problemas al actualizar tu información.", error })
        }
    },
    async upgradeRole(req, res) {
        try {
            await User.update({ role: "admin" }, { where: { id: +req.params.id } });
            res.send({ message: "Has cambiado el rol del usuario." })
        } catch (error) {
            res.status(500).send({ message: "¡Problemas jefe!", error })
        }
    },
    async degradeRole(req, res) {
        try {
            await User.update({ role: "user" }, { where: { id: +req.params.id } });
            res.send({ message: "Has cambiado el rol del usuario." })
        } catch (error) {
            res.status(500).send({ message: "¡Problemas jefe!", error })
        }
    },
    async deleteUser(req, res) {
        try {
            await User.destroy({ where: { id: req.params.id } })
            sequelize.query(`DELETE FROM UserGames where UserId = ${req.params.id}`);
            res.send({ message: 'Usuario eliminado.' })
        } catch (error) {
            res.status(500).send({ message: "¡Problemas jefe!", error })
        }
    },
    async getAllUsers(req, res) {
        try {
            res.send(await User.findAll())
        } catch (error) {
            res.status(500).send({ message: "¡Problemas jefe!", error })
        }
    },
    async confirmUser(req, res) {
        try {
            const email = req.body.email;
            const emailToken = jwt.sign({ email }, jwt_secret, { expiresIn: '24h' });
            const url = API_URL + "/users/confirm/" + emailToken;
            await transporter.sendMail({
                to: email,
                subject: 'Confirma tu usuario en BoardGame Fan',
                html: `
                <h2>¡Bienvenid@ ${req.body.username}!</h2>
                <h3>Así que vas en serio, ¿eh?</h3>
                <br>
                <p>Pues haz click <a href="${url}">aquí</a> para confirmar tu email</p>
                <br>
                <p>Recordatorio: El link expira en 24 horas... Si no activas la cuenta antes, tendrás que volver a solicitar otro link de confirmación</p>
                `
            })
            res.send({ message: "Mail enviado" })
        } catch (error) {
            res.status(500).send({ message: "Problemas al enviar el email.", error })
        }
    },
    async confirmed(req, res) {
        try {
            const emailToken = req.params.emailToken;
            const payload = jwt.verify(emailToken, jwt_secret);
            const email = payload.email;
            await User.update({ confirmed: true }, { where: { email: email } });
            const user = await User.findOne({ where: { email: email } });
            const token = await Token.findOne({ where: { UserId: user.id } });
            const authToken = token.token
            res.redirect('https://boardgamefan.herokuapp.com/confirmed/' + authToken)
        } catch (error) {
            res.status(500).send({ message: "No hemos podido confirmar tu email." })
        }
    },
    async changePassword(req, res) {
        try {
            const email = req.body.email;
            const id = req.body.id;
            const url = "https://boardgamefan.herokuapp.com/" + id;
            await transporter.sendMail({
                to: email,
                subject: 'Cambiar tu contraseña de BoardGame Fan',
                html: `
                <h2>¡Hola ${req.body.username}!</h2>
                <br>
                <p>Aquí tienes tu </p><a href="${url}">link</a><p> para cambiar tu contraseña.</p>
                <br>
                <p>Recordatorio: El link expira en 24 horas...</p>
                `
            })
            res.send({ message: "Mail enviado" })
        } catch (error) {
            res.status(500).send({ message: "Problemas al enviar el email.", error })
        }
        // },
        // async newPassword(req, res) {
        //     try {
        //         const emailToken = req.params.emailToken;
        //         const payload = jwt.verify(emailToken, jwt_secret);
        //         const email = payload.email;
        //         await User.update({ password: req.body.password }, { where: { email: email } })
        //         res.send({ message: "Contraseña cambiada." });
        //     } catch (error) {
        //         res.status(500).send({ message: "No hemos podido cambiar tu contraseña." })
        //     }
    }
}
module.exports = UserController;