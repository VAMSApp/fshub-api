import { FSHubRequestOptions, FSHubResponse, FSHubApi } from '../types';
export declare function FSHubApiRequest<T>(url: string, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<T>>;
export declare function FSHubApiPostRequest<T, D = any>(url: string, api: FSHubApi, data?: D): Promise<FSHubResponse<T>>;
export declare function FSHubApiPutRequest<T, D = any>(url: string, api: FSHubApi, data?: D): Promise<FSHubResponse<T>>;
export default FSHubApiRequest;
//# sourceMappingURL=FSHubApiRequest.d.ts.map