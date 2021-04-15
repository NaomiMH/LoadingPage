import Layout from '../components/Layout'
import styles from "../styles/index.module.css"
import Typewriter from 'react-simple-typewriter'

export default function Index() {
  return (
    <div>
      <Layout>
        <div className={styles.mainDiv}>
          <div>
            <p className={styles.mainP}>
              <Typewriter
                typeSpeed={70}
                loop={true}
                deleteSpeed={40}
                delaySpeed={2000}
                words={[
                  "Bienvenidos al curso de spreads con Gregory Placsintar",
                  "Donde aprenderás a diversificar y tomar ventaja de las materias primas",
                  "Aprende de un gestor profesional con Track Record"
                  ]} />
            </p>
          </div>
          <div className={styles.middleDiv}>
            <p className={styles.middleP}>Inscribete ahora mismo</p>
          </div>
          <div className={styles.endDiv}>
            <form className={styles.form}>
              <input type="email" className={styles.email}/>
              <label className={styles.txtemail}>E-mail</label>
              <input type="button" value="SIGN UP" className={styles.btnemail}/>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}
