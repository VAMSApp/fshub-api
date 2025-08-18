import { FSHubApi, FSHubResponse, Flight } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllFlightsArrivals(id: number, airportCode: string, api: FSHubApi): Promise<Flight[]> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`pilot/${id}/flight/arrival/${airportCode}`, api);
    
    return response.data;
}