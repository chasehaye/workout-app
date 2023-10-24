const Routine = require('../../models/routine')

module.exports = {
    index,
};

async function index(req, res){
    try{
        const routines = await Routine.find();
        res.status(200).json(routines)
    }catch(err){
        res.status(400).json(err)
    }
}