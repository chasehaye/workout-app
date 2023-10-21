import { useState} from 'react'
import EditRoutineCycleForm from './EditRoutineCycleForm/EditRoutineCycleForm'
export default function RoutineCycleDetail({routineCycle, handleDelete, setRoutineCycle}){
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

                <h3>{routineCycle.name}</h3>
                <p>Description: {routineCycle.description}</p>
                <p>Cost: {routineCycle.cost}</p>

                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditRoutineCycleForm routineCycle={routineCycle} setRoutineCycle={setRoutineCycle} setEditFormIsOpen={setEditFormIsOpen}></EditRoutineCycleForm>
                }
                <button onClick={handleDelete}>DELETE</button>
            </div>
        </>
    )
}