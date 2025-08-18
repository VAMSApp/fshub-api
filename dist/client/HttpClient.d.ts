import { AxiosRequestConfig } from 'axios';
import { FSHubConfig, FSHubResponse } from '../types';
/**
 * Base HTTP client for FSHub API
 */
export declare class HttpClient {
    private client;
    private config;
    constructor(config?: FSHubConfig);
    /**
     * Make a GET request
     */
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<FSHubResponse<T>>;
    /**
     * Make a POST request
     */
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<FSHubResponse<T>>;
    /**
     * Make a PUT request
     */
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<FSHubResponse<T>>;
    /**
     * Make a PATCH request
     */
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<FSHubResponse<T>>;
    /**
     * Make a DELETE request
     */
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<FSHubResponse<T>>;
    /**
     * Update the API key for subsequent requests
     */
    setApiKey(apiKey: string): void;
    /**
     * Update the base URL
     */
    setBaseURL(baseURL: string): void;
    /**
     * Update request timeout
     */
    setTimeout(timeout: number): void;
    /**
     * Add custom headers
     */
    setHeaders(headers: Record<string, string>): void;
    /**
     * Format axios response to FSHubResponse
     */
    private formatResponse;
    /**
     * Handle and format errors
     */
    private handleError;
}
//# sourceMappingURL=HttpClient.d.ts.map