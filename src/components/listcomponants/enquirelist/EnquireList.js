"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./enquirelist.module.css";
import TableSearch from "../../search/TableSearch";
import FillterBarCreate from "../../barcreate/FillterBarCreate";
import TableFooter from "../../tableElements/TableFooter";
import EnquireTable from "../../tableElements/EnquireTable";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";

export default function EnquireList(props) {
  const { apiData } = props;

  const {
    totalRows,
    currentPage,
    rowsPerPage,
    visibleRows,
    visibleRange,
    nextPage,
    prevPage,
    handleRowsPerPageChange,
    searchByTableFiled,
  } = useTableFillters(apiData);

  return (
    <div className={styles.main_conatiner}>
      {" "}
      <div className={styles.page_heading}>Enquire List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <TableSearch
                  searchHandle={searchByTableFiled}
                  searchField="name"
                  placeholder="serach name"
                />
              </div>
            </div>
          </div>
          {/* <div className={styles.fillter_createBar_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <FillterBarCreate
                  inputPlaceholder="create new city"
                  handelCreate={handelCreate}
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles.fillter_right_column}>
          <TableFooter
            totalRows={totalRows}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            visibleRange={visibleRange}
            handelNextPage={nextPage}
            handelPrevPage={prevPage}
            handelRowChange={handleRowsPerPageChange}
          />
        </div>
      </div>
      <div className={styles.table_wrapper}>
        <EnquireTable tableData={visibleRows} />
      </div>
    </div>
  );
}
