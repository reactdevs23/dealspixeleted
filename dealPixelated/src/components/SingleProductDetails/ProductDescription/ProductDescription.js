import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { dealhunder } from "../../../assets/images/images";
import { BsFillShareFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import styles from "./styles.module.css";
import Modal from "../../Modal/Modal";
import ShareComponent from "../../ShareComponent/ShareComponent";
import { useDataContext } from "../../context";

const ProductDescription = () => {
  const { bottom } = useDataContext();
  const [share, setShare] = useState(false);
  const [like, setLike] = useState(null);
  const likedOrNot = [
    <AiTwotoneLike className={styles.like} />,
    <AiTwotoneDislike className={styles.like} />,
  ];
  const keyFeature = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "Constructed with sturdy, high quality materials",
    "this Christmas decoration is built to bring holiday cheer for years to come.",
    "Cable length: 5.9",
    "Customizable RGB lighting",
    "Made from white sisal thread, these six, eight",
  ];
  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };
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
        <button
          className={styles.seeDetails}
          onClick={scrollToBottom}
          id="scroll-to-bottom"
        >
          See Details
        </button>
        <div className={styles.dealAndShare}>
          <div className={styles.deals}>
            <p className={styles.dealText}>Good deal?</p>
            {likedOrNot.map((el, i) => (
              <p
                onClick={() => setLike(i)}
                className={`${styles.likeContainer} ${
                  i === 0 && like === i && styles.liked
                }  ${i === 1 && like === i && styles.disLiked}`}
              >
                {el}
              </p>
            ))}
          </div>
          <div className={styles.share} onClick={() => setShare(true)}>
            <BsFillShareFill className={styles.like} />{" "}
            <span className={`${styles.dealtext} ${styles.shareText}`}>
              Share
            </span>
          </div>
        </div>{" "}
      </div>
      <div className={styles.dealHunter}>
        <Link to="/profile">
          <img src={dealhunder} alt="#" className={styles.profileImage} />
        </Link>
        <div className={styles.headingAndthanksBox}>
          <Link to="/profile">
            <h6 className={styles.heading}>
              basketballrhee | Staff posted this deal.
            </h6>
          </Link>

          <div className={styles.thanksBox}>
            {" "}
            <AiFillStar className={styles.star} /> Give Thanks
          </div>
        </div>
      </div>
      {share && (
        <Modal setModal={setShare}>
          <ShareComponent setShare={setShare} />
        </Modal>
      )}
    </div>
  );
};

export default ProductDescription;
