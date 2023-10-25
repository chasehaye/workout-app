const Routine = require('../../models/routine')

module.exports = {
    indexroutine,
    createroutine,
};

async function indexroutine(req, res){
    try{
        const routines = await Routine.find();
        res.status(200).json(routines)
    }catch(err){
        res.status(400).json(err)
    }
}

async function createroutine(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newRoutine = await Routine.create(req.body);
        res.status(201).json(newRoutine)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}