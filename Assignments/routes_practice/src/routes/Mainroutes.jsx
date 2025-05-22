import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import Service from '../components/Service'
import About from '../components/About'
import ProductDetail from '../components/ProductDetail'
import ServiceDetail from '../components/ServiceDetail'
import ServiceCharge from '../components/ServiceCharge'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product/detail/:name' element={<ProductDetail />}/>
        <Route path='/service' element={<Service />}>
            <Route path='/service/detail' element={<ServiceDetail />}/>
            <Route path='/service/charge' element={<ServiceCharge />}/>
        </Route>
        <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default Mainroutes