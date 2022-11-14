import styles from './Counter.module.css';

interface CounterProps {
  counter:number;
  isDone: boolean;
  total?: number;
}

export function Counter({counter = 0,isDone,total}:CounterProps){
  if(isDone){
    return (
      <div className={styles.counter}>
        <span>{counter} de {total}</span>
      </div>
    )
  }else { 
    return (
      <div className={styles.counter}>
        <span>{counter}</span>
      </div>
    )
  }
}