const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/history', controller.getAllHistories)
router.post('/history', controller.createHistories)

module.exports = router;