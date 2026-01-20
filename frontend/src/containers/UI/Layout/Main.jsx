import React, { useEffect } from 'react'
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '../Error/ErrorBoundary';
import PageLevelError from '../Error/PageLevelError';
import { useGetUserQuery } from '../../../redux/apiService/api';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { setUser } from '../../../redux/feature/authSlice';

const MainLayout = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {data: user, isLoading, error} = useGetUserQuery('CGGbmi6', {skip: !token});
  
  if(isLoading) return <CircularProgress />
  useEffect(() => {
    dispatch(setUser(user))
  }, [])

  return (
    <>
        <Header />
        <ErrorBoundary fallback={<PageLevelError />} >
          <Outlet />
        </ErrorBoundary>
    </>
  )
}

export default MainLayout