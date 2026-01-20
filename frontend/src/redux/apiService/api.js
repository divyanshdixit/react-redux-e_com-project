import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token;
            if(token){
                headers.set('Authorization', `Bearer ${token}`)
            }
            headers.set('Content-Type', 'application/json')
        }
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
        }),

        getUser: builder.query({
            query: (id) => ({
                method: 'GET',
                url: `/600/users/${id}`
            })
        })
        // /600/users/{id}
    })
})

export const {useRegisterMutation, useLoginMutation, useGetUserQuery} = api;