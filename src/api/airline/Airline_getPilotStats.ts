import { FSHubAirlinePilotStats, FSHubApi, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getPilotStats(id: number, pilotId: number, api: FSHubApi): Promise<FSHubResponse<FSHubAirlinePilotStats>> {
    const response: FSHubResponse<FSHubAirlinePilotStats> = await FSHubApiRequest(`airline/${id}/pilot/${pilotId}/stats`, api);
    
    return response;
}