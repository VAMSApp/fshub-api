import { AxiosResponse, AxiosError } from 'axios';
import { FSHubRequestOptions, FSHubResponse, FSHubError, FSHubApi } from '../types';

export async function FSHubApiRequest<T>(url: string, api: FSHubApi, options?: FSHubRequestOptions): Promise<FSHubResponse<T>> {
    let queryParams = '';
    if (options) {
        queryParams = `?cursor=${options.cursor}&limit=${options.limit}`;
    }

    const response: FSHubResponse<T> =  await api.axios.get(url + queryParams)
        .then((res: AxiosResponse<FSHubResponse<T>>) => res.data)
        .catch((err: AxiosError<FSHubError>) => {
            if (err.response?.data.code === 404) {
                throw new Error('Not Found');
            }

            throw new Error(err.response?.data.message);
        });
        
    return response;
}

export async function FSHubApiPostRequest<T, D = any>(url: string, api: FSHubApi, data?: D): Promise<FSHubResponse<T>> {
    const response: FSHubResponse<T> = await api.axios.post(url, data)
        .then((res: AxiosResponse<FSHubResponse<T>>) => res.data)
        .catch((err: AxiosError<FSHubError>) => {
            throw new Error(err.response?.data.message);
        });
        
    return response;
}

export async function FSHubApiPutRequest<T, D = any>(url: string, api: FSHubApi, data?: D): Promise<FSHubResponse<T>> {
    const response: FSHubResponse<T> = await api.axios.put(url, data)
        .then((res: AxiosResponse<FSHubResponse<T>>) => res.data)
        .catch((err: AxiosError<FSHubError>) => {
            throw new Error(err.response?.data.message);
        });
        
    return response;
}

export default FSHubApiRequest;