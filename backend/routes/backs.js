const router = require('express').Router();
const BackController = require('../controllers/BackController.js');
const { authentication } = require('../middleware/authentication.js')


router.post('/confirm', authentication, BackController.hashPass);
router.post('/forgot', BackController.sendForgottenMail);
router.post('/remember', BackController.updatePassword);


module.exports = router;