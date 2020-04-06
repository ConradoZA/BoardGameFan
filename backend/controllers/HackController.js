const fetch = require("node-fetch");
const xml2js = require('xml2js');
const parser = new xml2js.Parser;
const { Artist, Author, Category, Game, Mechanic } = require("../models/index")

const HackController = {
    async importFromBGG(req, res) {
        try {
            const resp = await fetch(`https://boardgamegeek.com/xmlapi/boardgame/${req.params.id}`);
            const data = await resp.text();
            let doc = await parser.parseStringPromise(data);
            let juego = doc.boardgames.boardgame[0];
            let juegoFinal = {
                name: "",
                minPlayer: "",
                maxPlayer: "",
                year: "",
                minTime: "",
                maxTime: "",
                age: "",
                image: "",
                description: ""
            };

            for (let name of juego.name) {
                let nam = await Game.findOne({ where: { name: name._ } })
                if (nam) { throw new Error("El juego ya existe") }
                if (name.$.primary == "true") {
                    juegoFinal.name += name._;
                }
            };
            juegoFinal.minPlayer += juego.minplayers;
            juegoFinal.maxPlayer += juego.maxplayers;
            juegoFinal.year += juego.yearpublished;
            juegoFinal.minTime += juego.minplaytime;
            juegoFinal.maxTime += juego.maxplaytime;
            juegoFinal.age += juego.age;
            juegoFinal.image += juego.image;
            juegoFinal.description += juego.description;
            const game = await Game.create(juegoFinal)

            for (let mechanic of juego.boardgamemechanic) {
                let mec = await Mechanic.findOne({ where: { name: mechanic._ } })
                if (!mec) {
                    mec = await Mechanic.create({ name: mechanic._ })
                }
                game.addMechanic(mec.id)
            };
            for (let category of juego.boardgamecategory) {
                let cat = await Category.findOne({ where: { name: category._ } })
                if (!cat) {
                    cat = await Category.create({ name: category._ })
                }
                game.addCategory(cat.id)
            };
            for (let designer of juego.boardgamedesigner) {
                let des = await Author.findOne({ where: { name: designer._ } })
                if (!des) {
                    des = await Author.create({ name: designer._ })
                }
                game.addAuthor(des.id)
            };
            for (let artist of juego.boardgameartist) {
                let art = await Artist.findOne({ where: { name: artist._ } })
                if (!art) {
                    art = await Artist.create({ name: artist._ })
                }
                game.addArtist(art.id)
            };
            for (let subdomain of juego.boardgamesubdomain) {
                let sub = await Category.findOne({ where: { name: subdomain._ } })
                if (!sub) {
                    sub = await Category.create({ name: subdomain._ })
                }
                game.addCategory(sub.id)
            };
            res.send(game)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Ah-ah-ah; you didn't say the magic word.", error })
        }
    }
}
module.exports = HackController;