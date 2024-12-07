import styles from "./Article.module.css"

export default function Article({year,title,university,city}) {
    return (
        <div className={styles.article}>
            <p>
                {year}
            </p>
            <div>
                <h2>{title}</h2>
                <p>{university}</p>
                <p>{city}</p>
            </div>
        </div>
    )
}