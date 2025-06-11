import { collapseToast } from 'react-toastify';
import axios from '../utils/axios';
import React, { useEffect } from 'react'

const Home = () => {
  const getProduct = async () => {
    try {
      const {data} = await axios.get("/products");
      console.log(data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Products</button>
    </div>
  )
}

export default Home