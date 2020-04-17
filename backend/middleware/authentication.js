const jwt = require('jsonwebtoken');
const { User, Token, Sequelize } = require('../models/index');
const { Op } = Sequelize;
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.json')[env];

const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        const user = await User.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where: {
                [Op.and]: [{
                    token: token,
                }, {
                    UserId: payload.id
                }]
            }
        })
        console.log(tokenFound)
        if (!user || !tokenFound) {
            res.status(401).send({
                message: 'No estas autorizado',
                error
            })
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({
            message: 'No estas autorizado',
            error
        })
    }
}

const isAdmin = async(req, res, next) => {
    const admins = ['superAdmin', 'admin', 'god'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({
            message: 'No tienes permisos para ver esta sección'
        });
    }
    next();
}

const isSuper = async(req, res, next) => {
    const admins = ['superAdmin', 'god'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({
            message: 'No tienes permisos para ver esta sección'
        });
    }
    next();
}

const isGod = async(req, res, next) => {
    const admins = ['god'];
    console.log(req.user)
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({
            message: 'No tienes permisos para ver esta sección'
        });
    }
    next();
}
module.exports = {
    authentication,
    isAdmin,
    isSuper,
    isGod
};