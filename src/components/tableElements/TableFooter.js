import React from "react";
import styles from "./tablefooter.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "../ApplicationIcons";
export default function TableFooter(props) {
  const {
    totalRows,
    currentPage,
    rowsPerPage,
    visibleRange,
    handelNextPage,
    handelPrevPage,
    handelRowChange,
  } = props;
  return (
    <div className={styles.tableFooter_main_container}>
      <div className={styles.tableFooter_inner_container}>
        <div className={styles.rowPerPage_wrapper}>
          <div className={styles.footer_text}>Row Per Page</div>
          <div>
            <select onChange={handelRowChange}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div className={styles.footer_pageNumber_wrapper}>
          <span>{visibleRange.start}</span>
          <span>-</span>
          <span>{visibleRange.end}</span>
          <span>of</span>
          <span>{totalRows}</span>
        </div>
        <div className={styles.navigation_arrow_wrapper}>
          <div className={styles.iconBox}>
            <button
              onClick={handelPrevPage}
              disabled={currentPage === 1}
              className={styles.arrow_btn}
            >
              <IoIosArrowBack />
            </button>
          </div>
          <div className={styles.iconBox}>
            <button
              onClick={handelNextPage}
              disabled={currentPage >= Math.ceil(totalRows / rowsPerPage)}
              className={styles.arrow_btn}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
