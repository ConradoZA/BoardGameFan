const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const gamesRouter = require("./routes/games.js")
const mechanicsRouter = require("./routes/mechanics.js")
const categoriesRouter = require("./routes/categories.js")
const authorsRouter = require("./routes/authors.js")
const artistsRouter = require("./routes/artists.js")
const searchesRouter = require("./routes/searches.js")
const usersRouter = require("./routes/users.js")
const hacksRouter = require("./routes/hacks.js")
const { authentication, isAdmin, isGod } = require("./middleware/authentication.js")

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.use("/games", authentication, isAdmin, gamesRouter);
app.use("/mechanics", authentication, isAdmin, mechanicsRouter);
app.use("/categories", authentication, isAdmin, categoriesRouter);
app.use("/authors", authentication, isAdmin, authorsRouter);
app.use("/artists", authentication, isAdmin, artistsRouter);
app.use("/search", searchesRouter);
app.use("/users", usersRouter);
app.use("/hacks", authentication, isGod, hacksRouter);

app.listen(PORT, () => console.log('server running on ' + PORT));