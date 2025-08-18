import { Flight, FSHubApi, FSHubResponse } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string, api: FSHubApi): Promise<Flight[]> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`airline/${id}/departure/${departureAirportCode}/arrival/${arrivalAirportCode}`, api);
    
    return response.data;
}