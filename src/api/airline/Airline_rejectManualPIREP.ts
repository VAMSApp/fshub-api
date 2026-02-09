import { FSHubApi, FSHubResponse, FSHubApplicationResponse } from "../../types";
import { FSHubApiPostRequest } from "../FSHubApiRequest";

export default async function Airline_rejectManualPIREP(airlineId: number, flightId: number, api: FSHubApi): Promise<FSHubResponse<FSHubApplicationResponse>> {
    const url = `airline/${airlineId}/pirep/${flightId}/reject`;

    const response: FSHubResponse<FSHubApplicationResponse> = await FSHubApiPostRequest<FSHubApplicationResponse, void>(url, api);
    
    return response;
}