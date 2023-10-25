import sendRequest from "./send-request"
const BASE_URL = '/api/routines';

export async function routinesIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createRoutineRequest(routineData){
    return sendRequest(BASE_URL, "POST", routineData)
}

export async function getRoutineRequest(routineId){
    return sendRequest(`${BASE_URL}/${routineId}`)
}

export async function deleteRoutineRequest(routineId){
    return sendRequest(`${BASE_URL}/${routineId}`, "DELETE")
}

export async function updateRoutineRequest(routineId, routineData){
    return sendRequest(`${BASE_URL}/${routineId}`, "PUT", routineData)
}