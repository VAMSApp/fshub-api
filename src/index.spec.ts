import { describe, before } from 'mocha';
import { expect } from 'chai';
import FSHubApi from './index';
import dotenv from 'dotenv';
import { CurrentPilot, Flight, Pilot } from './types';

dotenv.config();

describe('FSHubApi()', function() {
    let apiKey: string;

    before(function() {
        if (!process.env.FSHUB_API_KEY) {
            throw new Error('FSHUB_API_KEY is not set in .env file');
        }

        apiKey = process.env.FSHUB_API_KEY;
    });

    it('when instantiated with valid data, it should return an FSHubApi object with the expected class methods', async function() {
        const api = new FSHubApi({ apiKey });

        expect(api.getCurrentPilot).to.be.a('function');
        expect(api.getAllPilots).to.be.a('function');
        expect(api.getPilot).to.be.a('function');
    });

    it('when getCurrentPilot() is called, it should return a valid Pilot object', async function() {
        const api = new FSHubApi({ apiKey });
        const pilot: CurrentPilot = await api.getCurrentPilot();

        expect(pilot).to.be.an('Object');
        expect(pilot.id).to.be.a('number');
        expect(pilot.name).to.be.a('string');
        expect(pilot.base).to.be.a('string');
        expect(pilot.locale).to.be.an('string');
        expect(pilot.gps).to.be.an('Object');
    });

    it('when getAllPilots() is called, it should return an array of valid Pilot objects', async function() {
        const api = new FSHubApi({ apiKey });
        const pilots: Pilot[] = await api.getAllPilots();

        expect(pilots).to.be.an('Array');
    });

    it('when getPilot(id) is called, it should return a valid Pilot object', async function() {
        const api = new FSHubApi({ apiKey });
        const pilot: Pilot = await api.getPilot(1);

        expect(pilot).to.be.an('Object');
    });

    it('when getPilotLatestFlight(id) is called, it should return a valid Flight object', async function() {
        const api = new FSHubApi({ apiKey });
        const pilot: Pilot = await api.getCurrentPilot();
        const flight: Flight = await api.getPilotLatestFlight(pilot.id);

        expect(flight).to.be.an('Object');
    });

});