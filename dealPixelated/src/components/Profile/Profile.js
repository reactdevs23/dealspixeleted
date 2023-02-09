import React from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { profilePage } from "../../assets/images/images";
import styles from "./styles.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src={profilePage} alt="#" className={styles.image} />
      <div className={`${styles.profile} container`}>
        <ProfileInfo />
        <ProductDetails />
      </div>
    </div>
  );
};

export default Profile;
