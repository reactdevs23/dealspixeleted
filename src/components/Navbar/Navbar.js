import React, { useState } from "react";
import {
  logo,
  searchIcon,
  notification,
  user,
} from "../../assets/images/images";
import PostDeal from "../PostDeal/PostDeal";
import styles from "./style.module.css";
const Navbar = () => {
  const [postDeal, setPostDeal] = useState(false);
  return (
    <section className={styles.navbarContainer}>
      <header className={styles.navbar}>
        <div className={styles.logoAndSearch}>
          <img src={logo} alt="#" className={styles.logo} />
          <div className={styles.searchContainer}>
            <img src={searchIcon} alt="#" />
            <input
              type="text"
              className={styles.search}
              placeholder="Women’s Deals"
            />
          </div>
        </div>
        <div className={styles.notificationAndUser}>
          <div className={styles.iconAndItem}>
            <img src={notification} alt="#" className={styles.icon} />
            <p className={styles.item}>Deal Alerts</p>
          </div>{" "}
          <div className={styles.iconAndItem}>
            <img src={user} alt="#" className={styles.icon} />
            <p className={styles.item}>Sign Up</p>
          </div>
          <button className={styles.button} onClick={() => setPostDeal(true)}>
            Post a Deal
          </button>
        </div>
      </header>
      {postDeal && <PostDeal setPostDeal={setPostDeal} />}
    </section>
  );
};

export default Navbar;
