import styles from '../css/Modal.module.css'

export default function Modal({largeImg, onClick}){
    
    return (
        <div className={styles["Overlay"]} onClick={onClick}>
            <div className={styles["Modal"]}>
                <img src={largeImg} alt="" />
            </div>
        </div>
    )
}