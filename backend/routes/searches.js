const router = require('express').Router();
const SearchController = require('../controllers/SearchController.js');
const { authentication } = require("../middleware/authentication.js")

router.get('/all', SearchController.getAllGamesNames);
router.get('/game=:game', SearchController.getByName);
router.get('/year/:year', authentication, SearchController.getByYear);
router.get('/players/minus/:player', authentication, SearchController.getByPlayerMinus);
router.get('/players/plus/:player', authentication, SearchController.getByPlayerPlus);
router.get('/players/:player', authentication, SearchController.getByPlayers);
router.get('/mechanic=:mechanic', authentication, SearchController.getMechanicByName);
router.get('/category=:category', authentication, SearchController.getCategoryByName);
router.get('/designer=:author', authentication, SearchController.getAuthorByName);
router.get('/artist=:artist', authentication, SearchController.getArtistByName);
router.get('/time/minus/:time', authentication, SearchController.getByTimeMinus);
router.get('/time/plus/:time', authentication, SearchController.getByTimePlus);
router.get('/time/:time', authentication, SearchController.getByTime);
router.get('/age/:age', authentication, SearchController.getByAge);
router.get('/latest', SearchController.getLatest);
router.get('/:id', SearchController.getById);


module.exports = router;