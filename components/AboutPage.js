import styles from "../styles/aboutpage.module.css"

export default function AboutPage() {
  return (
    <div className={styles.mainAbout}>
        <div className={styles.mainDiv}>
            <div>
                <h2 className={styles.mainH}>Sobre mí</h2>
                <p className={styles.mainP}>He empezado a operar como algunos de vosotros en 1999. Hoy, soy un gestor auditado con track record desde 2009 en USA y asesor del fondo de inversión Seasonal Quant Multistrategy (Andbank). Especialista en mercados de deribados de materias primas y padre full-time de Anna 5 y Mark 2 donde las estrategias tienen fecha de caducidad.</p>
            </div>
            <div className={styles.middleDiv}>
                <input type="button" value="ESCUCHA MI PODCAST" className={styles.btnPod} />
                <figure className={styles.svgFig}>
                    <img src="Twitter.svg" />
                </figure>
                <figure className={styles.svgFig}>
                    <img src="LinedIN.svg" />
                </figure>
            </div>
            <div className={styles.endDiv}>
                <figure className="{styles.svgFig}">
                    <img src="logo-nfa.png" />
                </figure>
                <figure className="{styles.svgFig}">
                    <img src="Logo-CFTC.png" />
                </figure>
                <p className={styles.endP}>ISIN ESO131462097</p>
            </div>
        </div>
    </div>
  )
}