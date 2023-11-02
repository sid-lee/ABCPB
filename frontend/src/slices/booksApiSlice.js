import { BOOKS_URL } from '../constants';
import { apiSlice  } from './apiSlice';

// Using redux to handle fetch, get requests rather than using axios, useState, useEffect
export const booksApiSlice = apiSlice.injectEndpoints({
    endpoints: ( builder ) => ({ 
        getBooks: builder.query({
            query: () => ({ url: BOOKS_URL,  }),
            //keep the data for 5 seconds
            keepUnusedDataFor: 5,
            providesTags: ['Books'],
        }),
        getBookDetails: builder.query({
            query: (bookId) => ({ url: `${BOOKS_URL}/${bookId}`,  }),
            keepUnusedDataFor: 5,
        }),
        createBook: builder.mutation({
            query: () =>({
                url: BOOKS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Book'],
        }),
        updateBook: builder.mutation({
            query: (data) => ({
              url: `${BOOKS_URL}/${data.bookId}`,
              method: 'PUT',
              body: data,
            }),
            invalidatesTags: ['Books'],
        }),
        uploadBookImage: builder.mutation({
            query: (data) => ({
              url: `/api/uploads`,
              method: 'POST',
              body: data,
            }),
        }),
    }),
});

export const { 
    useGetBooksQuery, 
    useGetBookDetailsQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useUploadBookImageMutation
} = booksApiSlice ;