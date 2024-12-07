import MainLink from '../../Componentes/MainLink/Index';
import styles from './Main.module.css'

export default function Main(){
    return (
        <div className={`${styles.main}`}>
            <nav className={styles.containerMain}>
                <div><MainLink to='/'>Inicio</MainLink></div>
                <div className={styles.containerSecond}>
                    <MainLink to='/curriculo'>Curriculo</MainLink>
                    <MainLink to='/projetos'>Projetos</MainLink>
                    <MainLink to='/contato'>Contato</MainLink>
                </div>

            </nav>
        </div>
    )
}