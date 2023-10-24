import { Link } from "react-router-dom";

export default function RoutinesListItem({routine}){
    return (
        <>
            <p>
                <Link class='list-item'to={`/`}>
                    {routine.name} &nbsp; | &nbsp; {routine.description}
                </Link>
            </p>
        </>
    )
}

// {`/routines/${routine._id}`}