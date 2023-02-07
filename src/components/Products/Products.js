import React, { useState } from "react";
import styles from "./style.module.css";
import { products } from "../../assets/data/product";
import ProductItem from "../ProductItem/ProductItem";
import Header from "./Header/Header";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import DropDownComponent from "./DropDownComponent/DropDownComponent";
import ToggleButton from "./Toggle/Toggle";

const Products = () => {
  const filteringData = [
    {
      title: "Category",
      items: ["category1", "category2", "category3", "category4"],
    },
    {
      title: "store",
      items: ["Apple", "Samsung", "Apple", "Apple"],
      color: "#E0001A",
    },
    {
      title: "community",
      items: ["category1", "category2", "category3", "category4"],
      color: "#E0001A",
    },
    {
      title: "brand",
      items: ["category1", "category2", "category3", "category4"],
      color: "#E0001A",
    },
    {
      title: "collection",
      items: ["category1", "category2", "category3", "category4"],
    },
    {
      title: "condition",
      items: ["category1", "category2", "category3", "category4"],
    },
    {
      title: "offerstatus",
      items: ["category1", "category2", "category3", "category4"],
    },
  ];
  const sorting = ["newest", "newesst", "newest"];
  const [sortDropDownOpen, setSortDropDownOpen] = useState(false);
  return (
    <section className={`${styles.productsContainer} `}>
      {" "}
      <Header />
      <div className="container">
        <div className={styles.dropdownAndToggle}>
          <div className={styles.dropDownContainer}>
            {filteringData.map((el, i) => (
              <DropDownComponent {...el} key={i} />
            ))}
          </div>
          <div className={styles.toggleContainer}>
            <ToggleButton text="Coupons" />
            <ToggleButton text="Top Offers " />
          </div>
        </div>
        <div className={styles.avialableAndShort}>
          <p className={styles.text}>3,908 products available</p>
          <div className={styles.sortingContainer}>
            <p className={styles.sortText}>
              Sort by{" "}
              <p
                className={styles.sort}
                onClick={() => setSortDropDownOpen((prev) => !prev)}
              >
                Newest <FiChevronDown className={styles.arrow} />
              </p>{" "}
            </p>
            {sortDropDownOpen && (
              <div className={styles.sortingItem}>
                {sorting.map((el, i) => (
                  <p key={i} className={styles.item}>
                    {el}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.products}>
          {products.map((el, i) => (
            <ProductItem {...el} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
