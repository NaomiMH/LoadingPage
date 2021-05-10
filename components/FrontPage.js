import styles from "../styles/frontpage.module.css"
import Typewriter from 'react-simple-typewriter'

export default function FrontPage() {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.iniDiv}>
            <figure className={styles.iniFig}>
            <img src="LogoSpreadgreg.svg" className={styles.iniImg} />
            <figcaption className={styles.iniFigCap}>Coach de trading de materias primas</figcaption>
            </figure>
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
        <div>
            {/* <!-- Begin Mailchimp Signup Form --> */}
            <div id="mc_embed_signup">
                <form action="https://gmail.us1.list-manage.com/subscribe/post?u=25e4b92583f7fb818436b0d16&amp;id=ac91c13f3f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" className={styles.endDiv} target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll" className={styles.form}>
                        <div class="mc-field-group" className={styles.mail2}>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" className={styles.email} />
                        </div>
                        <div id="mce-responses" class="clear">
                            <div class="response" id="mce-error-response" className={styles.hide}></div>
                            <div class="response" id="mce-success-response" className={styles.hide}></div>
                        </div>    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                        <div className={styles.mail1} aria-hidden="true"><input type="text" name="b_25e4b92583f7fb818436b0d16_ac91c13f3f" tabindex="-1" value="" /></div>
                        <div class="clear"  className={styles.mail3}><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" className={styles.btnemail} /></div>
                    </div>
                </form>
            </div>
            {/* <!--End mc_embed_signup--> */}
            {/* <form className={styles.form}>
            <input type="email" className={styles.email}/>
            <input type="button" value="QUIERO APRENDER" className={styles.btnemail}/>
            </form> */}
        </div>
    </div>
  )
}