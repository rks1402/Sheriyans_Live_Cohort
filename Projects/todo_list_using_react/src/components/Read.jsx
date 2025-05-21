import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { todocontext } from '../Wrapper';

const Read = () => {
    const [todos, setTodos] = useContext(todocontext);

    const deleteHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));

        toast.error("Todo deleted!");
    }


    const renderTodos = todos.map(todo => {
            return (
              <li key={todo.id} className='mb-2 flex justify-between items-center p-3 bg-gray-900 rounded'>
                <span className='text-xl font-thin'>{todo.title}</span>
                <button className='font-thin text-sm text-red-400' onClick={() => {deleteHandler(todo.id)}}>Delete</button>
              </li>
            )
        });

    return (
        <div className='w-[40%] p-10'>
            <h1 className='mb-10 text-5xl font-thin'><span className='text-pink-400'>Pending</span> Tasks</h1>
            <ol>{renderTodos}</ol>
        </div>
    )
}

export default Read