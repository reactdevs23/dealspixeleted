import React from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { dealhunder } from "../../../assets/images/images";
import { BsFillShareFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import styles from "./styles.module.css";

const ProductDescription = () => {
  const keyFeature = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "Constructed with sturdy, high quality materials",
    "this Christmas decoration is built to bring holiday cheer for years to come.",
    "Cable length: 5.9",
    "Customizable RGB lighting",
    "Made from white sisal thread, these six, eight",
  ];
  return (
    <div>
      <h3 className={styles.title}>
        DANCELF Christmas Laser Lighted Gift Boxes
      </h3>
      <p className={styles.price}>
        Price <span className={styles.previousPrice}>£63.37</span>
      </p>
      <p className={styles.details}>
        <span className={styles.from}>Amazon.com [amazon.com]</span> has DANCELF
        Christmas Laser Lighted Gift Boxes on sale for{" "}
        <span className={styles.shipping}> $49.99. Shipping is free</span>
      </p>
      <div>
        <h4 className={styles.keyFeatureTitle}>Key Features</h4>
        <div className={styles.keyFeatures}>
          {keyFeature.map((el, i) => (
            <li key={i} className={styles.keyFeature}>
              {el}
            </li>
          ))}
        </div>
      </div>
      <div className={styles.detailsShareDeals}>
        <button className={styles.seeDetails}>See Details</button>
        <div className={styles.dealAndShare}>
          <div className={styles.deals}>
            <p className={styles.dealText}>Good deal?</p>
            <p className={styles.likeContainer}>
              <AiTwotoneLike className={styles.like} />
            </p>
            <p className={styles.likeContainer}>
              <AiTwotoneDislike className={styles.like} />
            </p>
          </div>
          <div className={styles.share}>
            <BsFillShareFill className={styles.like} />{" "}
            <span className={`${styles.dealtext} ${styles.shareText}`}>
              Share
            </span>
          </div>
        </div>{" "}
      </div>
      <div className={styles.dealHunter}>
        <img src={dealhunder} alt="#" className={styles.profileImage} />
        <div className={styles.headingAndthanksBox}>
          <h6 className={styles.heading}>
            basketballrhee | Staff posted this deal.
          </h6>

          <div className={styles.thanksBox}>
            {" "}
            <AiFillStar className={styles.star} /> Give Thanks
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
