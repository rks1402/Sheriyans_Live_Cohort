import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div>
        <h1 className='text-4xl font-thin mb-5'>{params.name}</h1>
        <h2 className='text-2xl font-thin mb-2'>Product Details</h2>
        <button onClick={() => navigate(-1)} className='bg-red-400 px-4 py-2 rounded'>Go Back</button>
    </div>
  )
}

export default ProductDetail