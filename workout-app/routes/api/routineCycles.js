const express = require('express');
const router = express.Router();
const routineCyclesController = require('../../controllers/api/routineCycles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', routineCyclesController.index);
router.post('/', routineCyclesController.create);
router.get('/:id', routineCyclesController.detail);
router.delete('/:id', routineCyclesController.deleteRoutineCycle);
router.put('/:id', routineCyclesController.update);

module.exports = router;