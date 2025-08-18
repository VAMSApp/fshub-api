import { Flight, FSHubApi, FSHubResponse } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllFlightsDepartures(id: number, airportCode: string, api: FSHubApi): Promise<Flight[]> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`pilot/${id}/flight/departure/${airportCode}`, api);
    
    return response.data;
}