const express = require('express');
const router = express.Router();
const controller = require('../controller/product')
router.get('/get',controller.getData);
router.post('/post',controller.postData);
router.post('/multiplePost',controller.postMultipleData);

module.exports = router;