import styles from './Counter.module.css';

interface CounterProps {
  counter:number;
}

export function Counter({counter = 0}:CounterProps){
  return (
  <div className={styles.counter}>
    <span>{counter}</span>
  </div>
  )
}