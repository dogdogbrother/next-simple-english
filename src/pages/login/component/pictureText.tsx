import styles from '../index.module.scss'

export function Aphorism() {
  return <div className={styles.aphorism}>
    <h4>Game of Thrones</h4>
    <p>leave one wolf alive and sheep are never safe.</p>
    <div  className={styles.zhpPhrase}>
      一狼尚存,羊群永无宁日
      <div>
        <span className={styles.person}>Arya Stark</span>
      </div>
    </div>
  </div>
}

export function Interaction() {
  return <div className={styles.interaction}>
    <ul>
      <li>About</li>
      <li>Contact us</li>
      <li>Join us</li>
    </ul>
  </div>
}