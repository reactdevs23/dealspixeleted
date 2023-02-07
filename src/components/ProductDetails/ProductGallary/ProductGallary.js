import React from "react";
import {
  product1,
  product2,
  product3,
  fromthread,
} from "../../../assets/images/images";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./styles.module.css";
import "./style.css";

const ProductGallary = () => {
  const gallary = {
    thread: true,
    images: [
      {
        original: product1,
        thumbnail: product1,
      },
      {
        original: product2,
        thumbnail: product2,
      },
      {
        original: product3,
        thumbnail: product3,
      },
    ],
  };
  return (
    <div className={styles.imageGallary}>
      {gallary.thread && (
        <img src={fromthread} alt="#" className={styles.fromThread} />
      )}
      <ImageGallery items={gallary.images} />
    </div>
  );
};

export default ProductGallary;
