import { FSHubApi, FSHubRequestOptions, FSHubResponse, Flight } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllFlightsArrivals(id: number, airportCode: string, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`airline/${id}/arrival/${airportCode}`, api, options);
    
    return response;
}