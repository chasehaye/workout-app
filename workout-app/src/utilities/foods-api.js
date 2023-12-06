import sendRequest from "./send-request"
const BASE_URL = '/api/foods'

export async function indexFoodsRequest(){
    return sendRequest(BASE_URL)
}

export async function createFoodRequest(foodData){
    return sendRequest(BASE_URL, "POST", foodData)
}

export async function getFoodRequest(foodId){
    return sendRequest(`${BASE_URL}/${foodId}`)
}

export async function deleteFoodRequest(foodId){
    return sendRequest(`${BASE_URL}/${foodId}`, "DELETE")
}

export async function updateFoodRequest(foodId, foodData){
    return sendRequest(`${BASE_URL}/${foodId}`, "PUT", foodData)
}