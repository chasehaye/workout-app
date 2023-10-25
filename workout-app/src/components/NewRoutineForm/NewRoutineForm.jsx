import { useRef, useState} from 'react';
import { createRoutineRequest } from '../../utilities/routines-api';
import { useNavigate, useParams } from 'react-router-dom';

export default function NewRoutineForm(){
    const navigate = useNavigate();
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const [error, setError] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newRoutine = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
        }
        try{
            const newRoutineResponse = await createRoutineRequest(newRoutine)
            navigate('/routines')
        }catch(err){
            setError(err)
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef}/>
                
                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef}/>

                <button>Create a Routine day</button>

            </form>
        </>
    )
}