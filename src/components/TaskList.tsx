import clipBoard from '../assets/clipboard.svg'

import {Task,ITask} from './Task'

import styles from './TaskList.module.css';

interface TaskProps {
  tasks : ITask[]
}

export function TaskList({tasks}:TaskProps){
  if(tasks.length === 0) 
  {
    return (
      <div className={styles.taskListEmpty}>
          <img src={clipBoard} alt="clipboard image when exist no tasks" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    )
  }else{
    return (
      <div className={styles.taskList}>
        {
          tasks.map(task =>{
            return (
              <Task
                key={task.content}
               task={task} 
               />
            )
          })  
        }
      </div>
    )
  }
  
}