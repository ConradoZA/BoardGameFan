const { User } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.json')[env];
const transporter = require('../config/nodemailer');

const BackController = {
    async hashPass(req, res) {
        try {
            const user = await User.findByPk(req.body.id)
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) { return res.status(400).send({ message: 'Contraseña incorrecta' }) } else { return res.send({ message: "Match" }) }
        } catch (error) {
            res.status(500).send({ message: 'No he podido hashear el password' });
        }
    },
    async sendForgottenMail(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    username: req.body.username
                }
            })
            const userId = user.id;
            const passToken = jwt.sign({ userId }, jwt_secret, { expiresIn: '24h' });
            const url = "https://boardgamefan.herokuapp.com/recover/" + passToken;
            await transporter.sendMail({
                to: user.email,
                subject: 'Recupera tu contraseña de BoardGame Fan',
                html: `
                        <h3>¿Te has olvidado de tu contraseña?</h3>
                        <br>
                        <p>Pues vas a tener que crear una nueva:<br>
                        Para eso tienes que hacer click <a href="${url}">aquí</a> e introducir una nueva contraseña.</p>
                        <br>
                        <p>Recordatorio: El link expira en 24 horas... Si no activas la cuenta antes, tendrás que volver a solicitar otro link de confirmación</p>
                        `
            })
            res.send({ message: "Mail enviado" })
        } catch (error) {
            res.status(500).send({ message: "Problemas al enviar el email.", error })
        }
    },
    async updatePassword(req, res) {
        try {
            const payload = jwt.verify(req.body.token, jwt_secret);
            const password = await bcrypt.hash(req.body.password, 9);
            const user = await User.findByPk(payload.userId)
            await User.update({ password: password }, { where: { id: user.id } });
            res.send({ message: "Contraseña cambiada" })
        } catch (error) {
            res.status(500).send({ message: "Problemas al cambiar la contraseña.", error })
        }
    },
    async uploadImage(req, res) {
        try {

            await User.update({ image: req.file.filename }, { where: { id: req.user.id } });
            res.send({ message: "Imagen actualizada." })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "No se han actualizado los datos en la base.", error })
        }
    }
}
module.exports = BackController;