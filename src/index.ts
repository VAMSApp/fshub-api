import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Config, FSHubResponse, FSHubError, Pilot, FSHubApiInterface, Flight, CurrentPilot } from './types';

export default class FSHubApi implements FSHubApiInterface {
    private readonly axios: AxiosInstance;
    private readonly config: Config;

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

        this.getCurrentPilot = this.getCurrentPilot.bind(this);
        this.getAllPilots = this.getAllPilots.bind(this);
        this.getPilot = this.getPilot.bind(this);
        this.getPilotLatestFlight = this.getPilotLatestFlight.bind(this);
    }

    public async getCurrentPilot() {
        const response: FSHubResponse<CurrentPilot> = await this.axios.get('user')
            .then((res: AxiosResponse<FSHubResponse<Pilot>>) => res.data)
            .catch((err: AxiosError<FSHubError>) => {
                throw new Error(err.response?.data.message);
            });
        
        return response.data;
    }

    public async getAllPilots() {
        const response: FSHubResponse<Pilot[]> = await this.axios.get('pilot')
            .then((res: AxiosResponse<FSHubResponse<Pilot[]>>) => res.data)
            .catch((err: AxiosError<FSHubError>) => {
                throw new Error(err.response?.data.message);
            });

        return response.data;
    }

    public async getPilot(id: number) {
        const response: FSHubResponse<Pilot> = await this.axios.get(`pilot/${id}`)
            .then((res: AxiosResponse<FSHubResponse<Pilot>>) => res.data)
            .catch((err: AxiosError<FSHubError>) => {
                throw new Error(err.response?.data.message);
            });

        return response.data;
    }

    public async getPilotLatestFlight(id: number) {
        const response: FSHubResponse<Flight> = await this.axios.get(`pilot/${id}/flight/latest`)
            .then((res: AxiosResponse<FSHubResponse<Flight>>) => res.data)
            .catch((err: AxiosError<FSHubError>) => {
                throw new Error(err.response?.data.message);
            });

        return response.data;
    }
}
