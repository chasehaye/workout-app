import { useNavigate, useParams } from "react-router-dom";
import { getRoutineRequest, deleteRoutineRequest } from "../../utilities/routines-api";
import { useEffect, useState } from 'react';
import RoutineDetail from "../../components/RoutineDetail/RoutineDetail";
export default function RoutineDetailPage(){
    let { routineId } = useParams();
    const [routine, setRoutine] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getRoutine(){
            const routine = await getRoutineRequest(routineId);
            if(routine){
                setRoutine(routine)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('You have not made any workouts yet')
                setLoading(false)
            }
        }
        getRoutine()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deleteRoutineRequest(routine._id);
        if(deleteResponse.data === 'success'){
            navigate('/routines')
        }
    }
    return (
        <>
        <h1>Requested Daily Routine </h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <RoutineDetail routine={routine} handleDelete={handleDelete} setRoutine={setRoutine}></RoutineDetail>
        }
        </>
    )

}