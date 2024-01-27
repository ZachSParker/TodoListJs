import {React,useState} from 'react'

const TodoResults = (props) => {
  const {todos,setTodos} = props
  const destroyTodo = (index) => {
    const updateTasks = todos.filter((_,idx) => idx !== index)
    setTodos(updateTasks)

  }
  return (
    <div>
      {
        todos.map((item, index) => (
          <div key={index}>
            <p>{item.todo}</p>
            <button onClick={ () => destroyTodo(index)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default TodoResults