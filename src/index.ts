import axios, { AxiosInstance } from 'axios';
import type{ Config, FSHubApi } from './types';
import { Api } from '@/api';

export * from './types';

export default class FSHubApiClass implements FSHubApi {
    private readonly config: Config;
    public readonly axios: AxiosInstance;

    constructor(config: Config) {
        if (!config.apiKey) {
            throw new Error('FSHub API key is required!');
        }

        this.config = config;
        
        this.axios = axios.create({
            baseURL: this.config.baseURL || 'https://fshub.io/api/v3/',
            headers: {
                'Content-Type': 'application/json',
                'X-Pilot-Token': this.config.apiKey,
                ...this.config.headers
            },
            timeout: this.config.timeout || 10000
        });

        this.Pilot_getCurrent = this.Pilot_getCurrent.bind(this);
        this.Pilot_getAll = this.Pilot_getAll.bind(this);
        this.Pilot_get = this.Pilot_get.bind(this);
        this.Pilot_getLatestFlight = this.Pilot_getLatestFlight.bind(this);
        this.Pilot_getAllFlights = this.Pilot_getAllFlights.bind(this);
        this.Pilot_getAllAirlines = this.Pilot_getAllAirlines.bind(this);
        this.Pilot_getStats = this.Pilot_getStats.bind(this);
        this.Pilot_getAllFlightsDepartures = this.Pilot_getAllFlightsDepartures.bind(this);
        this.Pilot_getAllFlightsArrivals = this.Pilot_getAllFlightsArrivals.bind(this);
        this.Pilot_getAllFlightDeparturesAndArrivals = this.Pilot_getAllFlightDeparturesAndArrivals.bind(this);
        this.Pilot_getAllScreenshots = this.Pilot_getAllScreenshots.bind(this);
    }

    public async Pilot_getCurrent() {
        return await Api.pilot.getCurrent(this);
    }

    public async Pilot_getAll() {
        return await Api.pilot.getAll(this);
    }

    public async Pilot_get(id: number) {
        return await Api.pilot.get(id, this);
    }

    public async Pilot_getLatestFlight(id: number) {
        return await Api.pilot.getLatestFlight(id, this);
    }

    public async Pilot_getAllFlights(id: number) {
        return await Api.pilot.getAllFlights(id, this);
    }

    public async Pilot_getAllAirlines(id: number) {
        return await Api.pilot.getAllAirlines(id, this);
    }

    public async Pilot_getStats(id: number) {
        return await Api.pilot.getStats(id, this);
    }

    public async Pilot_getAllFlightsDepartures(id: number, airportCode: string) {
        return await Api.pilot.getAllFlightsDepartures(id, airportCode, this);
    }

    public async Pilot_getAllFlightsArrivals(id: number, airportCode: string) {
        return await Api.pilot.getAllFlightsArrivals(id, airportCode, this);
    }

    public async Pilot_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string) {
        return await Api.pilot.getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode, this);
    }

    public async Pilot_getAllScreenshots(id: number) {
        return await Api.pilot.getAllScreenshots(id, this);
    }

    public async Airline_getAll() {
        return await Api.airline.getAll(this);
    }

    public async Airline_get(id: number) {
        return await Api.airline.get(id, this);
    }

    public async Airline_getPilots(id: number) {
        return await Api.airline.getPilots(id, this);
    }

    public async Airline_getPilotStats(id: number, pilotId: number) {
        return await Api.airline.getPilotStats(id, pilotId, this);
    }

    public async Airline_getFlights(id: number) {
        return await Api.airline.getFlights(id, this);
    }

    public async Airline_getAllFlightsDepartures(id: number, airportCode: string) {
        return await Api.airline.getAllFlightsDepartures(id, airportCode, this);
    }

    public async Airline_getAllFlightsArrivals(id: number, airportCode: string) {
        return await Api.airline.getAllFlightsArrivals(id, airportCode, this);
    }

    public async Airline_getAllFlightDeparturesAndArrivals(id: number, departureAirportCode: string, arrivalAirportCode: string) {
        return await Api.airline.getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode, this);
    }

    public async Airline_getAllScreenshots(id: number) {
        return await Api.airline.getAllScreenshots(id, this);
    }

    public async Airline_getStats(id: number) {
        return await Api.airline.getStats(id, this);
    }

    public async Flight_getFlightById(id: number) {
        return await Api.flight.getFlightById(id, this);
    }

    public async Flight_getFlightScreenshotsById(id: number) {
        return await Api.flight.getFlightScreenshotsById(id, this);
    }
}
