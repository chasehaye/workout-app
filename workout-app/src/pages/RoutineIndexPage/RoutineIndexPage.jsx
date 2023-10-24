import { routinesIndexRequest } from '../../utilities/routines-api';
import { useEffect, useState } from 'react'
import RoutinesList from '../../components/RoutinesList/RoutinesList'

export default function RoutineIndexPage(){
    const [routines, setRoutines] = useState([])
    useEffect(()=>{
        async function getRoutines(){
            const routines = await routinesIndexRequest();
            setRoutines(routines)
        }
        getRoutines();
    }, [])
    return(
    <>
        <h1>Routines List</h1>
        <RoutinesList routines={routines}></RoutinesList>

</>
    )

}