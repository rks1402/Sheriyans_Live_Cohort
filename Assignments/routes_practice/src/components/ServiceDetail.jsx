import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceDetail = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h1 className='text-4xl font-thin mb-5'>Service Details</h1>
        <h2 className='text-2xl font-thin mb-2'>choose us...</h2>
        <button onClick={() => navigate(-1)} className='bg-red-400 px-4 py-2 rounded'>Go Back</button>
    </div>
  )
}

export default ServiceDetail