import React from "react";
import { AiFillLike } from "react-icons/ai";
import { like, comment, share } from "../../../../assets/images/images";
import styles from "./styles.module.css";

const SingleProduct = ({
  peopleLiked,
  time,
  discount,
  image,
  via,
  title,
  description,
  currentPrice,
  previousPrice,
  likeNumber,
  commentNumber,
  type,
  backgroundColor,
  color,
}) => {
  return (
    <>
      <div className={styles.productItem}>
        <div className={styles.header}>
          <div className={styles.profile}>
            <div className={styles.likeIconContainer}>
              <AiFillLike className={styles.likeIcon} />
            </div>
            <div className={styles.nameAndtime}>
              <p className={styles.numberOfLike}>
                {peopleLiked} people like this deal
              </p>
              <span className={styles.time}>{time} mins</span>
            </div>
          </div>
          {discount && (
            <img src={discount} alt="#" className={styles.discount} />
          )}
          {type && (
            <div
              className={styles.type}
              style={{ background: backgroundColor, color: color }}
            >
              <span>{type}</span>
            </div>
          )}
        </div>
        <img src={image} alt="#" className={styles.product} />
        <p className={styles.via}>
          Via <span className={styles.companyName}>{via}</span>
        </p>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceContainer}>
          <p className={styles.price}>${currentPrice} </p>
          <p className={styles.previousPrice}>£{previousPrice}</p>
        </div>
        <div className={styles.likeCommentShare}>
          <div className={styles.iconContainer}>
            <img src={like} alt="#" className={styles.like} />
            <span className={styles.likeNumber}>{likeNumber}</span>
          </div>{" "}
          <div className={styles.iconContainer}>
            <img src={comment} alt="#" className={styles.like} />
            <span className={styles.likeNumber}>{commentNumber}</span>
          </div>
          <img src={share} alt="#" className={styles.like} />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
