import styles from './Counter.module.css';
import { ITask } from './Task';

interface CounterProps {
  tasks:ITask[];
  isDone: boolean;
}

export function Counter({tasks = [],isDone}:CounterProps){
  const tasksDone = tasks.filter(task=>{
    if(task.isDone===true) return task;
  })
  
  if(isDone){
    return (
      <div className={styles.counter}>
        <span>{tasksDone.length} de {tasks.length}</span>
      </div>
    )
  }else { 
    return (
      <div className={styles.counter}>
        <span>{tasks.length}</span>
      </div>
    )
  }
}