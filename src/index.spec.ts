import { describe, before } from 'mocha';
import { expect } from 'chai';
import FSHubApiClass from './index';
import dotenv from 'dotenv';
import { CurrentPilot, Flight, Pilot, FSHubApi, Airline, PilotStats, Screenshot, FSHubResponse, AirlineStats  } from './types';

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
        expect(api.Flight_getFlightById).to.be.a('function');
        expect(api.Flight_getFlightScreenshotsById).to.be.a('function');
        expect(api.Flight_getFlights).to.be.a('function');
    });

    describe('Pilot', function() {
        it('Pilot_getCurrent() is called, it should return a valid CurrentPilot object', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();

            expect(pilot.data).to.be.an('Object');
            expect(pilot.data.id).to.be.a('number');
            expect(pilot.data.name).to.be.a('string');
            expect(pilot.data.base).to.be.a('string');
            expect(pilot.data.locale).to.be.an('string');
            expect(pilot.data.gps).to.be.an('Object');
        });

        it('Pilot_getAll() is called, it should return an array of valid Pilot objects', async function() {
            const pilots: FSHubResponse<Pilot[]> = await api.Pilot_getAll();

            expect(pilots.data).to.be.an('Array');
        });

        it('Pilot_get(id) is called, it should return a valid Pilot object', async function() {
            const pilot: FSHubResponse<Pilot> = await api.Pilot_get(1);

            expect(pilot.data).to.be.an('Object');
            expect(pilot.data).to.be.an('Object');
            expect(pilot.data.id).to.be.a('number');
            expect(pilot.data.name).to.be.a('string');
            expect(pilot.data.base).to.be.a('string');
            expect(pilot.data.locale).to.be.an('string');
            expect(pilot.data.gps).to.be.an('Object');
        });

        it('Pilot_getLatestFlight(id) is called, it should return a valid Flight object', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();
            const flight: FSHubResponse<Flight> = await api.Pilot_getLatestFlight(pilot.data.id);

            expect(flight).to.be.an('Object');
        });

        it('Pilot_getAllFlights(id) is called, it should return an array of valid Flight objects', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();
            const flights: FSHubResponse<Flight[]> = await api.Pilot_getAllFlights(pilot.data.id);
            
            expect(flights.data).to.be.an('Array');
        });

        it('Pilot_getAllAirlines(id) is called, it should return an array of valid Airline objects', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();
            const airlines: FSHubResponse<Airline[]> = await api.Pilot_getAllAirlines(pilot.data.id);
            
            expect(airlines.data).to.be.an('Array');
        });

        it('Pilot_getStats(id) is called, it should return a valid PilotStats object', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();
            const stats: FSHubResponse<PilotStats> = await api.Pilot_getStats(pilot.data.id);
            
            expect(stats.data).to.be.an('Object');
            expect(stats.data.id).to.be.a('number'); 
            expect(stats.data.all_time).to.be.an('Object');
            expect(stats.data.month).to.be.an('Object');
        });

        it('Pilot_getAllFlightsDepartures(id, airportCode) is called, it should return an array of valid Flight objects', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();
            const flights: FSHubResponse<Flight[]> = await api.Pilot_getAllFlightsDepartures(pilot.data.id, 'KPHX');
            
            expect(flights.data).to.be.an('Array');
        });

        it('Pilot_getAllFlightsArrivals(id, airportCode) is called, it should return an array of valid Flight objects', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();
            const flights: FSHubResponse<Flight[]> = await api.Pilot_getAllFlightsArrivals(pilot.data.id, 'KPHX');
            
            expect(flights.data).to.be.an('Array');
        });

        it('Pilot_getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode) is called, it should return an array of valid Flight objects', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();
            const flights: FSHubResponse<Flight[]> = await api.Pilot_getAllFlightDeparturesAndArrivals(pilot.data.id, 'KPHX', 'KJAC');
            
            expect(flights.data).to.be.an('Array');
        });

        it('Pilot_getAllScreenshots(id) is called, it should return an array of valid Screenshot objects', async function() {
            const pilot: FSHubResponse<CurrentPilot> = await api.Pilot_getCurrent();
            const screenshots: FSHubResponse<Screenshot[]> = await api.Pilot_getAllScreenshots(pilot.data.id);
            
            expect(screenshots.data).to.be.an('Array');
        });
    });

    describe('Airline', function() {
        it('Airline_getAll() is called, it should return an array of valid Airline objects', async function() {
            const airlines: FSHubResponse<Airline[]> = await api.Airline_getAll();
            
            expect(airlines.data).to.be.an('Array');
        });

        it('Airline_get(id) is called, it should return a valid Airline object', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            
            expect(airline.data).to.be.an('Object');
        });

        it('Airline_getPilots(id) is called, it should return an array of valid Pilot objects', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            const pilots: FSHubResponse<Pilot[]> = await api.Airline_getPilots(airline.data.id);
            
            expect(pilots.data).to.be.an('Array');
        });

        it('Airline_getPilotStats(id, pilotId) is called, it should return a valid PilotStats object', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            const pilot: FSHubResponse<Pilot> = await api.Pilot_getCurrent();
            const stats: FSHubResponse<PilotStats> = await api.Airline_getPilotStats(airline.data.id, pilot.data.id);
            
            expect(stats.data).to.be.an('Object');
        });

        it('Airline_getFlights(id) is called, it should return an array of valid Flight objects', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            const flights: FSHubResponse<Flight[]> = await api.Airline_getFlights(airline.data.id);
            
            expect(flights.data).to.be.an('Array');
        });

        it('Airline_getAllFlightsDepartures(id, airportCode) is called, it should return an array of valid Flight objects', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            const flights: FSHubResponse<Flight[]> = await api.Airline_getAllFlightsDepartures(airline.data.id, 'KPHX');
            
            expect(flights.data).to.be.an('Array');
        });

        it('Airline_getAllFlightsArrivals(id, airportCode) is called, it should return an array of valid Flight objects', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            const flights: FSHubResponse<Flight[]> = await api.Airline_getAllFlightsArrivals(airline.data.id, 'KPHX');
            
            expect(flights.data).to.be.an('Array');
        });

        it('Airline_getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode) is called, it should return an array of valid Flight objects', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            const flights: FSHubResponse<Flight[]> = await api.Airline_getAllFlightDeparturesAndArrivals(airline.data.id, 'KPHX', 'KJAC');
            
            expect(flights.data).to.be.an('Array');
        });

        it('Airline_getAllScreenshots(id) is called, it should return an array of valid Screenshot objects', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            const screenshots: FSHubResponse<Screenshot[]> = await api.Airline_getAllScreenshots(airline.data.id);
            
            expect(screenshots.data).to.be.an('Array');
        });

        it('Airline_getStats(id) is called, it should return a valid object with airline statistics', async function() {
            const airline: FSHubResponse<Airline> = await api.Airline_get(6082);
            const stats: FSHubResponse<AirlineStats> = await api.Airline_getStats(airline.data.id);
            
            expect(stats.data).to.be.an('Object');
        });
    });

    describe('Flight', function() {
        describe('Flight_getFlightById(id)', function() {
            it('Flight_getFlightById(id) is called, it should return a valid Flight object', async function() {
                const flight: FSHubResponse<Flight> = await api.Flight_getFlightById(4009359);
                
                expect(flight.data).to.be.an('Object');
            });
        });

        describe('Flight_getFlightScreenshotsById(id)', function() {
            it('Flight_getFlightScreenshotsById(id) is called, it should return an array of valid Screenshot objects', async function() {
                const flight: FSHubResponse<Screenshot[]> = await api.Flight_getFlightScreenshotsById(4009359);
                
                expect(flight.data).to.be.an('Array');
            });
        });

        describe('Flight_getFlights(options)', function() {
            it('Flight_getFlights(options) is called, it should return an array of valid Flight objects', async function() {
                const flights: FSHubResponse<Flight[]> = await api.Flight_getFlights();
                
                expect(flights.data).to.be.an('Array');
                expect(flights.data.length).to.be.equal(10);
            });

            it('Flight_getFlights(options) is called with limit option, it should limit the number of flights returned', async function() {
                const flights: FSHubResponse<Flight[]> = await api.Flight_getFlights({ limit: 1 });
                
                expect(flights.data).to.be.an('Array');
                expect(flights.data.length).to.be.equal(1);
            });

            it('Flight_getFlights(options) is called with cursor option, it should return the next page of flights', async function() {
                const flights: FSHubResponse<Flight[]> = await api.Flight_getFlights({ cursor: 100 });
                
                expect(flights.data).to.be.an('Array');
                expect(flights.data.length).to.be.equal(100);
            });
        });
    });
});