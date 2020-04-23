const router = require('express').Router();
const BackController = require('../controllers/BackController.js');
const { authentication } = require('../middleware/authentication.js');
const { uploader } = require('../middleware/multer.js');


router.post('/confirm', authentication, BackController.hashPass);
router.post('/forgot', BackController.sendForgottenMail);
router.post('/remember', BackController.updatePassword);
router.post('/upload', authentication, uploader, BackController.uploadImage);


module.exports = router;