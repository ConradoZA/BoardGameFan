const router = require('express').Router();
const HackController = require('../controllers/HackController.js');


router.get('/:id', HackController.importFromBGG);

module.exports = router;