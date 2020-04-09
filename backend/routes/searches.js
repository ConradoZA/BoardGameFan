const router = require('express').Router();
const SearchController = require('../controllers/SearchController.js');
const { authentication } = require("../middleware/authentication.js")

router.get('/game=:game', SearchController.getByName);
router.get('/year=:year', authentication, SearchController.getByYear);
router.get('/players=:player', authentication, SearchController.getByPlayers);
router.get('/mechanic=:mechanic', authentication, SearchController.getMechanicByName);
router.get('/category=:category', authentication, SearchController.getCategoryByName);
router.get('/designer=:author', authentication, SearchController.getAuthorByName);
router.get('/artist=:artist', authentication, SearchController.getArtistByName);
router.get('/minus/:time', authentication, SearchController.getByTimeMinus);
router.get('/plus/:time', authentication, SearchController.getByTimePlus);
router.get('/age=:age', authentication, SearchController.getByAge);
router.get('/latest', SearchController.getLatest);
router.get('/:id', SearchController.getById);


module.exports = router;