import FoodListItem from "./FoodListItem/FoodListItem";
export default function FoodList({foods}){
    const foodItem = foods.map(food => <FoodListItem key={food._id} food={food}></FoodListItem>)
    return(
        <>
            <h1>Items listed here</h1>
            {foodItem}
        </>
    )
}