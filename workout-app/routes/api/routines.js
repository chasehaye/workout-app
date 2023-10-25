const express = require('express');
const router = express.Router();
const routinesController = require('../../controllers/api/routines');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', routinesController.indexroutine);
router.post('/', routinesController.createroutine);

module.exports = router;
