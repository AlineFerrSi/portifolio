import MainLink from '../../Componentes/MainLink/Index';
import styles from './Main.module.css'

export default function Main(){
    return (
        <div className={`${styles.main}`}>
            <nav>
                <MainLink to='/'>Inicio</MainLink>
                <MainLink to='/curriculo'>Curriculo</MainLink>
                <MainLink to='/projetos'>Projetos</MainLink>
                <MainLink to='/contato'>Contato</MainLink>
            </nav>
        </div>
    )
}