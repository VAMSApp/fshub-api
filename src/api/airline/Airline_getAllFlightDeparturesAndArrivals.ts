import { Flight, FSHubApi, FSHubRequestOptions, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Flight[]>> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`airline/${id}/departure/${departureAirportCode}/arrival/${arrivalAirportCode}`, api, options);
    
    return response;
}