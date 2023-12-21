import React, { useState } from 'react'
import Alert from '@mui/material/Alert';


export const EditTodoForm = ({editTask, task}) => {
  
  const [value, setValue] = useState(task.task);
  const [showError, setShowError] = useState(false);

  const onHandleChange = (e) => {
    setValue(e.target.value);
    setShowError(false);
  }
  

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if(value.length <= 3){
      setShowError(true);   
      return;
    }
    //console.log(`Palabra Final: ${value}`);
    //Agregar al arreglo del todoWrapped
    editTask(value, task.id);
    setValue('');
  }

  return (

    <form
      className='TodoForm'
      onSubmit={onHandleSubmit}
    >
      <input 
        type="text" 
        className='todo-input'
        placeholder='Update your task'
        value={value}
        onChange={onHandleChange}
      />
      <button
        type='submit'
        className='todo-btn'
      >
        Update Task
      </button>
      {
        showError && (
          <div className='alert-container'>
            
            <Alert severity='error' className='alert'>
              ERROR - The task is too short ( min length: 4)
            </Alert>
          </div>
        )
      }
    </form>
    
  )
}
