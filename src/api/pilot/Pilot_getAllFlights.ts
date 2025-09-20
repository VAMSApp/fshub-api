import { FSHubApi, FSHubResponse, Flight } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllFlights(id: number, api: FSHubApi): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`pilot/${id}/flight`, api);
    
    return response;
}