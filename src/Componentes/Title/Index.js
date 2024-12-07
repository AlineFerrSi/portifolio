import { BsFillMortarboardFill } from "react-icons/bs";
import styles from "./Title.module.css"

export default function Title({titleH1,titleH2}) {
    return (
      
        <div className={styles.curriculum}>
            <section className={styles.containerTitle}>
                <h1>{titleH1}</h1>
                <div>
                    <BsFillMortarboardFill className={styles.icon} />
                    <h2>{titleH2}</h2>
                </div>
            </section>
        </div>

    )
}