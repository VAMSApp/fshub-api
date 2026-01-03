import { AxiosInstance } from 'axios';
import { Pilot } from './Pilot';
import { CurrentPilot } from './Pilot';
import { Flight } from './Flight';
import { Airline } from './Airline';
import { PilotStats } from './Stats';
import { AirlineStats } from './Stats';
import { Screenshot } from './Screenshot';
import { FSHubRequestOptions } from './FSHubRequestOptions';
import { FSHubResponse } from './FSHubResponse';
import { FSHubApplicationResponse } from './FSHubApplication';
import { FSHubPilotPointPurchaseTransactionData, FSHubPilotPointPurchaseTransactionResponse } from './FSHubPilotPointPurchase';
import { FSHubPilotSetRankData } from './FSHubApplication';
import { FSHubAirlineRank } from './FSHubAirline';
import { FSHubAirlineRole } from './FSHubAirline';
import { FSHubAirlinePilotStats } from './FSHubAirline';

export type FSHubApi = {
  axios: AxiosInstance
  Pilot_getCurrent: () => Promise<FSHubResponse<CurrentPilot>>
  Pilot_getAll: () => Promise<FSHubResponse<Pilot[]>>
  Pilot_get: (id: number) => Promise<FSHubResponse<Pilot>>
  Pilot_getLatestFlight: (id: number) => Promise<FSHubResponse<Flight>>
  Pilot_getAllFlights: (id: number) => Promise<FSHubResponse<Flight[]>>
  Pilot_getAllAirlines: (id: number) => Promise<FSHubResponse<Airline[]>>
  Pilot_getStats: (id: number) => Promise<FSHubResponse<PilotStats>>
  Pilot_getAllFlightsDepartures:(id:number, airportCode:string) => Promise<FSHubResponse<Flight[]>>
  Pilot_getAllFlightsArrivals:(id:number, airportCode:string) => Promise<FSHubResponse<Flight[]>>
  Pilot_getAllFlightDeparturesAndArrivals:(id:number, departureAirportCode:string, arrivalAirportCode:string) => Promise<FSHubResponse<Flight[]>>
  Pilot_getAllScreenshots: (id: number) => Promise<FSHubResponse<Screenshot[]>>
  Airline_getAll: () => Promise<FSHubResponse<Airline[]>>
  Airline_get: (id: number) => Promise<FSHubResponse<Airline>>
  Airline_getPilots: (id: number) => Promise<FSHubResponse<Pilot[]>>
  Airline_getPilotStats: (id: number, pilotId: number) => Promise<FSHubResponse<FSHubAirlinePilotStats>>
  Airline_getFlights: (id: number) => Promise<FSHubResponse<Flight[]>>
  Airline_getAllFlightsDepartures:(id:number, airportCode:string) => Promise<FSHubResponse<Flight[]>>
  Airline_getAllFlightsArrivals:(id:number, airportCode:string) => Promise<FSHubResponse<Flight[]>>
  Airline_getAllFlightDeparturesAndArrivals:(id:number, departureAirportCode:string, arrivalAirportCode:string) => Promise<FSHubResponse<Flight[]>>
  Airline_getAllScreenshots: (id: number) => Promise<FSHubResponse<Screenshot[]>>
  Airline_getStats: (id: number) => Promise<FSHubResponse<AirlineStats>>
  Airline_approveApplication: (pilotId: number, airlineId: number) => Promise<FSHubResponse<FSHubApplicationResponse>>
  Airline_rejectApplication: (pilotId: number, airlineId: number) => Promise<FSHubResponse<FSHubApplicationResponse>>
  Airline_pilotPointPurchase: (pilotId: number, airlineId: number, data: FSHubPilotPointPurchaseTransactionData) => Promise<FSHubResponse<FSHubPilotPointPurchaseTransactionResponse>>
  Airline_pilotSetRank: (pilotId: number, airlineId: number, data: FSHubPilotSetRankData) => Promise<FSHubResponse<FSHubApplicationResponse>>
  Airline_getAllRanks: (airlineId: number) => Promise<FSHubResponse<FSHubAirlineRank[]>>
  Airline_getAllRoles: (airlineId: number) => Promise<FSHubResponse<FSHubAirlineRole[]>>
  Flight_getFlightById: (id: number) => Promise<FSHubResponse<Flight>>
  Flight_getFlightScreenshotsById: (id: number) => Promise<FSHubResponse<Screenshot[]>>
  Flight_getFlights: (options?: FSHubRequestOptions) => Promise<FSHubResponse<Flight[]>>
}
