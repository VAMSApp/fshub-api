import { Flight, FSHubApi, FSHubRequestOptions, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllFlightsDepartures(id: number, airportCode: string, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`airline/${id}/departure/${airportCode}`, api, options);
    
    return response;
}