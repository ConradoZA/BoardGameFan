const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController.js');

router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getOne);
router.post('/many', CategoryController.insertMany);
router.post('/', CategoryController.insert);
router.put('/:id', CategoryController.put);
router.delete('/:id', CategoryController.delete);

module.exports = router;