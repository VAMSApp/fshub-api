import { FSHubApi, FSHubResponse, FSHubPilotPointPurchaseTransactionResponse, FSHubPilotPointPurchaseTransactionData } from "../../types";
import { FSHubApiPostRequest } from "../FSHubApiRequest";

export default async function Airline_pilotPointPurchase(pilotId: number, airlineId: number, data: FSHubPilotPointPurchaseTransactionData, api: FSHubApi): Promise<FSHubResponse<FSHubPilotPointPurchaseTransactionResponse>> {
    const url = `airline/${airlineId}/application/${pilotId}/purchase`;

    const response: FSHubResponse<FSHubPilotPointPurchaseTransactionResponse> = await FSHubApiPostRequest<FSHubPilotPointPurchaseTransactionResponse, FSHubPilotPointPurchaseTransactionData>(url, api, data);
    
    return response;
}