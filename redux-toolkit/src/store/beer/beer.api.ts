import { createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError } from 'axios';
import { IBeer } from '../../interfaces/beer.interface';

type AxiosBaseQueryArgs = {
    url: string;
    method?: string;
    data?: Record<string, unknown>;
    params?: Record<string, string | number>;
};

type AxiosBaseQueryResponse<T> = { data: T } | { error: { status: number; message: string } };

const axiosBaseQuery = <T>({ baseUrl }: { baseUrl: string }) => async ({
    url,
    method = 'GET',
    data,
    params,
}: AxiosBaseQueryArgs): Promise<AxiosBaseQueryResponse<T>> => {
    try {
        const result = await axios({
            url: `${baseUrl}${url}`,
            method,
            data,
            params,
        });
        return { data: result.data };
    } catch (error) {
        const axiosError = error as AxiosError;
        return {
            error: {
                status: axiosError.response?.status || 500,
                message: typeof axiosError.response?.data === 'string'
                    ? axiosError.response?.data
                    : 'An error occurred',
            },
        };
    }
};

export const BeerApi = createApi({
    reducerPath: 'BeerApi',
    baseQuery: axiosBaseQuery({ baseUrl:  import.meta.env.VITE_API_URL }),
    tagTypes: ['Beer'],
    endpoints: (builder) => ({
        fetchAllBeers: builder.query<IBeer[], { page: number; per_page: number }>({
            query: ({ page, per_page }) => ({
                url: 'breweries',
                params: { page, per_page },
            }),
        }),

        fetchBeer: builder.query<IBeer, string>({
            query: (id: string) => ({
                url: `breweries/${id}`,
            }),
        }),
        fetchRandomBeers: builder.query<IBeer[], void>({
            query: () => ({
                url: 'breweries/random', 
            }),
        }),
    }),
});

export const { useFetchAllBeersQuery, useFetchBeerQuery, useFetchRandomBeersQuery, usePrefetch } = BeerApi;
