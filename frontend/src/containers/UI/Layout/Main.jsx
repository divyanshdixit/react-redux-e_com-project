import React from 'react'
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '../Errors/ErrrorBoundary';
import FallbackPage from '../Errors/FallbackPage';

const MainLayout = () => {
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