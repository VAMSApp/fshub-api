// https://fshub.io/api/v3/flight/{id}/screenshot
import { Screenshot, FSHubApi, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Flight_getFlightScreenshotsById(id: number, api: FSHubApi): Promise<FSHubResponse<Screenshot[]>> {
    let response: FSHubResponse<Screenshot[]>;
    try {
        response = await FSHubApiRequest(`flight/${id}/screenshot`, api);
    } catch (error: any) {
        if (error.message === 'Not Found') {
            return { data: [] };
        }

        throw error;
    }
    
    return response;
}
