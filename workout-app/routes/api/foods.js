const express = require('express')
const router = express.Router()
const foodsController = require('../../controllers/api/foods')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', foodsController.indexFood)
router.post('/', foodsController.createFood)
router.get('/:id', foodsController.detailFood)
router.delete('/:id', foodsController.deleteFood)
router.put('/:id', foodsController.updateFood)

module.exports = router