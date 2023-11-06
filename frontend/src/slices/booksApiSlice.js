import { BOOKS_URL } from '../constants';
import { apiSlice  } from './apiSlice';

// Using redux to handle fetch, get requests rather than using axios, useState, useEffect
export const booksApiSlice = apiSlice.injectEndpoints({
    endpoints: ( builder ) => ({ 
        getBooks: builder.query({
            query: ({keyword, pageNumber}) => ({ 
                url: BOOKS_URL, 
                params: { keyword, pageNumber} , 
            }), 
            //keep the data for 5 seconds
            keepUnusedDataFor: 5,
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
        deleteBook: builder.mutation({
            query: (bookId) => ({
                url: `${BOOKS_URL}/${bookId}`,
                method: 'DELETE',
            }),
            providesTags: ['Book'],
        }),
        createReview: builder.mutation({
            query: (data) => ({
              url: `${BOOKS_URL}/${data.bookId}/reviews`,
              method: 'POST',
              body: data,
            }),
            invalidatesTags: ['Book'],
        }),
        getTopBooks: builder.query({
            query: () => ({ url: `${BOOKS_URL}/top`,  }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const { 
    useGetBooksQuery, 
    useGetBookDetailsQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useUploadBookImageMutation,
    useDeleteBookMutation,
    useCreateReviewMutation,
    useGetTopBooksQuery,
} = booksApiSlice ;