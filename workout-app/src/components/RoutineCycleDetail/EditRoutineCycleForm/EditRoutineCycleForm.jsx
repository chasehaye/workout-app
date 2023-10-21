import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateRoutineCycleRequest } from '../../../utilities/routineCycles-api';

export default function EditRoutineCycleForm({routineCycle, setRoutineCycle, setEditFormIsOpen}){
    const navigate = useNavigate();
    const nameRef = useRef(routineCycle.name)
    const descriptionRef = useRef(routineCycle.description)
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedRoutineCycle = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
        }
        try{
            const newRoutineCycle = await updateRoutineCycleRequest(routineCycle._id, updatedRoutineCycle)
            setRoutineCycle(newRoutineCycle)
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
                <input type="text" id="name" ref={nameRef} defaultValue={routineCycle.name}/>
                
                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef} defaultValue={routineCycle.description}/>

                <button>Edit RoutineCycle</button>

            </form>
            </>
    )
}