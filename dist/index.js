"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class FSHubApi {
    constructor(config) {
        if (!config.apiKey) {
            throw new Error('FSHub API key is required!');
        }
        this.config = config;
        this.axios = axios_1.default.create({
            baseURL: config.baseURL || 'https://fshub.io/api/v3/',
            headers: {
                'Content-Type': 'application/json',
                'X-Pilot-Token': config.apiKey,
                ...config.headers
            },
            timeout: config.timeout || 10000
        });
    }
    async getCurrentPilot() {
        const response = await this.axios.get('user');
        return response.data;
    }
}
exports.default = FSHubApi;
//# sourceMappingURL=index.js.map