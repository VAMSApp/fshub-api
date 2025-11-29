import { FSHubApi, FSHubResponse, FSHubAirlineRole } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllRoles(airlineId: number, api: FSHubApi): Promise<FSHubResponse<FSHubAirlineRole[]>> {
    const response: FSHubResponse<FSHubAirlineRole[]> = await FSHubApiRequest(`airline/${airlineId}/role`, api);
    
    return response;
}