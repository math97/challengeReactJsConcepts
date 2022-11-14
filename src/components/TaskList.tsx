import clipBoard from '../assets/clipboard.svg'

import {Task,ITask} from './Task'

import styles from './TaskList.module.css';

// interface TaskProps {
//   tasks : Task[]
// }

// interface Task {
//   id : string;
//   content: string;
//   isDone: boolean;
// }

export function TaskList(){
  const tasks:ITask[] = [
    {
      id:'1',
      content:"hsagshgahashsashsagshgahashsashsagshgasasssasasaasasasaasassasasassasasasasassaasasasasasasassasas",
      isDone:false,
    },
    {
      id:'2',
      content:"testando",
      isDone:false,
    },
    {
      id:'3',
      content:"bora birl",
      isDone:true,
    }
  ]
  
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
              <Task task={task} />
            )
          })  
        }
      </div>
    )
  }
  
}