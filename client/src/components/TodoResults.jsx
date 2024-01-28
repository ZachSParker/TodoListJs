import {useState} from 'react'

const TodoResults = (props) => {
  const {todos,setTodos,isCompleted,setIsCompleted} = props
  const destroyTodo = (index) => {
    const updateTasks = todos.filter((_,idx) => idx !== index)
    setTodos(updateTasks)
  }
  
  return (
    <div>
      {
        todos.map((item, index) => (
          <div key={index}>
            <p>{index}.</p>
            <input type="checkbox" onClick={(e) => setIsCompleted(!isCompleted)}/>
            <p className={isCompleted ? "strike":"unstriked"}>{item.todo}</p>
            <button onClick={ () => destroyTodo(index)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default TodoResults