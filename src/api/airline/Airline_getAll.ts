import { FSHubApi, FSHubRequestOptions, FSHubResponse, Airline } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAll(api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Airline[]>> {
    const response: FSHubResponse<Airline[]> = await FSHubApiRequest(`airline`, api, options);
    
    return response;
}