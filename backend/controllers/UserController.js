const { User, Token, UserGame, Sequelize } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.json')[env];
const { Op } = Sequelize;

const UserController = {
    async register(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 9);
            const user = await User.create({
                username: req.body.username,
                password,
                role: 'user'
            });
            res.status(201).send({ user, message: 'User creado con éxito' });
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
            res.status(500).send({ message: 'Hubo un problema al tratar de logearnos' });
        }
    },

    async getInfo(req, res) {
        res.send(req.user);
    },
    async getMine(req, res) {
        try {
            res.send(await UserGame.findAll({ include: [Game], where: { UserId: +req.user.id } }))
        } catch (error) {
            res.status(500).send({ message: "Ha habido problemas al tratar de obtener tu colección de juegos.", error })
        }
    },
    async newGame(req, res) {
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
    async newManyGame(req, res) { //PREGUNTAR
        try {
            await UserGame.bulkCreate([...req.body], { UserId: req.user.id });
            res.status(201).send({ message: "Se han introducido con éxito todos los juegos a tu colección." })
        } catch (error) {
            res.status(500).send({ message: "Ha habido problemas al tratar de añadir un juego a tu colección.", error })
        }
    },
    async putGame(req, res) {
        try {
            await UserGame.update({
                comment: req.body.comment,
                rating: req.body.rating
            }, {
                where: {
                    [Op.and]: [{ UserId: +req.user.id }, { GameId: +req.body.GameId }]
                }
            });
            res.status(201).send({ message: "Se ha actualizado con éxito el juego a tu colección." })
        } catch (error) {
            res.status(500).send({ message: "Ha habido problemas al tratar de añadir un juego a tu colección.", error })
        }
    },
    async deleteGame(req, res) {
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
    }
}
module.exports = UserController;