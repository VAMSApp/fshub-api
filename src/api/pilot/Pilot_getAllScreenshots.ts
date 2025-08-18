import { FSHubApi, FSHubResponse, Screenshot } from "@/types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Pilot_getAllScreenshots(id: number, api: FSHubApi): Promise<Screenshot[]> {
    try {
        const response: FSHubResponse<Screenshot[]> = await FSHubApiRequest(`pilot/${id}/screenshot`, api);

        return response.data;
    } catch (error) {
        if (error instanceof Error && error.message === 'No records found') {
            return [];
        }

        throw error;
    }
}