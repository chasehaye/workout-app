import { useState } from 'react'
import EditRoutineForm from './EditRoutineForm/EditRoutineForm'
export default function RoutineDetail({routine, handleDelete, setRoutine}){
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
            <h5>{routine.name}</h5>
            <p>Description: {routine.description}</p>

            <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditRoutineForm routine={routine} setRoutine={setRoutine} setEditFormIsOpen={setEditFormIsOpen}></EditRoutineForm>
                }
                <button onClick={handleDelete}>DELETE</button>
        </div>
        </>
    )
}