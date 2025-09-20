import { FSHubApi, FSHubResponse, Flight } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllFlightsArrivals(id: number, airportCode: string, api: FSHubApi): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`airline/${id}/arrival/${airportCode}`, api);
    
    return response;
}