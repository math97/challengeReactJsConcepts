import styles from './Task.module.css';

import {NewTask} from './NewTask'
import {Counter} from './Counter'
import {TaskList} from './TaskList'
import { useState } from 'react';

export function Task(){

  const [tasks,setTasks] = useState([]);

  return (
    <div>
      <NewTask />
      <article className={styles.tasks}>
        <section className={styles.tasksHeader}>
          <div className={styles.info}>
            <div className={styles.created}>
              <span>Tarefas Criadas</span>
              <Counter counter={0} />
            </div>
            <div className={styles.done}>
              <span>Concluídas</span>
              <Counter counter={0}/>
            </div>
          </div>
        </section>
        <TaskList/>
      </article>
    </div>
  )
}

