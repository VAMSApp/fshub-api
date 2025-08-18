import { Pilot, FSHubApi, FSHubResponse } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_get(id: number, api: FSHubApi): Promise<Pilot> {
    const response: FSHubResponse<Pilot> = await FSHubApiRequest(`pilot/${id}`, api);
    
    return response.data;
}