import styles from "../styles/subscribepage.module.css"

export default function SubscribePage() {
  return (
    <div className={styles.mainSubscribe}>
        <p className={styles.mainP}>Comienza a aumentar tu probabilidad de éxito en el mercado de futuros</p>
        <input type="button" value="SUSCRÍBETE" className={styles.mainBtn} />
    </div>
  )
}