import {React,useState} from 'react'

const TodoForm = (props) => {
  const {todos,setTodos} = props
  const [todo,setTodo] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    setTodos([...todos,{todo}])
  }
  return (
    <form onSubmit ={submitHandler}>
      <label htmlFor="">Add Task</label>
      <input type="text" value ={todo} name="todo" onChange={(e) => setTodo(e.target.value)} />
    </form>
  )
}

export default TodoForm