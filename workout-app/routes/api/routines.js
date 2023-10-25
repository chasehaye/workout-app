const express = require('express');
const router = express.Router();
const routinesController = require('../../controllers/api/routines');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', routinesController.indexRoutine);
router.post('/', routinesController.createRoutine);
router.get('/:id', routinesController.routineDetail);
router.delete('/:id', routinesController.deleteRoutine);
router.put('/:id', routinesController.updateRoutine);

module.exports = router;
