import { Link } from "react-router-dom"
import styles from "./Button.module.css"

export default function Button({children,backgroundColor,to}){
    // const localizacao = useLocation()
    
    return(
        <Link to={to}>
            <button
                className={`${styles.button}`}
                style={{ backgroundColor: backgroundColor }}
            >{children}</button>
        </Link>
     
    )
    
}