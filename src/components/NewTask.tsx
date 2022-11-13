import { PlusCircle} from 'phosphor-react'

import styles from './NewTask.module.css'

export function NewTask (){
  return (
    <form action="" className={styles.formNewTask}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button title='Criar uma nova tarefa'>
        Criar
        <PlusCircle  size={16} />  
      </button>
    </form>
  )
}