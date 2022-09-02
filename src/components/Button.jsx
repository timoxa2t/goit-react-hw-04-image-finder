
import styles from "../css/Button.module.css"
import PropTypes from "prop-types"

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

Button.propTypes = {
    onClick: PropTypes.func
}