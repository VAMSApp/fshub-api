import { Pilot, FSHubApi, FSHubResponse, FSHubRequestOptions } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAll(api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<Pilot[]>> {
    const response: FSHubResponse<Pilot[]> = await FSHubApiRequest('pilot', api, options);
    
    return response;
}