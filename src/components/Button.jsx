
import styles from "../css/Button.module.css"

export default function Button({onClick}){

    return (
        <button 
            className={styles["Button"]} 
            onClick={onClick}
        >
            Load more
        </button>
    )

}