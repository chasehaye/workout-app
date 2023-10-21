import RoutineCyclesListItem from './RoutineCyclesListItem/RoutineCyclesListItem'
export default function RoutineCycleList({routineCycles}){
    const routineCyclesComp = routineCycles.map(routineCycle => <RoutineCyclesListItem key={routineCycle._id} routineCycle={routineCycle}></RoutineCyclesListItem>)
    return (
        <>
            {routineCyclesComp}
        </>
    )
}