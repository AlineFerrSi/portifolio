import styles from "./IconLanguage.module.css"


export default function IconLanguage({nameLanguage,span}){

    return(
        <div className={styles.icons}>
            <h1>{nameLanguage}</h1>
            <p>{span}</p>
        </div>
    )

}