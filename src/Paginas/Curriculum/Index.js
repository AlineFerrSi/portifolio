import styles from "./Curriculum.module.css"
import { BsFillMortarboardFill } from "react-icons/bs";
import Line from "Componentes/Line/Index";
import Article from "Componentes/Article/Index";
import Language from "Componentes/Language/Index";
import Title from "Componentes/Title/Index";
import DownloadCurriculum from "Componentes/DownloadCurriculum/Index";

export default function Curriculum() {
    return (
        <div className={styles.curriculum} >
            <div className={styles.academy}>
                <Title
                    className={styles.title}
                    titleH1="Currículo"
                    titleH2="Formações"
                />

                <section className={styles.containerContent}>

                    <Article
                        year="2022 - Em Andamento"
                        title="Analise e Desenvolvimento de Sistemas"
                        university="Universidade Anhembi Morumbi"
                        city="Piracicaba-sp"
                    />

                    <Article
                        year="2024 - Em Andamento"
                        title="Big Data e Inteligência Analítica"
                        university="Universidade Anhembi Morumbi"
                        city="Piracicaba-sp"
                    />

                    <DownloadCurriculum className={styles.buttonDownload} />

                </section>
                
            </div>
            
            <Line />

            <div className={styles.language}>
                <Title
                    titleH1="Linguagens"
                    titleH2="Habilidades em:"
                />
                <section className={styles.iconsLenguagem}>
                    <Language />
                </section>

            </div>
            

        </div>

    )
}