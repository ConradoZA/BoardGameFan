const express = require('express');
const router = express.Router();
const { Game, Category, Mechanic, Author, Artist, sequelize, Sequelize } = require('../models/index.js')
const { Op } = Sequelize;

const SearchController = {
    getByName(req, res) {
        Game.findAll({
                include: [Category, Mechanic, Author, Artist],
                where: {
                    name: {
                        [Op.like]: `%${req.params.game}%`
                    }
                },
                order: [
                    ['name', 'ASC'],
                    [Author, 'name', 'ASC'],
                    [Mechanic, 'name', 'ASC'],
                    [Category, 'name', 'ASC'],
                    [Artist, 'name', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByYear(req, res) {
        Game.findAll({
                include: [Category, Mechanic, Author, Artist],
                where: { year: req.params.year },
                order: [
                    ['name', 'ASC'],
                    [Author, 'name', 'ASC'],
                    [Mechanic, 'name', 'ASC'],
                    [Category, 'name', 'ASC'],
                    [Artist, 'name', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))

    },
    getByPlayers(req, res) {
        Game.findAll({
                include: [Category, Mechanic, Author, Artist],
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
                    ['name', 'ASC'],
                    [Author, 'name', 'ASC'],
                    [Mechanic, 'name', 'ASC'],
                    [Category, 'name', 'ASC'],
                    [Artist, 'name', 'ASC']
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
                include: [Category, Mechanic, Author, Artist],
                where: {
                    maxTime: {
                        [Op.gte]: +req.params.time
                    }
                },
                order: [
                    ['name', 'ASC'],
                    [Author, 'name', 'ASC'],
                    [Mechanic, 'name', 'ASC'],
                    [Category, 'name', 'ASC'],
                    [Artist, 'name', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByTimePlus(req, res) {
        Game.findAll({
                include: [Category, Mechanic, Author, Artist],
                where: {
                    minTime: {
                        [Op.lte]: +req.params.time
                    }
                },
                order: [
                    ['name', 'ASC'],
                    [Author, 'name', 'ASC'],
                    [Mechanic, 'name', 'ASC'],
                    [Category, 'name', 'ASC'],
                    [Artist, 'name', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getByAge(req, res) {
        Game.findAll({
                include: [Category, Mechanic, Author, Artist],
                where: {
                    age: {
                        [Op.lte]: +req.params.age
                    }
                },
                order: [
                    ['name', 'ASC'],
                    [Author, 'name', 'ASC'],
                    [Mechanic, 'name', 'ASC'],
                    [Category, 'name', 'ASC'],
                    [Artist, 'name', 'ASC']
                ]
            })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getLatest(req, res) {
        Game.findAll({
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            .then(games => {
                if (games.length > 5) { games = games.slice(0, 5) }
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