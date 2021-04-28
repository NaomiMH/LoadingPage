import styles from "../styles/learnpage.module.css"

export default function LearnPage() {
  return (
    <div className={styles.mainLearn}>
        <figure className={styles.fig}>
            <img className={styles.img} src="GraficaCoaching.svg" />
        </figure>
        <div className={styles.middleDiv}>
            <h2 className={styles.mainH}>Aprende de un gestor profesional en activo a:</h2>
            <div className={styles.mainP}>
                <p>Conseguir mayor consistencia</p>
                <p>Diversificar tu cartera</p>
                <p>Tener una estrategia profesional</p>
            </div>
            <h2 className={styles.middleH}>Mediante:</h2>
            <div className={styles.mainP}>
                <p>Mercados de futuros</p>
                <p>Estacionalidad de las materias primas</p>
                <p>Spreads con materias primas</p>
            </div>
        </div>
    </div>
  )
}