import styles from "./Body.module.css";
import mySelf from 'assets/imgfoto.png';
import Button from 'Componentes/Button/Index'

export default function Body(){

    return(
        <div className={styles.body}>
            <div className={styles.imgField}>
                <img
                    className={styles.containerImg}
                    alt="background of myself"
                    src={mySelf}
                ></img>
            </div>

            <div className={styles.info}>
                <h1>
                    <span>O</span>
                    <span>l</span>
                    <span>á</span>
                !</h1>
                <h2>Um Pouco Sobre Mim</h2>
                <p>
                    Sou programadora. Clique aqui para adicionar<br/> seu texto.
                    Sou um ótimo lugar para você contar<br/> a sua história e
                    compartilhar um pouco mais<br/> sobre você.
                </p>

                <div className={styles.containerButton}>
                   <Button to={'/curriculo'} backgroundColor={'#EEA302'}>Currículo</Button>
                   <Button to={'/projeto'} backgroundColor={'#FF3B25'}>Projetos</Button>
                   <Button to={'/contato'} backgroundColor={'#A4E0E2'}>Contato</Button>
                </div>
            </div>
        </div>
    )
}