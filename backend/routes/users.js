const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication } = require("../middleware/authentication.js")

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/info', authentication, UserController.getMyInfo);
router.get('/collection', authentication, UserController.getMyCol);
router.post('/collection', authentication, UserController.newColGame);
router.put('/collection', authentication, UserController.updateColGame);
router.delete('/collection/:game', authentication, UserController.deleteColGame);

module.exports = router