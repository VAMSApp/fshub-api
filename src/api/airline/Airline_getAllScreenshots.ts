import { FSHubApi, FSHubResponse, Screenshot } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airline_getAllScreenshots(id: number, api: FSHubApi): Promise<FSHubResponse<Screenshot[]>> {
    try {
        const response: FSHubResponse<Screenshot[]> = await FSHubApiRequest(`airline/${id}/screenshot`, api);

        return response;
    } catch (error) {
        if (error instanceof Error && error.message === 'No records found') {
            return { data: [] };
        }

        throw error;
    }
}