import Edit from '../components/categories/Edit'
import { Header } from '../components/Header/Header'
import React from 'react'

const ProductPage = () => {
  return (
    <>
    <Header />
    <div className='px-6'>
        <h1 className='text-4xl font-bold text-center mb-4'>Ürünler</h1>
        <Edit />
    </div>
    </>
    
  )
}

export default ProductPage