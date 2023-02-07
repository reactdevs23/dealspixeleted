import React from "react";
import { AiFillStar, AiTwotoneLike } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { MdInsertComment } from "react-icons/md";
import { dealhunder } from "../../../../../assets/images/images";
import styles from "./styles.module.css";
const AboutOp = () => {
  const details = [
    {
      icon: <AiFillStar className={styles.icon} />,
      text: "76 Reputation Points",
    },
    {
      icon: <HiShoppingBag className={styles.icon} />,
      text: "37 Deals Posted",
    },
    {
      icon: <MdInsertComment className={styles.icon} />,
      text: "45 Comments Posted",
    },
    {
      icon: <AiTwotoneLike className={styles.icon} />,
      text: "36 Votes Submitted",
    },
  ];
  return (
    <div className={styles.aboutOp}>
      <div className={styles.detailsInformation}>
        <h3 className={styles.title}>About the OP</h3>
        <div className={styles.details}>
          {details.map((el, i) => (
            <div className={styles.iconAndinfo} key={i}>
              {el.icon} <p className={styles.info}>{el.text}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className={styles.dealHunter}>
        <img src={dealhunder} alt="#" className={styles.profileImage} />{" "}
        <div className={styles.headingAndthanksBox}>
          {" "}
          <h6 className={styles.heading}>Basketballrhee | Staff </h6>{" "}
          <p className={`${styles.keyFeature} ${styles.joinDate}`}>
            Joined Jan 2022 Deals Pixelated Staff Deal Hunter{" "}
          </p>{" "}
          <div className={styles.thanksBox}>
            <AiFillStar className={styles.star} /> Give Thanks{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutOp;
