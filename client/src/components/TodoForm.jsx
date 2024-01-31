import {React,useState} from 'react'

const TodoForm = (props) => {
  const {todos,setTodos} = props
  const [todo,setTodo] = useState(
    {
      todoName:"",
      completed:false
    }
  )

  const submitHandler = (e) => {
    e.preventDefault()
    setTodos([...todos,{todo}])
    // console.log(todo,todos)
    setTodo("")
  }
  return (
    <form onSubmit ={submitHandler}>
      <label htmlFor="todo">Task</label>
      <input type="text" value = {todo.todoName} name="todoName" onChange={(e) => setTodo({...todo,[e.target.name]:e.target.value})} />
      <input type="submit" value="Add"/>
    </form>
  )
}

export default TodoForm