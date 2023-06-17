const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/user', controller.getAllUsers)
router.post('/user', controller.createUsers)

module.exports = router;