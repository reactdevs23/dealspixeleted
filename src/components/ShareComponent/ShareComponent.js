import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { BiLink } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import {
  messenger,
  whatsapp,
  instagram,
  twitter,
} from "../../assets/images/images";
import styles from "./styles.module.css";

const ShareComponent = () => {
  const [modal, setModal] = useState(false);
  const socials = [
    { icon: messenger, text: "Messenger", to: "#" },
    { icon: whatsapp, text: "WhatsApp", to: "#" },
    { icon: instagram, text: "Instagram", to: "#" },
    { icon: twitter, text: "Twittter", to: "#" },
  ];
  return (
    <div className={styles.shareContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Share</h2>
        <TfiClose
          className={styles.close}
          onClick={() => setModal((prev) => !prev)}
        />
      </div>
      <div className={styles.form}>
        <h5 className={styles.heading}>Share to</h5>
        <div className={styles.socialContainer}>
          {socials.map((el, i) => (
            <div className={styles.socials} key={i}>
              <a
                href="#/"
                target="#"
                rel="noreferrer"
                className={styles.iconContainer}
              >
                <img src={el.icon} alt="#" className={styles.icon} />
              </a>
              <p className={styles.text}>{el.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.copyMoreOption}>
          <div className={styles.copyContainer}>
            <BiLink className={styles.link} />
            <p className={styles.text}>Copy Link</p>
          </div>
          <div className={styles.copyContainer}>
            <AiOutlineShareAlt className={styles.link} />
            <p className={styles.text}>More Option</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareComponent;
