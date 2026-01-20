import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token;
            if(token){
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
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

        // get the user details
        getUser: builder.query({
            query: (id) => {
                return {
                    url: `/600/users/${id}`,
                    method: 'GET',
                }
            }
        })
    })
})

export const {useRegisterMutation, useLoginMutation, useGetUserQuery} = api;