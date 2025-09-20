import { FSHubApi, FSHubResponse, Pilot } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getPilots(id: number, api: FSHubApi): Promise<FSHubResponse<Pilot[]>> {
    const response: FSHubResponse<Pilot[]> = await FSHubApiRequest(`airline/${id}/pilot`, api);
    
    return response;
}