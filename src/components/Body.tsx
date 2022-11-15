import styles from './Body.module.css';

import {NewTask} from './NewTask'
import {Counter} from './Counter'
import {TaskList} from './TaskList'
import { useState } from 'react';
import { ITask } from './Task';

export function Body(){

  const [tasks,setTasks] = useState([
    {
      id:'1',
      content:'terminar a estrutura html',
      isDone:false,
    }
  ]);

  function createNewTask(task:ITask){
    setTasks([...tasks,task])
  }
  
  function deleteTask(id:string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    })
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <NewTask onCreateNewTask={createNewTask} />
      <article className={styles.tasks}>
        <section className={styles.tasksHeader}>
          <div className={styles.info}>
            <div className={styles.created}>
              <span>Tarefas Criadas</span>
              <Counter isDone={false} tasks={tasks} />
            </div>
            <div className={styles.done}>
              <span>Concluídas</span>
              <Counter isDone={true} tasks={tasks}/>
            </div>
          </div>
        </section>
        <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
      </article>
    </div>
  )
}

