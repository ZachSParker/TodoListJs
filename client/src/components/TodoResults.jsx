import {useState} from 'react'

const TodoResults = (props) => {
  const {todos,setTodos} = props
  const destroyTodo = (index) => {
    const updateTasks = todos.filter((_,idx) => idx !== index)
    setTodos(updateTasks)
  }
  const completeTodo = (item) => {
    item.completed ? item.completed = false : item.completed = true
  }
  return (
    <div>
      {
        todos.map((item, index) => (
          <div key={index}>
            <p>{index}.</p>
            <input type="checkbox" onClick={() => completeTodo(item)}/>
            <p className={item.completed ? "strike":"unstriked"}>{item.todoName}</p>
            <button onClick={ () => destroyTodo(index)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default TodoResults