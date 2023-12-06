import { Link } from "react-router-dom";

export default function FoodListItem({food}){
    return (
        <>
            <p>
                <Link class = 'list-item' to = {`/foods/${food._id}`}>
                    {food.name}
                </Link>

            </p>
        </>
    )
}