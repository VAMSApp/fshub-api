import { FSHubApi, FSHubResponse, PilotStats } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getStats(id: number, api: FSHubApi): Promise<PilotStats> {
    const response: FSHubResponse<PilotStats> = await FSHubApiRequest(`pilot/${id}/stats`, api);
    
    return response.data;
}