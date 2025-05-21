import React, { useContext } from 'react'
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { todocontext } from '../Wrapper';

const Create = () => {
    const [todos, setTodos] = useContext(todocontext);

    const{ register, handleSubmit, reset, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        data.isCompleted = false;
        data.id = nanoid();

        setTodos([...todos, data]);

        toast.success("Todo Created!");

        reset();
    }

    return (
        <div className='w-[60%] p-10'>
            <h1 className='mb-10 text-5xl font-thin'>Set <span className='text-red-400'>Reminders</span> for <br />Tasks</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input 
                    {...register("title", {required:"Title can not be empty"})}
                    className='p-2 border-b w-full text-2xl font-thin outline-0' 
                    type="text" 
                    placeholder='Title'
                />
                <small className='font-thin text-red-400'> {errors?.title?.message} </small>
                <br /><br />
                <button className='text-white text-xl px-10 py-2 border rounded'>Create Todo</button>
            </form>
        </div>
    )
}

export default Create