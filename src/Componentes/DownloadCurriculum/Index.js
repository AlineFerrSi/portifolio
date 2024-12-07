import styles from "./DownloadCurriculum.module.css";
import Button from "Componentes/Button/Index";

export default function DownloadCurriculum(){

   
    return(
        <a 
            href="/curriculo.pdf" // Caminho do ficheiro na pasta `public`
            download="Curriculo.pdf" // Nome do ficheiro ao baixar
        >
            <button className={styles.button}> Baixar Curriculum </button>
        </a>
    )
}