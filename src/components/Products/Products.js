import React from "react";
import styles from "./style.module.css";
import { products } from "../../assets/data/product";
import ProductItem from "../ProductItem/ProductItem";
import Header from "./Header/Header";

const Products = () => {
  return (
    <section className={styles.productsContainer}>
      <Header />
      <div className={styles.products}>
        {products.map((el, i) => (
          <ProductItem {...el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Products;
