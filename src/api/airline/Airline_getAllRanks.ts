import { FSHubApi, FSHubRequestOptions, FSHubResponse, FSHubAirlineRank } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllRanks(airlineId: number, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<FSHubAirlineRank[]>> {
    const response: FSHubResponse<FSHubAirlineRank[]> = await FSHubApiRequest(`airline/${airlineId}/rank`, api, options);
    
    return response;
}