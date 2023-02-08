import React, { useState } from "react";
import Pagination from "react-js-pagination";
import styles from "./styles.module.css";

const Paginations = ({
  itemsPerPage,
  totalItemsCount,
  activePage,
  setActivePage,
}) => {
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div>
      <Pagination
        innerClass={styles.myPagination}
        prevPageText="Prev"
        nextPageText="Next"
        itemClass={styles.myPageNumber}
        activeClass={styles.activeMyPagenumber}
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default Paginations;
