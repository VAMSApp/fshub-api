import { FSHubApi, FSHubResponse, AirlineRoute } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllRoutes(airlineId: number, api: FSHubApi): Promise<FSHubResponse<AirlineRoute[]>> {
    const response: FSHubResponse<AirlineRoute[]> = await FSHubApiRequest(`airline/${airlineId}/route`, api);
    
    return response;
}