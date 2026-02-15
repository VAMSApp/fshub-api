import { FSHubApi, FSHubRequestOptions, FSHubResponse, Flight } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllFlightsArrivals(id: number, airportCode: string, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`pilot/${id}/flight/arrival/${airportCode}`, api, options);
    
    return response;
}