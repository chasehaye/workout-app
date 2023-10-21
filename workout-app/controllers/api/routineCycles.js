const RoutineCycle = require ('../../models/routineCycle')

module.exports = {
    index,
    create,
    detail,
    deleteRoutineCycle,
    update
  };
  
async function index(req, res){
    try{
        const routineCycles = await RoutineCycle.find();
        res.status(200).json(routineCycles)
    }catch(err){
        res.status(400).json(err)
    }
}
async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newRoutineCycle = await RoutineCycle.create(req.body);
        res.status(201).json(newRoutineCycle)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const routineCycle = await RoutineCycle.findById(req.params.id)
        res.status(200).json(routineCycle)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteRoutineCycle(req, res){
    try{
        await RoutineCycle.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedRoutineCycle = await RoutineCycle.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedRoutineCycle)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}