import sendRequest from "./send-request"
const BASE_URL = '/api/routines';

export async function routinesIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createRoutineRequest(routineData){
    console.log(BASE_URL)
    console.log(routineData)
    return sendRequest(BASE_URL, "POST", routineData)
}