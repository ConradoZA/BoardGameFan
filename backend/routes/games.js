const router = require('express').Router();
const GameController = require('../controllers/GameController.js');
const { authentication, isSuper } = require("../middleware/authentication.js")

router.get('/', GameController.getAll);
router.get('/:id', GameController.getOne);
router.post('/', GameController.insert);
router.put('/:id', GameController.put);
router.delete('/:id', authentication, isSuper, GameController.delete);

module.exports = router;