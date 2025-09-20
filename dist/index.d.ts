import { AxiosInstance } from 'axios';
import type { Config, FSHubApi, FSHubRequestOptions } from './types';
export * from './types';
export default class FSHubApiClass implements FSHubApi {
    private readonly config;
    readonly axios: AxiosInstance;
    constructor(config: Config);
    Pilot_getCurrent(): Promise<import("./types").FSHubResponse<import("./types").CurrentPilot>>;
    Pilot_getAll(): Promise<import("./types").FSHubResponse<import("./types").Pilot[]>>;
    Pilot_get(id: number): Promise<import("./types").FSHubResponse<import("./types").Pilot>>;
    Pilot_getLatestFlight(id: number): Promise<import("./types").FSHubResponse<import("./types").Flight>>;
    Pilot_getAllFlights(id: number): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
    Pilot_getAllAirlines(id: number): Promise<import("./types").FSHubResponse<import("./types").Airline[]>>;
    Pilot_getStats(id: number): Promise<import("./types").FSHubResponse<import("./types").PilotStats>>;
    Pilot_getAllFlightsDepartures(id: number, airportCode: string): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
    Pilot_getAllFlightsArrivals(id: number, airportCode: string): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
    Pilot_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
    Pilot_getAllScreenshots(id: number): Promise<import("./types").FSHubResponse<import("./types").Screenshot[]>>;
    Airline_getAll(): Promise<import("./types").FSHubResponse<import("./types").Airline[]>>;
    Airline_get(id: number): Promise<import("./types").FSHubResponse<import("./types").Airline>>;
    Airline_getPilots(id: number): Promise<import("./types").FSHubResponse<import("./types").Pilot[]>>;
    Airline_getPilotStats(id: number, pilotId: number): Promise<import("./types").FSHubResponse<import("./types").PilotStats>>;
    Airline_getFlights(id: number): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
    Airline_getAllFlightsDepartures(id: number, airportCode: string): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
    Airline_getAllFlightsArrivals(id: number, airportCode: string): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
    Airline_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
    Airline_getAllScreenshots(id: number): Promise<import("./types").FSHubResponse<import("./types").Screenshot[]>>;
    Airline_getStats(id: number): Promise<import("./types").FSHubResponse<import("./types").AirlineStats>>;
    Flight_getFlightById(id: number): Promise<import("./types").FSHubResponse<import("./types").Flight>>;
    Flight_getFlightScreenshotsById(id: number): Promise<import("./types").FSHubResponse<import("./types").Screenshot[]>>;
    Flight_getFlights(options?: FSHubRequestOptions): Promise<import("./types").FSHubResponse<import("./types").Flight[]>>;
}
//# sourceMappingURL=index.d.ts.map