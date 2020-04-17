const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication, isSuper, isAdmin } = require("../middleware/authentication.js")

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/send', authentication, UserController.confirmUser);
router.get('/confirm/:emailToken', authentication, UserController.confirmed);
router.get('/change/:emailToken', authentication, UserController.confirmed);
router.get('/info', authentication, UserController.getMyInfo);
router.put('/info', authentication, UserController.updateUser);
router.get('/info/all', authentication, isAdmin, UserController.getAllUsers);
router.get('/info/certified', authentication, isSuper, UserController.getTrueUsers);
router.put('/info/:id', authentication, isSuper, UserController.changeRole);
router.get('/collection', authentication, UserController.getMyCol);
router.post('/collection', authentication, UserController.newColGame);
router.put('/collection', authentication, UserController.updateColGame);
router.delete('/collection/:game', authentication, UserController.deleteColGame);
router.delete('/administration/:id', authentication, isAdmin, UserController.deleteUser);

module.exports = router