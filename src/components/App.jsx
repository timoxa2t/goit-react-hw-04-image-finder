import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "./Loader";

import {getImages, getNextPage} from "../services/pixabay"
import styles from '../css/App.module.css'
import { useState } from "react";



function findImg(images, id){
  console.log(images, id)
  return images.find(img => img.id === id)
}

export const App = () => {


  const [images, setImages] = useState([])
  const [showLoadMore, setShowLoadMore] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [chosenImg, setChosenImg] = useState({})



  const handleSearchClick = (evt) => {
    evt.preventDefault()
    const queryText = evt.target[1].value

    updateImages(getImages(queryText))
  }

  const updateImages = (imgPromise, previousImgs = []) => {
    setShowLoader(true)
    imgPromise.then(images => {

    setImages([...previousImgs, ...images.hits]) 
    setShowLoadMore(images.showLoadMore)
    setShowLoader(false)
    })
    .catch(err => console.log(err))
  }

  const handleLoadMore = () => {
    updateImages(getNextPage(), images)
  }

  const openModal = (evt) => {
    const img = findImg(images, parseInt(evt.currentTarget.id))
    setShowModal(true)
    setChosenImg(img)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className={styles.app}>
      <Searchbar 
        onSubmit={handleSearchClick}
      />
      <ImageGallery images={images} showBigImage={openModal}/>

      {showLoader && <Loader/>}

      {!showLoader && showLoadMore && <Button onClick={handleLoadMore}/>}

      {showModal && <Modal largeImg={chosenImg.largeImageURL} onClick={closeModal}/>}
    </div>
  );

};


