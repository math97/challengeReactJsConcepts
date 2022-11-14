import { PlusCircle} from 'phosphor-react'
import { FormEvent } from 'react';

import styles from './NewTask.module.css'
import { ITask } from './Task';

interface INewTaskProps {
  onCreateNewTask : (task:ITask) => void; 
}

export function NewTask ({onCreateNewTask}:INewTaskProps){
  function handleCreateNewTask(event:FormEvent){
    event?.preventDefault();
    const task = {
      id:'2',
      content:'terminar o css',
      isDone:false,
    }
    onCreateNewTask(task)
  }
  return (
    <form  onSubmit={handleCreateNewTask} className={styles.formNewTask}>
      <input name='task' type="text" placeholder='Adicione uma nova tarefa'/>
      <button  type="submit" title='Criar uma nova tarefa'>
        Criar
        <PlusCircle  size={16} />  
      </button>
    </form>
  )
}