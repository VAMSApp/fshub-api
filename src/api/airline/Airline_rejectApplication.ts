import { FSHubApi, FSHubResponse, FSHubApplicationResponse } from "../../types";
import { FSHubApiPostRequest } from "../FSHubApiRequest";

export default async function Airline_rejectApplication(pilotId: number, airlineId: number, api: FSHubApi): Promise<FSHubResponse<FSHubApplicationResponse>> {
    const url = `airline/${airlineId}/application/${pilotId}/reject`;

    const response: FSHubResponse<FSHubApplicationResponse> = await FSHubApiPostRequest<FSHubApplicationResponse, void>(url, api);
    
    return response;
}