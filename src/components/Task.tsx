import styles from './Task.module.css';

import { Trash,Circle, CheckCircle} from 'phosphor-react'


interface ITaskProps {
  task : ITask
}

export interface ITask {
  id : string;
  content: string;
  isDone: boolean;
}

export function Task({task}:ITaskProps){
  return (
    <div className={styles.task}>
      <button className={task.isDone ? styles.done : styles.notDone} >
        {task.isDone ? <CheckCircle size={24} /> : <Circle size={24} /> }
      </button>
      <span  className={styles.content}>{task.content}</span>
      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}