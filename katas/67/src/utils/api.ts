import { ApiResponse, RequestConfig } from './types';
import { handleError } from './error';
import { API_BASE_URL } from '../config';

export async function fetchData<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
        return await response.json();
    } catch (error) {
        return handleError(error);
    }
}

export async function postData<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    return fetchData(endpoint, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export async function updateData<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    return fetchData(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
}

// This function is used in multiple components
export function createQueryString(params: Record<string, string>): string {
    return Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
} 