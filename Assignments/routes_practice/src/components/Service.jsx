import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate()  

  return (
    <div>
        <h1 className='text-5xl font-thin mb-5'>Service</h1>
        <button onClick={() => navigate("/service/detail")} className='bg-red-400 px-4 py-2 rounded mr-2'>More Details</button>
        <button onClick={() => navigate("/service/charge")} className='bg-red-400 px-4 py-2 rounded'>Service Charge</button>
        <hr className='my-10'/>
        <Outlet />
    </div>
  )
}

export default Service