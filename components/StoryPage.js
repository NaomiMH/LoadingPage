import styles from "../styles/storypage.module.css"

export default function StoryPage() {
  return (
    <div className={styles.mainStory}>
        <h2 className={styles.mainH}>Lo que dicen de mí</h2>
        <div className={styles.mainDiv}>
            <div className={styles.div1} />
            <div className={styles.div2} />
            <div className={styles.div3} />
        </div>
        <div className={styles.divShift}>
            <div className={styles.divChild}>
                <div className={styles.middleDiv}>
                    <p>Cuando termine mis estudios en el BME, no tenía claro en qué rama de los mercados me quería especializar.</p>
                    <p>Me habían llamado la atención los spreads pero no encontraba una formación de calidad a mi alcance. Tuve la oportunidad de conocer a Gregory gracias a Twitter y sin ninguna duda tuve mucha suerte en encontrarlo.</p>
                    <p>Estoy muy agradecido ver poder formar parte de una comunidad alrededor de los mercados financieros y tener la experiencia de formarme con un gestor de fondos profesional y en activo.</p>
                </div>
                <div className={styles.endName}>
                    <p>Pablo Ramos</p>
                </div>
                <div className={styles.endDiv}>
                    <p>Estudiante BME (Bolsas y Mercados Españoles)</p>
                </div>
            </div>
            <div className={styles.divChild}>
                <div className={styles.middleDiv}>
                    <p>Con Gregory conseguí un acercamiento al mercado de materias primas riguroso y profesional, que me ha permitido operar futuros con una probabilidad de éxito mayor. Durante varios años he utilizado los conocimientos adquiridos y he ido añadiendo experiencia, que es fundamental para tener una actitud positiva ante el mercado.</p>
                    <p>La preparación mental, los datos estadísticos, los datos fundamentales y los estacionales, están ahora presentes en todo momento en mi operativa y permiten afrontar el mercado con ciertas ventajas. Aunque se afrontan con frecuencia periodos de drawdown muy irritantes, diversificando y abordando la operativa con rigor se obtiene cosistencia a largo plazo.</p>
                    <p>Aprender con Greg y operar junto a él durante años ha sido un punto de inflexión a mejor visto ya en restropectiva.</p>
                </div>
                <div className={styles.endName}>
                    <p>Jose Rios</p>
                </div>
                <div className={styles.endDiv}>
                    <p>Empleado IT Universidad Alcalá</p>
                </div>
            </div>
            <div className={styles.divChild}>
                <div className={styles.middleDiv}>
                    <p>Conocí a Gregory como Optiongreg por sus posts sobre opciones y spreads. Tenía alguna noción sobre opciones pero no sabía qué era eso de los futuros de materias primas.</p>
                    <p>Seguí estudiando su cartera modelo y su evolución... con sus aciertos y sus fallos... pero muy próximo a la realidad de una cartera pequeña que manejaba Greg. Fueron dos llamadas de teléfono y me apunté a su formación. Como todo, tiene su curva de aprendizaje, pero esto fue en 2010 y aquí seguimos sobreviviendo a los mercados... Como dice Greg, lo importante es la esperanza matématica positiva y que las malas rachas no destrocen lo que vas recogiendo poco a poco... yo no vivo de los mercados pero con estas herramientas he conseguido aumentar la rentabilidad de mis ahorros mucho más de lo que yo esperaba.</p>
                </div>
                <div className={styles.endName}>
                    <p>Ruben Ochoa</p>
                </div>
                <div className={styles.endDiv}>
                    <p>Ingeniero de Telecomunicación - Administraciones Públicas</p>
                </div>
            </div>
        </div>
    </div>
  )
}