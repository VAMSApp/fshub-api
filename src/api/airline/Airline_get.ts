import { FSHubApi, FSHubResponse, Airline } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_get(id: number, api: FSHubApi): Promise<Airline> {
    const response: FSHubResponse<Airline> = await FSHubApiRequest(`airline/${id}`, api);
    
    return response.data;
}