import { useNavigate, useParams } from "react-router-dom";
import { getRoutineCycleRequest, deleteRoutineCycleRequest } from "../../utilities/routineCycles-api";
import { useEffect, useState } from 'react';
import RoutineCycleDetail from "../../components/RoutineCycleDetail/RoutineCycleDetail";
export default function RoutineCycleDetailPage(){
    let { routineCycleId } = useParams();
    const [routineCycle, setRoutineCycle] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getRoutineCycle(){
            const routineCycle = await getRoutineCycleRequest(routineCycleId);
            if(routineCycle){
                setRoutineCycle(routineCycle)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('No RoutineCycles here')
                setLoading(false)
            }
        }
        getRoutineCycle()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deleteRoutineCycleRequest(routineCycle._id);
        if(deleteResponse.data === 'success'){
            navigate('/routineCycles')
        }
    }
    return (
        <>
        <h1>Here's a routineCycle</h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <RoutineCycleDetail routineCycle={routineCycle} handleDelete={handleDelete} setRoutineCycle={setRoutineCycle}></RoutineCycleDetail>
        }
        </>
    )
}