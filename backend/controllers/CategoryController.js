const express = require('express');
const router = express.Router();
const { Game, Category, sequelize } = require('../models/index.js')

const CategoryController = {
    getAll(req, res) {
        Category.findAll({ include: [Game] })
            .then(categories => res.send(categories))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener los tipos de juego.'))
    },
    getOne(req, res) {
        Category.findOne({
                include: [Game],
                where: { id: req.params.id }
            })
            .then(category => res.send(category))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de obtener el tipo de juego.'))

    },
    insert(req, res) {
        Category.create({
                name: req.body.name
            })
            .then(category => res.status(201).send(category))
            .catch(err => {
                console.log(err);
                res.status(500).send('Ha habido problemas al tratar de crear el tipo de juego.')
            })
    },
    insertMany(req, res) {
        Category.bulkCreate([...req.body])
            .then(category => res.status(201).send("Hecho!"))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de crear los tipos de juego.'))
    },
    put(req, res) {
        Category.update({...req.body }, { where: { id: req.params.id } })
            .then(category => category.findByPk(req.params.id))
            .then(category => {
                res.status(200).send(category)
            })
            .catch(err => res.status(500).send('Ha habido problemas al tratar de actualizar el tipo de juego.'))
    },
    delete(req, res) {
        Category.destroy({ where: { id: req.params.id } })
            .then(() => sequelize.query(`DELETE FROM CategoryGames where CategoryId = ${req.params.id}`))
            .then(() => res.status(200).send('Tipo eliminado.'))
            .catch(err => res.status(500).send('Ha habido problemas al tratar de eliminar el tipo de juego.'))
    }
}
module.exports = CategoryController;