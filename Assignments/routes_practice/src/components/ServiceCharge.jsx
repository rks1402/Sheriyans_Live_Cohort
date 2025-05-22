import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCharge = () => {
  const navigate = useNavigate()  

  return (
    <div>
        <h1 className='text-4xl font-thin mb-5'>Service Charges</h1>
        <h2 className='text-2xl font-thin mb-2'>bohot mahenga hai...</h2>
        <button onClick={() => navigate(-1)} className='bg-red-400 px-4 py-2 rounded'>Go Back</button>
    </div>
  )
}

export default ServiceCharge