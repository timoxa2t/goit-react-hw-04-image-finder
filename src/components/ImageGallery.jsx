import styles from "../css/ImageGallery.module.css"
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({showBigImage, images}){

    return (
        <ul className={styles.ImageGallery}>
            {images.map(({id, webformatURL}) => (
                <ImageGalleryItem key={id} smallImg={webformatURL} showBigImage={showBigImage} id={id}/>
            ))}
        </ul>
    )

} 