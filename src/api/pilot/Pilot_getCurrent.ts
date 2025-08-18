import { CurrentPilot, FSHubApi, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getCurrent(api: FSHubApi): Promise<CurrentPilot> {
    const response: FSHubResponse<CurrentPilot> = await FSHubApiRequest('user', api);
    
    return response.data;
}