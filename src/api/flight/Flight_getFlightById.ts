// https://fshub.io/api/v3/flight/{id}
import { Flight, FSHubApi, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Flight_getFlightById(id: number, api: FSHubApi): Promise<FSHubResponse<Flight>> {
    const response: FSHubResponse<Flight> = await FSHubApiRequest(`flight/${id}`, api);
    
    return response;
}