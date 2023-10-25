const Routine = require('../../models/routine')

module.exports = {
    indexRoutine,
    createRoutine,
    routineDetail,
    deleteRoutine,
    updateRoutine,
};

async function indexRoutine(req, res){
    try{
        const routines = await Routine.find();
        res.status(200).json(routines)
    }catch(err){
        res.status(400).json(err)
    }
}

async function createRoutine(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newRoutine = await Routine.create(req.body);
        res.status(201).json(newRoutine)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function routineDetail(req, res){
    try{
        const routine = await Routine.findById(req.params.id)
        res.status(200).json(routine)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteRoutine(req, res){
    try{
        await Routine.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function updateRoutine(req, res){
    try{
        const updatedRoutine = await Routine.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedRoutine)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}