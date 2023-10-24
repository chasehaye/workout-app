import RoutinesListItem from './RoutinesListItem/RoutinesListItem'
export default function RoutineList({routines}){
    const routinesItem = routines.map(routine => <RoutinesListItem key={routine._id} routine={routine}></RoutinesListItem>)
    return (
        <>
        <h1>each list item below</h1>
            {routinesItem}
        </>
    )
}
