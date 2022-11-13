import styles from './Task.module.css';

import {NewTask} from './NewTask'

export function Task(){
  return (
    <div>
      <NewTask />
      <article className={styles.task}>

      </article>
    </div>
  )
}

