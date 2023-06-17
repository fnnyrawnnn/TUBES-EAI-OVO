const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/transaction', controller.getAllTransactions)
router.post('/transaction', controller.createTransactions)

module.exports = router;