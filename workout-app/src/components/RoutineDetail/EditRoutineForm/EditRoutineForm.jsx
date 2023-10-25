import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateRoutineRequest } from '../../../utilities/routines-api';

export default function EditRoutineForm({routine, setRoutine, setEditFormIsOpen}){
    const navigate = useNavigate();
    const nameRef = useRef(routine.name)
    const descriptionRef = useRef(routine.description)

    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedRoutine = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
        }
        try{
            const newRoutine = await updateRoutineRequest(routine._id, updatedRoutine)
            setRoutine(newRoutine)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad update try again")
        }
    }
    return(
        <>
        <h5>Edit</h5>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef} defaultValue={routine.name}/>
                
                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef} defaultValue={routine.description}/>

                <button>Edit Routine</button>

            </form>
            </>
    )
}