const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineCycleSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    routinesArr: [],
    routines: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Routine'
    }
});

module.exports = mongoose.model('RoutineCycle', routineCycleSchema)