import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateFoodRequest } from '../../../utilities/foods-api';

export default function EditFoodForm({food, setFood, setEditFormIsOpen}){
    const navigate = useNavigate();
    const nameRef = useRef(food.name)
    const descriptionRef = useRef(food.description)
    const caloriesRef = useRef(food.calories)
    const carbohydratesRef = useRef(food.carbohydrates)
    const proteinRef = useRef(food.protein)
    const fatRef = useRef(food.fat)
    const costRef = useRef(food.cost)

    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedFood = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            calories: caloriesRef.current.value,
            carbohydrates: carbohydratesRef.current.value,
            protein: proteinRef.current.value,
            fat: fatRef.current.value,
            cost: costRef.current.value,

        }
        try{
            const newFood = await updateFoodRequest(food._id, updatedFood)
            setFood(newFood)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Invalid input try again")
        }
    }
    return(
        <>
        <h5>Edit</h5>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef} defaultValue={food.name}/>
                
                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef} defaultValue={food.description}/>

                <label htmlFor="calories">calories</label>
                <input type="number" id="calories" ref={caloriesRef} defaultValue={food.calories}/>

                <label htmlFor="carbohydrates">carbohydrates</label>
                <input type="number" id="carbohydrates" ref={carbohydratesRef} defaultValue={food.carbohydrates}/>

                <label htmlFor="protein">protein</label>
                <input type="number" id="protein" ref={proteinRef} defaultValue={food.protein}/>

                <label htmlFor="fat">fat</label>
                <input type="number" id="fat" ref={fatRef} defaultValue={food.fat}/>

                <label htmlFor="cost">cost</label>
                <input type="number" id="cost" ref={costRef} defaultValue={food.cost}/>

                <button>Edit Food</button>

            </form>
            </>
    )
}