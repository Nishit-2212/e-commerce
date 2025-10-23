const express = require('express');
const router = express.Router();
const { list, getOne, create } = require('../controllers/product.controller');
const { requireAuth } = require('../middleware/auth');

router.get('/', list);
router.get('/:id', getOne);
router.post('/', requireAuth, create);

module.exports = router;
