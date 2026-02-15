import { Airline, FSHubApi, FSHubRequestOptions, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllAirlines(id: number, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Airline[]>> {
    const response: FSHubResponse<Airline[]> = await FSHubApiRequest(`pilot/${id}/airline`, api, options);
    
    return response;
}