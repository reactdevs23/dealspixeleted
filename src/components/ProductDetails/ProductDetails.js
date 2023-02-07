import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data/product";
import { dealscore, view } from "../../assets/images/images";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import ProductGallary from "./ProductGallary/ProductGallary";
import ProductDescription from "./ProductDescription/ProductDescription";
import styles from "./styles.module.css";
import AboutQuestionDescriptionReviewsTab from "./AboutQuestionDescriptionReviewsTab/AboutQuestionDescriptionReviewsTab";

export const ProductDetails = ({
  date = "12-23-2022",
  time = "10:14",
  by = "basketballrhee",
  position = "Staff",
  dealsscore = "7",
  views = 1239,
  comments = "4",
}) => {
  const { id } = useParams();
  return (
    <>
      <section className="container">
        <p className={styles.link}>
          <AiFillHome className={styles.home} /> / Home /{" "}
          {products[id - 1].title}
        </p>
        <div className={styles.createAtContainer}>
          <p className={styles.text}>
            Created {date} at {time} AM by {by} | {position}
          </p>
          <div className={styles.details}>
            <div className={styles.box}>
              <img src={dealscore} alt="#" className={styles.icon} />
              <span className={styles.text}>Deal Score </span>
              <span className={styles.circle}>+{dealsscore}</span>
            </div>
            <div className={styles.box}>
              <img src={view} alt="#" className={styles.icon} />
              <span className={styles.text}>
                {views.toLocaleString("en-US")} Views{" "}
              </span>
            </div>{" "}
            <div className={styles.box}>
              <MdOutlineMessage className={styles.comment} />

              <span className={styles.text}>{comments} Comments </span>
            </div>
          </div>
        </div>
        <div className={styles.gallaryAndDetails}>
          <ProductGallary />
          <ProductDescription />
        </div>
      </section>

      <AboutQuestionDescriptionReviewsTab />
    </>
  );
};
