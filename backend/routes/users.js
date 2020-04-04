const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication, isAdmin } = require("../middleware/authentication.js")

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/info', authentication, isAdmin, UserController.getInfo);
router.get('/collection', authentication, UserController.getMine);
router.post('/collection', authentication, UserController.newGame);
router.post('/collection/many', authentication, UserController.newManyGame);
router.put('/collection', authentication, UserController.putGame);
router.delete('/collection/:game', authentication, UserController.deleteGame);

module.exports = router