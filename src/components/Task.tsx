import styles from './Task.module.css';

import { Trash,Circle, CheckCircle} from 'phosphor-react'
interface ITaskProps {
  task : ITask,
  onDeleteTask:(id:string)=>void,
}

export interface ITask {
  id : string;
  content: string;
  isDone: boolean;
}

export function Task({task,onDeleteTask}:ITaskProps){
  function handleOnDelete(){
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.task}>
      <button className={task.isDone ? styles.done : styles.notDone} >
        {task.isDone ? <CheckCircle  size={24} /> : <Circle size={24} /> }
      </button>
      <span  className={task.isDone ? styles.contentDone:styles.content}>{task.content}</span>
      <button onClick={handleOnDelete}>
        <Trash size={24} />
      </button>
    </div>
  )
}