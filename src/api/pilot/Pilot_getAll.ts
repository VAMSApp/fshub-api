import { Pilot, FSHubApi, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAll(api: FSHubApi): Promise<FSHubResponse<Pilot[]>> {
    const response: FSHubResponse<Pilot[]> = await FSHubApiRequest('pilot', api);
    
    return response;
}