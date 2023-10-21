import { routineCyclesIndexRequest } from '../../utilities/routineCycles-api';
import { useEffect, useState} from 'react'
import RoutineCyclesList from '../../components/RoutineCyclesList/RoutineCyclesList'

export default function RoutineCycleIndexPage(){
    const [routineCycles, setRoutineCycles] = useState([])
    useEffect(()=>{
        async function getRoutineCycles(){
            const routineCycles = await routineCyclesIndexRequest();
            setRoutineCycles(routineCycles)
        }
        getRoutineCycles();
    }, [])
    return(
    <>
        <h1>List of Existing routine cycles to choose</h1>
        <RoutineCyclesList routineCycles={routineCycles}></RoutineCyclesList>
</>
)
}