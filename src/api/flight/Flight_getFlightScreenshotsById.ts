// https://fshub.io/api/v3/flight/{id}/screenshot
import { Screenshot, FSHubApi, FSHubResponse } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Flight_getFlightScreenshotsById(id: number, api: FSHubApi): Promise<Screenshot[]> {
    const response: FSHubResponse<Screenshot[]> = await FSHubApiRequest(`flight/${id}/screenshot`, api);
    
    return response.data;
}
