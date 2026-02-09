import { FSHubApi, FSHubResponse, FSHubApplicationResponse } from "../../types";
import { FSHubApiPostRequest } from "../FSHubApiRequest";

export default async function Airline_approveManualPIREP(airlineId: number, flightId: number, api: FSHubApi): Promise<FSHubResponse<FSHubApplicationResponse>> {
    const url = `airline/${airlineId}/pirep/${flightId}/approve`;

    const response: FSHubResponse<FSHubApplicationResponse> = await FSHubApiPostRequest<FSHubApplicationResponse, void>(url, api);
    
    return response;
}