import React, { useState } from "react";
import { sharedProduct, draftProduct } from "../../../assets/data/product";
import Paginations from "../../Pagination/Pagination";
import SingleProduct from "./SingleProduct/SingleProduct";
import styles from "./styles.module.css";

const ProductDetails = () => {
  const [draft, setDraft] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = draft
    ? draftProduct
    : sharedProduct.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
      <div className={styles.shareAndDraftContainer}>
        <p
          className={`${styles.shared} ${!draft && styles.tabs}`}
          onClick={() => setDraft(false)}
        >
          Shared
        </p>
        <p
          className={`${styles.draft} ${draft && styles.tabs}`}
          onClick={() => setDraft(true)}
        >
          Draft ({draftProduct.length})
        </p>
      </div>
      <div className={styles.products}>
        {currentItems.map((el, i) => (
          <SingleProduct index={i} {...el} key={i} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Paginations
          itemsPerPage={itemsPerPage}
          totalItemsCount={draft ? draftProduct.length : sharedProduct.length}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <p className={styles.pageNumberInfo}>
          Showing {indexOfFirstItem + 1} to {indexOfFirstItem + itemsPerPage} of{" "}
          {draft ? draftProduct.length : sharedProduct.length} ({" "}
          {draft
            ? Math.ceil(draftProduct.length / itemsPerPage)
            : Math.ceil(sharedProduct.length / itemsPerPage)}{" "}
          Pages)
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
