const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

router.get('/check', healthController.check);
router.get('/list', healthController.list);

module.exports = router;