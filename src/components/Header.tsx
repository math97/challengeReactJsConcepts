import rocketlogo from '../assets/rocketLogo.svg'

import styles from './Header.module.css';

export function Header(){
  return (
    <header className={styles.header}>
      <img src={rocketlogo} alt="logo do todo" />
      <strong>todo</strong>
    </header>
  )
}