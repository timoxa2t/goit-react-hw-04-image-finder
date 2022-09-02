
import styles from "../css/ImageGalleryItem.module.css"

export default function ImageGalleryItem({smallImg, showBigImage, id}){

    return (
        <li 
            id={id}
            className={styles["ImageGalleryItem"]} 
            onClick={showBigImage}
        >
            <img className={styles["ImageGalleryItem-image"]} src={smallImg} alt="" />
        </li>
    )

} 