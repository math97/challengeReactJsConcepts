import clipBoard from '../assets/clipboard.svg'

import styles from './TaskList.module.css';

interface TaskProps {
  tasks : Task[]
}

interface Task {
  id : string;
  title: string;
  content: string
}

export function TaskList(){
  const tasks = []
  
  if(tasks.length === 0) return (
    <div className={styles.taskListEmpty}>
        <img src={clipBoard} alt="clipboard image when exist no tasks" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
  
  return (
    <p>tem task</p>
  )
}