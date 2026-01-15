import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000'
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body
            })
        })
    })
})

export const {useResgisterMutation} = api;