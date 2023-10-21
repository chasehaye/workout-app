import sendRequest from "./send-request";
const BASE_URL = '/api/routineCycles';

export async function routineCyclesIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createRoutineCycleRequest(routineCycleData){
    return sendRequest(BASE_URL, "POST", routineCycleData)
}

export async function getRoutineCycleRequest(routineCycleId){
    return sendRequest(`${BASE_URL}/${routineCycleId}`) 
}

export async function deleteRoutineCycleRequest(routineCycleId){
    return sendRequest(`${BASE_URL}/${routineCycleId}`, "DELETE")
}

export async function updateRoutineCycleRequest(routineCycleId, routineCycleData){
    return sendRequest(`${BASE_URL}/${routineCycleId}`, "PUT", routineCycleData)
}