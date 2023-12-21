
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const Todo = ({task,deleteTodo,editTodo }) => {

  

  return (
    <div className="Todo">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon 
          icon={faPenToSquare} 
          onClick={ () => editTodo(task.id)}
        />
        <FontAwesomeIcon 
          icon={faTrash} 
          onClick={ () => deleteTodo(task.id) }
          
        />
      </div>

    </div>
  )
}
