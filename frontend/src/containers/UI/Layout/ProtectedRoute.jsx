import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {useGetUserQuery} from "../../../redux/apiService/api"
import { setUser } from '../../../redux/feature/authSlice';

const ProtectedRoute = () => {
  const {getUser, isLoading, error} = useGetUserQuery();

  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);

  const location = useLocation();
    // token = null => user not authenticated
    // token = value => user is authenticated

    // const isAuthenticated = token

    // token => null => !null => true 
    // token => value => !value => false
    if(!token){
        return <Navigate to="/login" replace state={{ from: location.pathname }}/>
    }

    useEffect(() => {
      const getUserDetail = async() => {
        if(token){
          // token is there but user is not available:
          if(!user){
            const userObj = await getUser().unwrap();
            console.log(userObj);
            // dispatch(setUser(userObj))
          }
        }
      }

      getUserDetail();
      
    }, [token])
  return (
    <>
        <Outlet />
    </>
  )
}

export default ProtectedRoute