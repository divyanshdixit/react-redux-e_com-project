import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryAuthHandler } from "./baseQuery";

export const api = createApi({
    reducerPath: "api",
    baseQuery: BaseQueryAuthHandler,
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => ({
                url: 'http://localhost:8000/register',
                method: 'POST',
                body
            })
        }),

        login: builder.mutation({
            query: (body) => ({
               url: 'http://localhost:8000/login', // localhost:8000/login
               method: "POST",
               body
            })
        }),

        getUser: builder.query({
            query: (id) => ({
                method: 'GET',
                url: `http://localhost:8001/users/${id}`
            })
        }),

        // put vs patch => 
        updateUser: builder.mutation({
            query: ({id, body}) => ({
                url: `http://localhost:8001/users/${id}`,
                method: 'PATCH',
                body
            })
        })
        // /600/users/{id}
    })
})

export const {useRegisterMutation, useLoginMutation, useGetUserQuery, useUpdateUserMutation} = api;