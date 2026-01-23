import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const {token} = useSelector(state => state.auth);
  // console.log(token);
    // token = null => user not authenticated
    // token = value => user is authenticated

    // useSelector , useDispatch 

    // const isAuthenticated = token

    // token => null => !null => true 
    // token => value => !value => false
    if(!token){
        return <Navigate to="/login" replace />
    }
  return (
    <>
        <Outlet />
    </>
  )
}

export default ProtectedRoute