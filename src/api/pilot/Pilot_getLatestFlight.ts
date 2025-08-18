import { FSHubApi, FSHubResponse, Flight } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getLatestFlight(id: number, api: FSHubApi): Promise<Flight> {
    const response: FSHubResponse<Flight> = await FSHubApiRequest(`pilot/${id}/flight/latest`, api);
    
    return response.data;
}