import React, { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

const App = () => {

  const [todos, setTodos] = useState([]);

  return (
    <div className='text-white flex w-screen h-screen bg-gray-800 p-10'>
      <Create setTodos={setTodos} todos={todos}/>
      <Read setTodos={setTodos} todos={todos}/>
    </div>
  )
}

export default App