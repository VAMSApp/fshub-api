import { Flight, FSHubApi, FSHubRequestOptions, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`pilot/${id}/flight/departure/${departureAirportCode}/arrival/${arrivalAirportCode}`, api, options);
    
    return response;
}