import IconLanguage from "Componentes/IconLanguage/Index";
import styles from "./Language.module.css";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaCss3, FaGithubSquare, FaFigma } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";

export default function Language() {
    return (
        <div className={styles.language}>
            <IconLanguage
                className={styles.containerIncons}
                nameLanguage="JavaScript"
                span={<SiJavascript />}
            />

            <IconLanguage
                className={styles.language}
                nameLanguage="React"
                span={<FaReact />}
            />

            <IconLanguage
                className={styles.language}
                nameLanguage="HTML"
                span={<ImHtmlFive />}
            />

            <IconLanguage
                className={styles.language}
                nameLanguage="Css"
                span={<FaCss3 />}
            />

            <IconLanguage
                className={styles.language}
                nameLanguage="Github"
                span={<FaGithubSquare />}
            />

            <IconLanguage
                className={styles.language}
                nameLanguage="Figma"
                span={<FaFigma />}
            />

        </div>
    )
}