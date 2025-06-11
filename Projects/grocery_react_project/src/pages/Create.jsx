import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate();
  const {data, setData} = useContext(recipecontext)  

  const {register, handleSubmit, reset} = useForm()  

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Added.");
    reset();
    navigate('/recipes');
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
        <input className='block border-b outline-0 p-2' {...register("image")} type="url" placeholder='Enter image url'/>
        <small className='text-red-400'>This is how the error is shown.</small>
        <input className='block border-b outline-0 p-2' {...register("title")} type="text" placeholder='Recipe Title'/>
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <input className='block border-b outline-0 p-2' {...register("chef")} type="text" placeholder='Chef Name'/>
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <textarea className='block border-b outline-0 p-2' {...register("desc")} placeholder='Recipe Description'/>
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <textarea className='block border-b outline-0 p-2' {...register("ingr")} placeholder='// write ingredients seperated by comma'/>
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <textarea className='block border-b outline-0 p-2' {...register("inst")} placeholder='// write instructions seperated by comma'/>
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <select className='block border-b outline-0 p-2' {...register("category")} >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
        </select>
        <button className='block mt-5 bg-gray-900 px-4 py-2 rounded'>Save Recipe</button>
    </form>
  )
}

export default Create