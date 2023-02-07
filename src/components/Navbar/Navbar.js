import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <img src={logo} alt="#" className={styles.logo} />
          </Link>
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
          <Link to="/signup" className={styles.iconAndItem}>
            <img src={user} alt="#" className={styles.icon} />
            <p className={styles.item}>Sign Up</p>
          </Link>
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
