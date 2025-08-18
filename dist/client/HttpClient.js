"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Base HTTP client for FSHub API
 */
class HttpClient {
    constructor(config = {}) {
        this.config = {
            baseURL: 'https://fshub.io/api/v3',
            timeout: 30000,
            ...config
        };
        this.client = axios_1.default.create({
            baseURL: this.config.baseURL,
            timeout: this.config.timeout,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...this.config.headers
            }
        });
        // Add request interceptor for authentication
        this.client.interceptors.request.use((config) => {
            if (this.config.apiKey) {
                config.headers.Authorization = `Bearer ${this.config.apiKey}`;
            }
            return config;
        }, (error) => Promise.reject(error));
        // Add response interceptor for error handling
        this.client.interceptors.response.use((response) => response, (error) => this.handleError(error));
    }
    /**
     * Make a GET request
     */
    async get(url, config) {
        try {
            const response = await this.client.get(url, config);
            return this.formatResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    /**
     * Make a POST request
     */
    async post(url, data, config) {
        try {
            const response = await this.client.post(url, data, config);
            return this.formatResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    /**
     * Make a PUT request
     */
    async put(url, data, config) {
        try {
            const response = await this.client.put(url, data, config);
            return this.formatResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    /**
     * Make a PATCH request
     */
    async patch(url, data, config) {
        try {
            const response = await this.client.patch(url, data, config);
            return this.formatResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    /**
     * Make a DELETE request
     */
    async delete(url, config) {
        try {
            const response = await this.client.delete(url, config);
            return this.formatResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    /**
     * Update the API key for subsequent requests
     */
    setApiKey(apiKey) {
        this.config.apiKey = apiKey;
    }
    /**
     * Update the base URL
     */
    setBaseURL(baseURL) {
        this.config.baseURL = baseURL;
        this.client.defaults.baseURL = baseURL;
    }
    /**
     * Update request timeout
     */
    setTimeout(timeout) {
        this.config.timeout = timeout;
        this.client.defaults.timeout = timeout;
    }
    /**
     * Add custom headers
     */
    setHeaders(headers) {
        this.config.headers = { ...this.config.headers, ...headers };
        Object.assign(this.client.defaults.headers, headers);
    }
    /**
     * Format axios response to FSHubResponse
     */
    formatResponse(response) {
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        };
    }
    /**
     * Handle and format errors
     */
    handleError(error) {
        if (axios_1.default.isAxiosError(error)) {
            const status = error.response?.status;
            const message = error.response?.data?.message || error.message || 'An error occurred';
            const code = error.response?.data?.code || error.code;
            const details = error.response?.data?.errors || error.response?.data;
            return {
                message,
                status,
                code,
                details
            };
        }
        return {
            message: error.message || 'An unexpected error occurred',
            code: 'UNKNOWN_ERROR'
        };
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=HttpClient.js.map