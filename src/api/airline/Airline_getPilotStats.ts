import { FSHubApi, FSHubResponse, PilotStats } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getPilotStats(id: number, pilotId: number, api: FSHubApi): Promise<FSHubResponse<PilotStats>> {
    const response: FSHubResponse<PilotStats> = await FSHubApiRequest(`airline/${id}/pilot/${pilotId}/stats`, api);
    
    return response;
}