const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/transactionDone', controller.getAllTransactionsDone)
router.post('/transactionDone', controller.createTransactionsDone)

module.exports = router;