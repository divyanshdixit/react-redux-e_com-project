import React from 'react'
import { ErrorBoundary } from '../containers/UI/Errors/ErrrorBoundary'
import SectionError from '../containers/UI/Errors/SectionError'

const CartPage = () => {
  return (
    <div>
        <h1> Cart page few content </h1>
        <ErrorBoundary fallback={<SectionError page="Cart section" />}>
            CartPage
        </ErrorBoundary>
    </div>
  )
}

export default CartPage