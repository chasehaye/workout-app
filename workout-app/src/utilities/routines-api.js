import sendRequest from "./send-request";
const BASE_URL = '/api/routines';

export async function routinesIndexRequest(){
    return sendRequest(BASE_URL);
}