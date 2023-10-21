import { Link } from "react-router-dom";

export default function RoutineCyclesListItem({routineCycle}){
    return (
        <>
            <p>
                <Link class='list-item'to={`/routineCycles/${routineCycle._id}`}>
                    {routineCycle.name} &nbsp; | &nbsp; {routineCycle.description}
                </Link>
            </p>
        </>
    )
}