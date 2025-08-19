import { AxiosInstance } from 'axios';
import type { Config, FSHubApi } from './types';
export * from './types';
export default class FSHubApiClass implements FSHubApi {
    private readonly config;
    readonly axios: AxiosInstance;
    constructor(config: Config);
    Pilot_getCurrent(): Promise<import("./types").CurrentPilot>;
    Pilot_getAll(): Promise<import("./types").Pilot[]>;
    Pilot_get(id: number): Promise<import("./types").Pilot>;
    Pilot_getLatestFlight(id: number): Promise<import("./types").Flight>;
    Pilot_getAllFlights(id: number): Promise<import("./types").Flight[]>;
    Pilot_getAllAirlines(id: number): Promise<import("./types").Airline[]>;
    Pilot_getStats(id: number): Promise<import("./types").PilotStats>;
    Pilot_getAllFlightsDepartures(id: number, airportCode: string): Promise<import("./types").Flight[]>;
    Pilot_getAllFlightsArrivals(id: number, airportCode: string): Promise<import("./types").Flight[]>;
    Pilot_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string): Promise<import("./types").Flight[]>;
    Pilot_getAllScreenshots(id: number): Promise<import("./types").Screenshot[]>;
    Airline_getAll(): Promise<import("./types").Airline[]>;
    Airline_get(id: number): Promise<import("./types").Airline>;
    Airline_getPilots(id: number): Promise<import("./types").Pilot[]>;
    Airline_getPilotStats(id: number, pilotId: number): Promise<import("./types").PilotStats>;
    Airline_getFlights(id: number): Promise<import("./types").Flight[]>;
    Airline_getAllFlightsDepartures(id: number, airportCode: string): Promise<import("./types").Flight[]>;
    Airline_getAllFlightsArrivals(id: number, airportCode: string): Promise<import("./types").Flight[]>;
    Airline_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string): Promise<import("./types").Flight[]>;
    Airline_getAllScreenshots(id: number): Promise<import("./types").Screenshot[]>;
    Airline_getStats(id: number): Promise<import("./types").AirlineStats>;
}
//# sourceMappingURL=index.d.ts.map