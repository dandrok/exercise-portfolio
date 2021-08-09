import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div>MY_BRAND</div>
        <div className={styles.menu}>
          <p>MENU</p>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
