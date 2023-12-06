const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    calories: {type: Number},
    carbohydrate: {type: Number},
    protein: {type: Number},
    fat: {type: Number},
    cost: {type: Number},
})

module.exports = mongoose.model('Food', foodSchema)
