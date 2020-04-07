const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication, isSuper } = require("../middleware/authentication.js")

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/info', authentication, UserController.getMyInfo);
router.put('/info', authentication, UserController.updateUser);
router.put('/info/:id', authentication, isSuper, UserController.changeRole);
router.get('/collection', authentication, UserController.getMyCol);
router.post('/collection', authentication, UserController.newColGame);
router.put('/collection', authentication, UserController.updateColGame);
router.delete('/collection/:game', authentication, UserController.deleteColGame);

module.exports = router