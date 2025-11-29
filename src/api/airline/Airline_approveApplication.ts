import { FSHubApi, FSHubResponse, FSHubApplicationResponse } from "../../types";
import { FSHubApiPostRequest } from "../FSHubApiRequest";

export default async function Airline_approveApplication(pilotId: number, airlineId: number, api: FSHubApi): Promise<FSHubResponse<FSHubApplicationResponse>> {
    const url = `airline/${airlineId}/application/${pilotId}/approve`;

    const response: FSHubResponse<FSHubApplicationResponse> = await FSHubApiPostRequest<FSHubApplicationResponse, void>(url, api);
    
    return response;
}