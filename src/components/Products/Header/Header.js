import React from "react";
import { womendeals } from "../../../assets/images/images";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.header}>
        <img src={womendeals} alt="#" className={styles.image} />
        <div className={styles.titleAndtext}>
          <h1 className={styles.title}>Women's Deals</h1>
          <p className={styles.text}>
            Women Sale, Voucher Codes & Offers in December 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
