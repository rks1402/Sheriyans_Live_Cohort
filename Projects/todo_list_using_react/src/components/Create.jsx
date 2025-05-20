import React, { useState } from 'react'
import { nanoid } from 'nanoid';

const Create = (props) => {
    const [title, setTitle] = useState("");
    const todos = props.todos;
    const setTodos = props.setTodos;

    const submitHandler = (e) => {
        e.preventDefault();
    
        const newTodo = {
          id: nanoid(),
          title: title,
          idComleted: false,
        }
    
        setTodos([...todos, newTodo]);
        setTitle("");
    }

    return (
        <div className='w-[60%] p-10'>
            <h1 className='mb-10 text-5xl font-thin'>Set <span className='text-red-400'>Reminders</span> for <br />Tasks</h1>
            <form onSubmit={submitHandler}>
                <input className='p-2 border-b w-full text-2xl font-thin outline-0' type="text" placeholder='Title' value={title} onChange={e => {setTitle(e.target.value)}}/>
                <br /><br />
                <button className='text-white text-xl px-10 py-2 border rounded'>Create Todo</button>
            </form>
        </div>
    )
}

export default Create