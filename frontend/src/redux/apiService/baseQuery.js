import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setLogout } from "../feature/authSlice";

const BaseQuery = fetchBaseQuery({
    // baseUrl: 'http://localhost:8000',
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token;
        if(token){
            headers.set('Authorization', `Bearer ${token}`)
        }
        headers.set('Content-Type', 'application/json')
        return headers;
    }
})
// 500, 401, 404, 403, 200, 201, 300, 

export const BaseQueryAuthHandler = async(args, api, extraOptions) => {
    const result = await BaseQuery(args, api, extraOptions);
    if(result?.error?.status === 401){
        // gloablly handle error:
        api.dispatch(setLogout())
        toast.error("Login expired. Please login again.", {
            toastId: "session-expired",
        });
        // redirect to login.
        window.location.href = '/login'
    }
    return result;
}