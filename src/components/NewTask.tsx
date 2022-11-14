import { PlusCircle} from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './NewTask.module.css'
import { ITask } from './Task';

interface INewTaskProps {
  onCreateNewTask : (task:ITask) => void; 
}

export function NewTask ({onCreateNewTask}:INewTaskProps){


  const [input,setInput ] = useState('')

  function handleCreateNewTask(event:FormEvent){
    event?.preventDefault();
    const task = {
      id:uuidv4(),
      content:input,
      isDone:false,
    }
    onCreateNewTask(task)
    setInput('')
  }

  function handleInputChange(event:ChangeEvent<HTMLInputElement>){
    setInput(event.target.value)
  }

  return (
    <form  onSubmit={handleCreateNewTask} className={styles.formNewTask}>
      <input
        name='task'
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={input}
        onChange={handleInputChange}
      />
      <button  type="submit" title='Criar uma nova tarefa'>
        Criar
        <PlusCircle  size={16} />  
      </button>
    </form>
  )
}