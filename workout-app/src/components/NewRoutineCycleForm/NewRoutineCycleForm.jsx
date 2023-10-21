import { useRef, useState } from 'react';
import { createRoutineCycleRequest } from '../../utilities/routineCycles-api';
import { useNavigate, useParams } from "react-router-dom";

export default function NewRoutineCycleForm(){
    const navigate = useNavigate();
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const [error, setError] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newRoutineCycle = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
        }
        try{
            const newRoutineCycleResponse = await createRoutineCycleRequest(newRoutineCycle)
            navigate('/routineCycles')
        }catch(err){
            setError(err)
            console.log(err)
        }
        console.log(newRoutineCycle)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef}/>
                
                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef}/>

                <button>Create RoutineCycle</button>

            </form>
        </>
    )
}