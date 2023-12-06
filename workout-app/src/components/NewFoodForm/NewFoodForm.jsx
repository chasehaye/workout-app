import { useRef, useState } from "react";
import { createFoodRequest } from "../../utilities/foods-api";
import { useNavigate, useParams } from "react-router-dom";

export default function NewFoodForm(){
    const navigate = useNavigate()
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const caloriesRef = useRef('')
    const carbohydratesRef = useRef('')
    const proteinRef = useRef('')
    const fatRef = useRef('')
    const costRef = useRef('')

    const [error, setError] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newFood = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            calories: caloriesRef.current.value,
            carbohydrates: carbohydratesRef.current.value,
            protein: proteinRef.current.value,
            fat: fatRef.current.value,
            cost: costRef.current.value,
        }
        try{
            const newFoodResponse = await createFoodRequest(newFood)
            navigate('/foods')
        }catch(err){
            setError(err)
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' ref={nameRef}/>
                
                <label htmlFor='description'>description</label>
                <input type="text" id='description' ref={descriptionRef}/>

                <label htmlFor='calories'>calories</label>
                <input type="number" id='calories' ref={caloriesRef}/>

                <label htmlFor='carbohydrates'>carbohydrates</label>
                <input type="number" id='carbohydrates' ref={carbohydratesRef}/>

                <label htmlFor='protein'>protein</label>
                <input type="number" id='protein' ref={proteinRef}/>

                <label htmlFor='fat'>fat</label>
                <input type="number" id='fat' ref={fatRef}/>

                <label htmlFor='cost'>cost</label>
                <input type="number" id='cost' ref={costRef}/>

                <button>Add a new Food</button>

            </form>
        </>
    )
}