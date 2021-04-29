import styles from "../styles/storypage.module.css"

export default function StoryPage() {
  return (
    <div className={styles.mainStory}>
        <h2 className={styles.mainH}>Lo que dicen de mí</h2>
        <div className={styles.mainDiv}>
            <div className={styles.div1} />
            <div className={styles.div2} />
            <div className={styles.div2} />
        </div>
        <div className={styles.middleDiv}>
            <p className={styles.p1}>Cuando termine mis estudios en el BME, no tenía claro en qué rama de los mercados me quería especializar.</p>
            <p className={styles.p1}>Me habían llamado la atención los spreads pero no encontraba una formación de calidad a mi alcance. Tuve la oportunidad de conocer a Gregory gracias a Twitter y sin ninguna duda tuve mucha suerte en encontrarlo.</p>
            <p className={styles.p1}>Estoy muy agradecido ver poder formar parte de una comunidad alrededor de los mercados financieros y tener la experiencia de formarme con un gestor de fondos profesional y en activo.</p>
        </div>
        <div className={styles.endName}>
            <p className={styles.p1}>Pablo Ramos</p>
        </div>
        <div className={styles.endDiv}>
            <p className={styles.p1}>Estudiante BME (Bolsas y Mercados Españoles)</p>
        </div>
    </div>
  )
}