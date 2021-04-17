import Layout from '../components/Layout'
import styles from "../styles/index.module.css"
import Typewriter from 'react-simple-typewriter'

export default function Index() {
  return (
    <div>
      <Layout>
        <div className={styles.mainDiv}>
          <div className={styles.iniDiv}>
            <p className={styles.iniImg}>Logo</p>
            <p className={styles.iniP}>Coach de trading de materias primas</p>
          </div>
          <div className={styles.DivP}>
            <p className={styles.mainP}>TE ENSEÑO</p>
            <p className={styles.mainP}>
              <Typewriter
                typeSpeed={30}
                loop={true}
                deleteSpeed={40}
                delaySpeed={2000}
                words={[
                  "ESTRATEGIAS PARA TRIUNFAR",
                  "A OPERAR MATERIAS PRIMAS",
                  "LA ESTACIONALIDAD DEL MERCADO"
                  ]} />
            </p>
          </div>
          <div className={styles.middleDiv}>
            <p className={styles.middleP}>Únete a mi lista y no te pierdas las novedades acerca de mis programas de coaching para traders, podcasts y webinars</p>
          </div>
          <div className={styles.endDiv}>
            <form className={styles.form}>
              <input type="email" className={styles.email}/>
              <input type="button" value="QUIERO APRENDER" className={styles.btnemail}/>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}
