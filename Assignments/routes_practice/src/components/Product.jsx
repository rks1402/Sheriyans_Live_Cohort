import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate()
  const routeHandler = (name) => {
    navigate(`/product/detail/${name}`);
  }

  return (
    <div>
        <h1 className='text-5xl font-thin mb-10'>Products</h1>
        <div className='mb-5'>
            <h2 className='text-3xl font-thin mb-3'>Product 1</h2>
            <button onClick={() => routeHandler("Product 1")} className='bg-red-400 px-4 py-2 rounded'>See Details</button>
        </div>
        <div className='mb-5'>
            <h2 className='text-3xl font-thin mb-3'>Product 2</h2>
            <button onClick={() => routeHandler("Product 2")} className='bg-red-400 px-4 py-2 rounded'>See Details</button>
        </div>
        <div className='mb-5'>
            <h2 className='text-3xl font-thin mb-3'>Product 3</h2>
            <button onClick={() => routeHandler("Product 3")} className='bg-red-400 px-4 py-2 rounded'>See Details</button>
        </div>
    </div>
  )
}

export default Product