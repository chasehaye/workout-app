const Food = require('../../models/food')

module.exports = {
    indexFood,
    createFood,
    detailFood,
    deleteFood,
    updateFood,
}

async function indexFood(req,res){
    try{
        const foods = await Food.find()
        res.status(200).json(foods)
    }catch(err){
        res.status(400).json(err)
    }
}

async function createFood(req, res){
    try{
        req.body.uploaded_by = req.user._id
        const newFood = await Food.create(req.body)
        res.status(200).json(newFood)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detailFood(req, res){
    try{
        const food = await Food.findById(req.params.id)
        res.status(200).json(food)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteFood(req, res){
    try{
        await Food.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function updateFood(req, res){
    try{
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedFood)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}