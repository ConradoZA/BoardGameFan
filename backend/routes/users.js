const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication, isSuper, isAdmin } = require("../middleware/authentication.js")

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/send', authentication, UserController.confirmUser);
router.get('/confirm/:emailToken', UserController.confirmed);
router.post('/change', authentication, UserController.changePassword);
// router.post('/change/:emailToken', authentication, UserController.newPassword);
router.get('/info', authentication, UserController.getMyInfo);
router.put('/info', authentication, UserController.updateUser);
router.get('/info/all', authentication, isAdmin, UserController.getAllUsers);
router.put('/info/:id', authentication, isSuper, UserController.upgradeRole);
router.put('/info/downgrade/:id', authentication, isSuper, UserController.degradeRole);
router.get('/collection', authentication, UserController.getMyCol);
router.post('/collection', authentication, UserController.newColGame);
router.put('/collection', authentication, UserController.updateColGame);
router.delete('/collection/:game', authentication, UserController.deleteColGame);
router.delete('/administration/:id', authentication, isAdmin, UserController.deleteUser);

module.exports = router