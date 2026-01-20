import React, { useEffect } from 'react'
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '../Errors/ErrrorBoundary';
import FallbackPage from '../Errors/FallbackPage';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery } from '../../../redux/apiService/api';
import { setUser } from '../../../redux/feature/authSlice';

const MainLayout = () => {
  const {token} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // when skip is true then api will not run.
  const {data, isLoading, error} = useGetUserQuery(undefined, {skip: !token});
  console.log(data);

  return (
    <>
        <Header />

        {/* Page-level error protection boundary */}
        <ErrorBoundary fallback={<FallbackPage />}>
          <Outlet />
        </ErrorBoundary>

        {/* footer */}
    </>
  )
}

export default MainLayout