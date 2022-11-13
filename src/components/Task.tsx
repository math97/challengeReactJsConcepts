import styles from './Task.module.css';

import {NewTask} from './NewTask'
import {Counter} from './Counter'

export function Task(){
  return (
    <div>
      <NewTask />
      <article className={styles.tasks}>
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
        <div className='tasksList'>
          
        </div>
      </article>
    </div>
  )
}

