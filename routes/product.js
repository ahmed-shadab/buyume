const express = require('express');
const router = express.Router();
const controller = require('../controller/product')
router.post('/operation',controller.operation);

module.exports = router;