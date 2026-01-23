import React, { useEffect } from 'react'
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '../Error/ErrorBoundary';
import PageLevelError from '../Error/PageLevelError';
import { useGetUserCartQuery, useGetUserQuery } from '../../../redux/apiService/api';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { setUser } from '../../../redux/feature/authSlice';
import { ToastContainer } from 'react-toastify';
import { setCart } from '../../../redux/feature/cartSlice';

const MainLayout = () => {
  const dispatch = useDispatch();
  const {token, user} = useSelector(state => state.auth);
  const uid = localStorage.getItem("uid")

  const {data, isLoading, error} = useGetUserQuery(uid, {skip: !token || !uid});
  const {data: cartItems, isLoading: cartLoading, }= useGetUserCartQuery(user?.id, {skip: !token || !user?.id});

  useEffect(() => {
    if(data){
      dispatch(setUser(data))
    }
  }, [data])

  useEffect(() => {
    if(cartItems){
      dispatch(setCart(cartItems));
    }
  }, [cartItems])

  if(isLoading) return <CircularProgress />

  return (
    <>
        <Header />
        <ToastContainer position="top-right" />
        <ErrorBoundary fallback={<PageLevelError />} >
          <Outlet />
        </ErrorBoundary>
    </>
  )
}

export default MainLayout