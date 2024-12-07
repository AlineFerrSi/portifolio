import Line from "Componentes/Line/Index";
import styles from "./Footer.module.css"
import { FaLinkedinIn, FaGithub} from "react-icons/fa";

export default function Footer(){
    return(
        <div className={styles.footer}>
            <Line />
            <div className={styles.footerContact}>
                <section>
                    <h2>Telefone</h2>
                    <p>{`(19) 99163-4857`}</p>
                </section>

                <section>
                    <h2>Email</h2>
                    <p>aline.ferreira.dasilva0000@gmail.com</p>
                </section>

                <section className={styles.contactNetworks}>
                    <h2>Me Siga</h2>
                    <div>
                        <p><a href="https://www.linkedin.com/in/aline-ferreira0000/" target="_blank"><FaLinkedinIn /></a></p>
                        <p><a href="https://github.com/AlineFerrSi" target="_blank"><FaGithub /></a></p>
                    </div>
                </section>

            </div>
        </div>
    )
}