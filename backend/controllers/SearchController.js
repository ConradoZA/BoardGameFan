const express = require('express');
const router = express.Router();
const { Game, Category, Mechanic, Author, Artist, sequelize, Sequelize } = require('../models/index.js')
const { Op } = Sequelize;

const SearchController = {
    getAllGamesNames(req, res) {
        Game.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send({ message: 'Ha habido problemas al tratar de obtener los juegos.', err }))
    },
    getByName(req, res) {
        Game.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.params.game}%`
                    }
                },
                order: [
                    ['name', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByYear(req, res) {
        Game.findAll({
                where: { year: req.params.year },
                order: [
                    ['name', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))

    },
    getByPlayerMinus(req, res) {
        Game.findAll({
                where: {
                    maxPlayer: {
                        [Op.gte]: +req.params.player
                    }
                },
                order: [
                    ['maxPlayer', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByPlayerPlus(req, res) {
        Game.findAll({
                where: {
                    minPlayer: {
                        [Op.lte]: +req.params.player
                    }
                },
                order: [
                    ['maxPlayer', 'DESC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByPlayers(req, res) {
        Game.findAll({
                where: {
                    [Op.and]: [{
                        maxPlayer: {
                            [Op.gte]: +req.params.player
                        }
                    }, {
                        minPlayer: {
                            [Op.lte]: +req.params.player
                        }
                    }]
                },
                order: [
                    ['minPlayer', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getMechanicByName(req, res) {
        Mechanic.findAll({
                include: [Game],
                where: {
                    name: {
                        [Op.like]: `%${req.params.mechanic}%`
                    }
                },
                order: [
                    ['name', 'ASC'],
                    [Game, 'name', 'ASC']
                ]
            })
            .then(mechanics => res.send(mechanics))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener las mecánicas de juego.'))
    },
    getCategoryByName(req, res) {
        Category.findAll({
                include: [Game],
                where: {
                    name: {
                        [Op.like]: `%${req.params.category}%`
                    }
                },
                order: [
                    ['name', 'ASC'],
                    [Game, 'name', 'ASC']
                ]
            })
            .then(categories => res.send(categories))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los tipos de juego.'))
    },
    getAuthorByName(req, res) {
        Author.findAll({
                include: [Game],
                where: {
                    name: {
                        [Op.like]: `%${req.params.author}%`
                    }
                },
                order: [
                    ['name', 'ASC'],
                    [Game, 'name', 'ASC']
                ]
            })
            .then(authors => res.send(authors))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los autores.'))
    },
    getArtistByName(req, res) {
        Artist.findAll({
                include: [Game],
                where: {
                    name: {
                        [Op.like]: `%${req.params.artist}%`
                    }
                },
                order: [
                    ['name', 'ASC'],
                    [Game, 'name', 'ASC']
                ]
            })
            .then(artists => res.send(artists))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los artistas.'))
    },
    getByTimeMinus(req, res) {
        Game.findAll({
                where: {
                    maxTime: {
                        [Op.gte]: +req.params.time
                    }
                },
                order: [
                    ['maxTime', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByTimePlus(req, res) {
        Game.findAll({
                where: {
                    minTime: {
                        [Op.lte]: +req.params.time
                    }
                },
                order: [
                    ['maxTime', 'DESC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByTime(req, res) {
        Game.findAll({
                where: {
                    [Op.and]: [{
                        maxTime: {
                            [Op.gte]: +req.params.time
                        }
                    }, {
                        minTime: {
                            [Op.lte]: +req.params.time
                        }
                    }]
                },
                order: [
                    ['minTime', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByAge(req, res) {
        Game.findAll({
                where: {
                    age: {
                        [Op.lte]: +req.params.age
                    }
                },
                order: [
                    ['age', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getLatest(req, res) {
        Game.findAll({
                offset: 5,
                limit: 5,
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            .then(games => {
                res.send(games)
            })
            .catch(err => res.status(500).send({ message: "Ha habido un problema al cargar los últimos juegos creados", err }))
    },
    getById(req, res) {
        Game.findOne({
                include: [Category, Mechanic, Author, Artist],
                where: { id: req.params.id }
            })
            .then(game => res.send(game))
            .catch(err => res.status(500).send({ message: 'Ha habido problemas al tratar de obtener el juego.', err }))

    }
}
module.exports = SearchController;