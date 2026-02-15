import { FSHubApi, FSHubRequestOptions, FSHubResponse, FSHubAirlineRole } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllRoles(airlineId: number, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<FSHubAirlineRole[]>> {
    const response: FSHubResponse<FSHubAirlineRole[]> = await FSHubApiRequest(`airline/${airlineId}/role`, api, options);
    
    return response;
}