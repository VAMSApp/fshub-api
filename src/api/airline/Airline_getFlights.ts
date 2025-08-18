import { FSHubApi, FSHubResponse, Flight } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getFlights(id: number, api: FSHubApi): Promise<Flight[]> {
    const response: FSHubResponse<Flight[]> = await FSHubApiRequest(`airline/${id}/flight`, api);
    
    return response.data;
}