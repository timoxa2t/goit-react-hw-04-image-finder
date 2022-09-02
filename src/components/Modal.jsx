import styles from '../css/Modal.module.css'
import PropTypes from "prop-types"

export default function Modal({largeImg, onClick}){
    
    return (
        <div className={styles["Overlay"]} onClick={onClick}>
            <div className={styles["Modal"]}>
                <img src={largeImg} alt="" />
            </div>
        </div>
    )
}

Modal.propTypes = {
    largeImg: PropTypes.string, 
    onClick: PropTypes.func
}