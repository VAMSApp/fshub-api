// https://fshub.io/api/v3/airport/{icao}/metar
import { AirportMETARReport, FSHubApi, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airport_findMETAR(icao: string, api: FSHubApi): Promise<FSHubResponse<AirportMETARReport>> {
    const response: FSHubResponse<AirportMETARReport> = await FSHubApiRequest(`airport/${icao}/metar`, api);
    
    return response;
}