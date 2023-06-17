const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/payment', controller.getAllPayments)
router.post('/payment', controller.createPayments)

module.exports = router;