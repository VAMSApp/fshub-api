import { Flight, FSHubApi, FSHubRequestOptions, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllFlightsDepartures(id: number, airportCode: string, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`pilot/${id}/flight/departure/${airportCode}`, api, options);
    
    return response;
}