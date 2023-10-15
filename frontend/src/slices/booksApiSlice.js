import { BOOKS_URL } from '../constants';
import { apiSlice  } from './apiSlice';

// Using redux to handle fetch, get requests rather than using axios, useState, useEffect
export const booksApiSlice = apiSlice.injectEndpoints({
    endpoints: ( builder ) => ({ 
        getBooks: builder.query({
            query: () => ({
                url: BOOKS_URL, 
            }),
            //keep the data for 5 seconds
            keepUnusedDataFor: 5,
        }),
        getBookDetails: builder.query({
            query: (bookId) => ({
              url: `${BOOKS_URL}/${bookId}`, 
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const { 
    useGetBooksQuery, 
    useGetBookDetailsQuery 
} = booksApiSlice ;