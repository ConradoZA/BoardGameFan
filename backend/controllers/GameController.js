const express = require('express');
const router = express.Router();
const { Game, Category, Mechanic, Author, Artist, sequelize } = require('../models/index.js')

const GameController = {
    getAll(req, res) {
        Game.findAll({ include: [Category, Mechanic, Author, Artist] })
            .then(games => res.send(games))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))
    },
    getOne(req, res) {
        Game.findOne({
                include: [Category, Mechanic, Author, Artist],
                where: { id: req.params.id }
            })
            .then(game => res.send(game))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los juegos.'))

    },
    insert(req, res) {
        Game.create({
                name: req.body.name,
                year: req.body.year,
                image: req.body.image,
                minPlayer: req.body.minPlayer,
                maxPlayer: req.body.maxPlayer,
                minTime: req.body.minTime,
                maxTime: req.body.maxTime,
                age: req.body.age,
                description: req.body.description
            })
            .then(game => {
                game.addCategory(req.body.CategoryId);
                game.addMechanic(req.body.MechanicId);
                game.addAuthor(req.body.AuthorId);
                game.addArtist(req.body.ArtistId);
                res.send(game);

            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Ha habido problemas al tratar de actualizar el juego.')
            })
    },
    put(req, res) {
        Game.update({...req.body }, { where: { id: req.params.id } })
            .then(game => Game.findByPk(req.params.id))
            .then(game => {
                if (req.body.CategoryId) {
                    game.setCategories(req.body.CategoryId);
                }
                if (req.body.MechanicId) {
                    game.setMechanics(req.body.MechanicId);
                }
                if (req.body.AuthorId) {
                    game.setAuthors(req.body.AuthorId);
                }
                if (req.body.ArtistId) {
                    game.setArtists(req.body.ArtistId);
                }
                res.send(game)
            })
            .catch(err => res.status(500).send('Ha habido problemas al tratar de actualizar el juego.'))
    },
    async delete(req, res) {
        try {
            console.log('DELETE GAME')
            await Game.destroy({ where: { id: req.params.id } })
            sequelize.query(`DELETE FROM CategoryGames where GameId = ${req.params.id}`);
            sequelize.query(`DELETE FROM MechanicGames where GameId = ${req.params.id}`);
            sequelize.query(`DELETE FROM AuthorGames where GameId = ${req.params.id}`);
            sequelize.query(`DELETE FROM ArtistGames where GameId = ${req.params.id}`);
            sequelize.query(`DELETE FROM UserGames where GameId = ${req.params.id}`);
            res.send({ message: "Juego eliminado." })
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
module.exports = GameController;