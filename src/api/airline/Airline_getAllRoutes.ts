import { FSHubApi, FSHubRequestOptions, FSHubResponse, AirlineRoute } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllRoutes(airlineId: number, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<AirlineRoute[]>> {
    const response: FSHubResponse<AirlineRoute[]> = await FSHubApiRequest(`airline/${airlineId}/route`, api, options);
    
    return response;
}