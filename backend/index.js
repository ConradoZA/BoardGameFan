const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')
const gamesRouter = require("./routes/games.js")
const mechanicsRouter = require("./routes/mechanics.js")
const categoriesRouter = require("./routes/categories.js")
const authorsRouter = require("./routes/authors.js")
const artistsRouter = require("./routes/artists.js")
const searchesRouter = require("./routes/searches.js")
const usersRouter = require("./routes/users.js")
const hacksRouter = require("./routes/hacks.js")
const backsRouter = require("./routes/backs.js")
const { authentication, isGod } = require("./middleware/authentication.js")

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})
app.options('/*', (req, res) => res.send()); //para que las peticiones OPTIONS no requieran autentificación

app.use(express.static(path.join(__dirname, 'public')));

app.use("/games", authentication, gamesRouter);
app.use("/mechanics", authentication, mechanicsRouter);
app.use("/categories", authentication, categoriesRouter);
app.use("/authors", authentication, authorsRouter);
app.use("/artists", authentication, artistsRouter);
app.use("/search", searchesRouter);
app.use("/users", usersRouter);
app.use("/hacks", authentication, isGod, hacksRouter);
app.use("/back", backsRouter);

app.listen(PORT, () => console.log('server running on ' + PORT));