import styles from './Body.module.css';

import {NewTask} from './NewTask'
import {Counter} from './Counter'
import {TaskList} from './TaskList'
import { useState } from 'react';

export function Body(){

  const [tasks,setTasks] = useState([]);

  return (
    <div>
      <NewTask />
      <article className={styles.tasks}>
        <section className={styles.tasksHeader}>
          <div className={styles.info}>
            <div className={styles.created}>
              <span>Tarefas Criadas</span>
              <Counter isDone={false} counter={0} />
            </div>
            <div className={styles.done}>
              <span>Concluídas</span>
              <Counter isDone={true} total={3} counter={1}/>
            </div>
          </div>
        </section>
        <TaskList/>
      </article>
    </div>
  )
}

