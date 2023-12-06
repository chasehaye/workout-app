import { indexFoodsRequest } from "../../utilities/foods-api";
import { useEffect, useState } from "react";
import FoodList from '../../components/FoodsList/FoodsList'

export default function FoodIndexPage(){
    const [foods, setFoods] = useState([])
    useEffect(()=>{
        async function getFoods(){
            const foods = await indexFoodsRequest();
            setFoods(foods)
        }
        getFoods();
    }, [])
    return(
        <>
            <h1>Food List</h1>
            <FoodList foods={foods}></FoodList>
        </>
    )
}