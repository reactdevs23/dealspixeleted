import React from "react";
import { hunterProducts } from "../../../assets/data/product";
import SingleProduct from "./SingleProduct/SingleProduct";
import styles from "./styles.module.css";

const ProductDetails = () => {
  return (
    <div>
      <div className={styles.shareAndDraftContainer}>
        <p className={styles.shared}>Shared</p>
        <p className={styles.draft}>Draft (34)</p>
      </div>
      <div className={styles.products}>
        {hunterProducts.map((el, i) => (
          <SingleProduct {...el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
