import React from 'react'

const ProductDetails = () => {
  const ProductList = () => {
    throw new Error('list not found!')
  }

  return (
    <div>
      ProductDetails - 
      {ProductList()}
    </div>
  )
}

export default ProductDetails