import { Flight, FSHubApi, FSHubResponse } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string, api: FSHubApi): Promise<Flight[]> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`pilot/${id}/flight/departure/${departureAirportCode}/arrival/${arrivalAirportCode}`, api);
    
    return response.data;
}