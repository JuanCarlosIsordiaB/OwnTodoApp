import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapped = () => {

  const [todos, setTodos] = useState([]);

  const onAddTodo = ( todo ) => {
    setTodos(
      [
        ...todos,
        {
          task:todo,
          id: Date.now(),
          isEditing: false,
          completed: false
        }
      ]
    )
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter( todo => 
        todo.id !== id  
      )
    )
  }

  const editTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id
          ? {...todo, isEditing: !todo.isEditing}
          : todo
      )
    )

  }

  const editTask = (task, id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id
         ? {...todo, task, isEditing: !todo.isEditing}
         : todo
      )
    )

  }


  return(
    <div className='TodoWrapper'>
      <TodoForm onAddTodo={onAddTodo}/>
      {
        todos.map((todo, index) => (
            todo.isEditing ? (
              <EditTodoForm editTask={editTask} task={todo}/>
            ) : (
            <Todo 
              task={todo} 
              key={index} 
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        ))
      }

    </div>
  )
}
