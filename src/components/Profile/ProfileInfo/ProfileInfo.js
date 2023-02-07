import React from "react";
import { BiChevronDown } from "react-icons/bi";
import {
  dealhunder,
  deals,
  vouchers,
  freebies,
  competions,
  comments,
  hearts,
  chatty,
  judge,
  hunter,
  finder,
} from "../../../assets/images/images";

import styles from "./styles.module.css";

const ProfileInfo = () => {
  const stats = [
    { icon: deals, text: "Deals Posted", number: 4458 },
    { icon: vouchers, text: "Vouchers", number: 4458 },
    { icon: freebies, text: "Freebies", number: 4458 },
    { icon: competions, text: "Competitions", number: 4458 },
    { icon: comments, text: "Comments", number: 5827 },
    { icon: hearts, text: "Hearts Given", number: 7348 },
  ];
  const badge = [
    { icon: chatty, title: "Level 6 Chatty", text: "Made 1500 Comments" },
    { icon: judge, title: "Level 6 Judge", text: "Voted 1500 times" },
    { icon: hunter, title: "Level 6 Deal Hunter", text: "Shared 1500 deals" },
    {
      icon: finder,
      title: "Level 2 Freebie Finder",
      text: "Shared 10 Freebies",
    },
  ];
  return (
    <div className={styles.profileInfoContainer}>
      <div className={styles.profileInfo}>
        <img src={dealhunder} alt="#" className={styles.profilePic} />

        <p className={styles.dealHunter}>Deal hunter</p>
        <p className={styles.name}>Basketballrhee Alex </p>

        <p className={`${styles.text} ${styles.about}`}>
          Deals Pixelated Staff Deal Hunter
        </p>
        <p className={`${styles.text} ${styles.about}`}>Joined Jan 2022 </p>
      </div>
      <div className={styles.statsBadge}>
        <div className={styles.box}>
          <div className={styles.titleContainer}>
            <h6 className={styles.title}>Stats</h6>
            <BiChevronDown className={styles.arrow} />
          </div>
          <div className={styles.achivement}>
            {stats.map((el, i) => (
              <div className={styles.iconTextAndNumber} key={i}>
                <div className={styles.iconAndText}>
                  <img src={el.icon} alt="#" className={styles.statsIcon} />
                  <p className={styles.text}>{el.text}</p>
                </div>
                <p className={styles.text}>
                  {el.number.toLocaleString("en-US")}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.titleContainer}>
            <h6 className={styles.title}>Badges</h6>
            <BiChevronDown className={styles.arrow} />
          </div>
          <div className={styles.achivement}>
            {badge.map((el, i) => (
              <div className={styles.iconTitleText} key={i}>
                <img src={el.icon} alt="#" className={styles.statsIcon} />
                <div className={styles.TitleAndText}>
                  <p className={styles.badgeTitle}>{el.title}</p>
                  <p className={styles.badgeText}>{el.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
