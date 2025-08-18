import { describe, before } from 'mocha';
import { expect } from 'chai';
import FSHubApiClass from './index';
import dotenv from 'dotenv';
import { CurrentPilot, Flight, Pilot, FSHubApi, Airline, PilotStats, Screenshot  } from './types';

dotenv.config();
let api: FSHubApi;

describe('FSHubApi()', function() {
    let apiKey: string;

    before(function() {
        if (!process.env.FSHUB_API_KEY) {
            throw new Error('FSHUB_API_KEY is not set in .env file');
        }

        apiKey = process.env.FSHUB_API_KEY;
        api = new FSHubApiClass({ apiKey });
    });

    it('when instantiated with valid data, it should return an FSHubApi object with the expected class methods', async function() {
        expect(api.Pilot_getCurrent).to.be.a('function');
        expect(api.Pilot_getAll).to.be.a('function');
        expect(api.Pilot_get).to.be.a('function');
        expect(api.Pilot_getLatestFlight).to.be.a('function');
        expect(api.Pilot_getAllFlights).to.be.a('function');
        expect(api.Pilot_getAllAirlines).to.be.a('function');
        expect(api.Pilot_getStats).to.be.a('function');
        expect(api.Pilot_getAllFlightsDepartures).to.be.a('function');
        expect(api.Pilot_getAllFlightsArrivals).to.be.a('function');
        expect(api.Pilot_getAllFlightDeparturesAndArrivals).to.be.a('function');
        expect(api.Pilot_getAllScreenshots).to.be.a('function');
        expect(api.Airline_getAll).to.be.a('function');
        expect(api.Airline_get).to.be.a('function');
        expect(api.Airline_getPilots).to.be.a('function');
        expect(api.Airline_getPilotStats).to.be.a('function');
        expect(api.Airline_getFlights).to.be.a('function');
        expect(api.Airline_getAllFlightsDepartures).to.be.a('function');
        expect(api.Airline_getAllFlightsArrivals).to.be.a('function');
        expect(api.Airline_getAllFlightDeparturesAndArrivals).to.be.a('function');
        expect(api.Airline_getAllScreenshots).to.be.a('function');
        expect(api.Airline_getStats).to.be.a('function');
    });

    describe('Pilot', function() {
        it('Pilot_getCurrent() is called, it should return a valid CurrentPilot object', async function() {
            const pilot: CurrentPilot = await api.Pilot_getCurrent();

            expect(pilot).to.be.an('Object');
            expect(pilot.id).to.be.a('number');
            expect(pilot.name).to.be.a('string');
            expect(pilot.base).to.be.a('string');
            expect(pilot.locale).to.be.an('string');
            expect(pilot.gps).to.be.an('Object');
        });

        it('Pilot_getAll() is called, it should return an array of valid Pilot objects', async function() {
            const pilots: Pilot[] = await api.Pilot_getAll();

            expect(pilots).to.be.an('Array');
        });

        it('Pilot_get(id) is called, it should return a valid Pilot object', async function() {
            const pilot: Pilot = await api.Pilot_get(1);

            expect(pilot).to.be.an('Object');
        });

        it('Pilot_getLatestFlight(id) is called, it should return a valid Flight object', async function() {
            const pilot: Pilot = await api.Pilot_getCurrent();
            const flight: Flight = await api.Pilot_getLatestFlight(pilot.id);

            expect(flight).to.be.an('Object');
        });

        it('Pilot_getAllFlights(id) is called, it should return an array of valid Flight objects', async function() {
            const pilot: Pilot = await api.Pilot_getCurrent();
            const flights: Flight[] = await api.Pilot_getAllFlights(pilot.id);
            
            expect(flights).to.be.an('Array');
        });

        it('Pilot_getAllAirlines(id) is called, it should return an array of valid Airline objects', async function() {
            const pilot: Pilot = await api.Pilot_getCurrent();
            const airlines: Airline[] = await api.Pilot_getAllAirlines(pilot.id);
            
            expect(airlines).to.be.an('Array');
        });

        it('Pilot_getStats(id) is called, it should return a valid PilotStats object', async function() {
            const pilot: Pilot = await api.Pilot_getCurrent();
            const stats: PilotStats = await api.Pilot_getStats(pilot.id);
            
            expect(stats).to.be.an('Object');
            expect(stats.id).to.be.a('number'); 
            expect(stats.all_time).to.be.an('Object');
            expect(stats.month).to.be.an('Object');
        });

        it('Pilot_getAllFlightsDepartures(id, airportCode) is called, it should return an array of valid Flight objects', async function() {
            const pilot: Pilot = await api.Pilot_getCurrent();
            const flights: Flight[] = await api.Pilot_getAllFlightsDepartures(pilot.id, 'KPHX');
            
            expect(flights).to.be.an('Array');
        });

        it('Pilot_getAllFlightsArrivals(id, airportCode) is called, it should return an array of valid Flight objects', async function() {
            const pilot: Pilot = await api.Pilot_getCurrent();
            const flights: Flight[] = await api.Pilot_getAllFlightsArrivals(pilot.id, 'KPHX');
            
            expect(flights).to.be.an('Array');
        });

        it('Pilot_getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode) is called, it should return an array of valid Flight objects', async function() {
            const pilot: Pilot = await api.Pilot_getCurrent();
            const flights: Flight[] = await api.Pilot_getAllFlightDeparturesAndArrivals(pilot.id, 'KPHX', 'KJAC');
            
            expect(flights).to.be.an('Array');
        });

        it('Pilot_getAllScreenshots(id) is called, it should return an array of valid Screenshot objects', async function() {
            const pilot: Pilot = await api.Pilot_getCurrent();
            const screenshots: Screenshot[] = await api.Pilot_getAllScreenshots(pilot.id);
            
            expect(screenshots).to.be.an('Array');
        });
    });

    describe('Airline', function() {
        it('Airline_getAll() is called, it should return an array of valid Airline objects', async function() {
            const airlines: Airline[] = await api.Airline_getAll();
            
            expect(airlines).to.be.an('Array');
        });

        it('Airline_get(id) is called, it should return a valid Airline object', async function() {
            const airline: Airline = await api.Airline_get(6082);
            
            expect(airline).to.be.an('Object');
        });

        it('Airline_getPilots(id) is called, it should return an array of valid Pilot objects', async function() {
            const airline: Airline = await api.Airline_get(6082);
            const pilots: Pilot[] = await api.Airline_getPilots(airline.id);
            
            expect(pilots).to.be.an('Array');
        });

        it('Airline_getPilotStats(id, pilotId) is called, it should return a valid PilotStats object', async function() {
            const airline: Airline = await api.Airline_get(6082);
            const pilot: Pilot = await api.Pilot_getCurrent();
            const stats: PilotStats = await api.Airline_getPilotStats(airline.id, pilot.id);
            
            expect(stats).to.be.an('Object');
        });

        it('Airline_getFlights(id) is called, it should return an array of valid Flight objects', async function() {
            const airline: Airline = await api.Airline_get(6082);
            const flights: Flight[] = await api.Airline_getFlights(airline.id);
            
            expect(flights).to.be.an('Array');
        });

        it('Airline_getAllFlightsDepartures(id, airportCode) is called, it should return an array of valid Flight objects', async function() {
            const airline: Airline = await api.Airline_get(6082);
            const flights: Flight[] = await api.Airline_getAllFlightsDepartures(airline.id, 'KPHX');
            
            expect(flights).to.be.an('Array');
        });

        it('Airline_getAllFlightsArrivals(id, airportCode) is called, it should return an array of valid Flight objects', async function() {
            const airline: Airline = await api.Airline_get(6082);
            const flights: Flight[] = await api.Airline_getAllFlightsArrivals(airline.id, 'KPHX');
            
            expect(flights).to.be.an('Array');
        });

        it('Airline_getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode) is called, it should return an array of valid Flight objects', async function() {
            const airline: Airline = await api.Airline_get(6082);
            const flights: Flight[] = await api.Airline_getAllFlightDeparturesAndArrivals(airline.id, 'KPHX', 'KJAC');
            
            expect(flights).to.be.an('Array');
        });

        it('Airline_getAllScreenshots(id) is called, it should return an array of valid Screenshot objects', async function() {
            const airline: Airline = await api.Airline_get(6082);
            const screenshots: Screenshot[] = await api.Airline_getAllScreenshots(airline.id);
            
            expect(screenshots).to.be.an('Array');
        });

        it('Airline_getStats(id) is called, it should return a valid object with airline statistics', async function() {
            const airline: Airline = await api.Airline_get(6082);
            const stats = await api.Airline_getStats(airline.id);
            
            expect(stats).to.be.an('Object');
        });
    });
});