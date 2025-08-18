import { Flight, FSHubApi, FSHubResponse } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllFlightsDepartures(id: number, airportCode: string, api: FSHubApi): Promise<Flight[]> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`airline/${id}/departure/${airportCode}`, api);
    
    return response.data;
}