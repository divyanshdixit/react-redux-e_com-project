import React from 'react'
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '../Error/ErrorBoundary';
import PageLevelError from '../Error/PageLevelError';

const MainLayout = () => {
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