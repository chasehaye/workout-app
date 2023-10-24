const express = require('express');
const router = express.Router();
const routinesController = require('../../controllers/api/routines');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/routine', routinesController.index);

module.exports = router;
