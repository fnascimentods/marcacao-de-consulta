const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/carro/:id', controller.findById);
router.get('/carros', controller.findAll);

module.exports = router;