import { BOOKS_URL } from "../constants";
import { apiSlice  } from "./apiSlice";


// Using redux to handle fetch, get requests rather than using axios, useState, useEffect
export const booksApiSlices = apiSlice.injectEndpoints({
    endpoints: ( builder ) => ({ 
        getBooks: builder.query({
            query: () => ({
                url: BOOKS_URL, 
            }),
            keepUnsedDataFor: 5
        })
    }),
});

export const { useGetBooksQuery } = booksApiSlices ;