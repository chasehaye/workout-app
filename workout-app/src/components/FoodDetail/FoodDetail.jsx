import { useState } from 'react'
import EditFoodForm from './EditFoodForm/EditFoodForm'
export default function FoodDetail({food, handleDelete, setFood}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => {
            return !prevState
            }
        )
    }
    return (
        <>
        <div>
            <h5>{food.name}</h5>
            <p>Description: {food.description}</p>

            <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditFoodForm food={food} setFood={setFood} setEditFormIsOpen={setEditFormIsOpen}></EditFoodForm>
                }
                <button onClick={handleDelete}>DELETE</button>
        </div>
        </>
    )
}