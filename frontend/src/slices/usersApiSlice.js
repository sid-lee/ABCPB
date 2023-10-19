import { USERS_URL } from '../constants';
import { apiSlice  } from './apiSlice';

// Using redux to handle fetch, get requests rather than using axios, useState, useEffect
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: ( builder ) => ({ 
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`, 
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation } = usersApiSlice ;