import { AirlineStats, FSHubApi, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getStats(id: number, api: FSHubApi): Promise<AirlineStats> {
    const response: FSHubResponse<AirlineStats> = await FSHubApiRequest(`airline/${id}/stats`, api);
    
    return response.data;
}