import { AxiosResponse, AxiosError } from 'axios';
import { FSHubResponse, FSHubError, FSHubApi } from '../types';

export default async function FSHubApiRequest<T>(url: string, api: FSHubApi): Promise<FSHubResponse<T>> {
    const response: FSHubResponse<T> =  await api.axios.get(url)
        .then((res: AxiosResponse<FSHubResponse<T>>) => res.data)
        .catch((err: AxiosError<FSHubError>) => {
            if (err.response?.data.code === 404) {
                throw new Error('Not Found');
            }

            throw new Error(err.response?.data.message);
        });
        
    return response;
}