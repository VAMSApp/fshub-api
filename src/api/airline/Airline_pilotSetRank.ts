import { FSHubApi, FSHubResponse, FSHubApplicationResponse, FSHubPilotSetRankData } from "../../types";
import { FSHubApiPutRequest } from "../FSHubApiRequest";

export default async function Airline_pilotSetRank(pilotId: number, airlineId: number, data: FSHubPilotSetRankData, api: FSHubApi): Promise<FSHubResponse<FSHubApplicationResponse>> {
    const url = `airline/${airlineId}/application/${pilotId}/rank`;

    const response: FSHubResponse<FSHubApplicationResponse> = await FSHubApiPutRequest<FSHubApplicationResponse, FSHubPilotSetRankData>(url, api, data);
    
    return response;
}