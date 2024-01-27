import {React,useState} from 'react'

const TodoForm = (props) => {
  const {todos,setTodos} = props
  const [todo,setTodo] = useState("")
  const [isCompleted,setIsCompleted] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    setTodos([...todos,{todo}])
    console.log(todo,todos)
    setTodo("")
  }
  return (
    <form onSubmit ={submitHandler}>
      <label htmlFor="">Task</label>
      <input type="text" value ={todo} name="todo" onChange={(e) => setTodo(e.target.value)} />
      <input type="submit" value="add Task"/>
    </form>
  )
}

export default TodoForm