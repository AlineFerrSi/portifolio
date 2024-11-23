import {Link, useLocation } from 'react-router-dom'
import styles from './MainLink.module.css'

export default function MainLink({to,children}){
     const localizacao = useLocation()
    return(
       
        <Link className={`
            ${styles.mainLink}
            ${localizacao.pathname === to ? styles.mainColorClick : ""}
            `}
            to={to}>{children}
        </Link>
        
    )
}



