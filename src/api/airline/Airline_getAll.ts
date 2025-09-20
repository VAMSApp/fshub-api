import { FSHubApi, FSHubResponse, Airline } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAll(api: FSHubApi): Promise<FSHubResponse<Airline[]>> {
    const response: FSHubResponse<Airline[]> = await FSHubApiRequest(`airline`, api);
    
    return response;
}