import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoResults from './components/TodoResults'
import './App.css'

function App() {
  const [todos,setTodos] = useState([])
  const [isCompleted,setIsCompleted] = useState(false)
  return (
    <>
      <TodoForm todos ={todos} setTodos={setTodos} isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
      <TodoResults todos ={todos} setTodos ={setTodos} isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
    </>
  )
}

export default App
