// https://fshub.io/api/v3/airport/{icao}
import { Airport, FSHubApi, FSHubResponse } from "../../types";
import FSHubApiRequest from "../FSHubApiRequest";

export default async function Airport_findByICAO(icao: string, api: FSHubApi): Promise<FSHubResponse<Airport>> {
    const response: FSHubResponse<Airport> = await FSHubApiRequest(`airport/${icao}`, api);
    
    return response;
}