import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        // headers
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body
            })
        }),

        login: builder.mutation({
            query: (body) => ({
               url: '/login', // localhost:8000/login
               method: "POST",
               body
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation} = api;