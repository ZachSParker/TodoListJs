import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoResults from './components/TodoResults'
import './App.css'

function App() {
  const [todos,setTodos] = useState([])

  return (
    <>
      <TodoForm todos ={todos} setTodos={setTodos}/>
      <TodoResults todos ={todos} setTodos ={setTodos}/>
    </>
  )
}

export default App
