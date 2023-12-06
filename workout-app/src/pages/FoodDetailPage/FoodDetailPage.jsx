import { useNavigate, useParams } from "react-router-dom";
import { getFoodRequest, deleteFoodRequest } from "../../utilities/foods-api";
import { useEffect, useState } from "react";
import FoodDetail from "../../components/FoodDetail/FoodDetail";
export default function FoodDetailPage(){
    let { foodId } = useParams();
    const [food, setFood] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        async function getFood(){
            const food = await getFoodRequest(foodId);
            if(food){
                setFood(food)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('No Foods listed yet')
                setLoading(false)
            }
        }
        getFood()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deleteFoodRequest(food._id);
        if(deleteResponse.data === 'success'){
            navigate('/foods')
        }
    }
    return (
        <>
        <h1>Food </h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <FoodDetail food={food} handleDelete={handleDelete} setFood={setFood}></FoodDetail>
        }
        </>
    )
}