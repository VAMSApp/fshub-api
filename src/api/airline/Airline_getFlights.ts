import { FSHubApi, FSHubRequestOptions, FSHubResponse, Flight } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getFlights(id: number, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`airline/${id}/flight`, api, options);
    
    return response;
}