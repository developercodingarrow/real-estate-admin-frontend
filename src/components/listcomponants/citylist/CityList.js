"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./citylist.module.css";
import dynamicImport from "next/dynamic";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import TableFooter from "../../tableElements/TableFooter";
import TableSearch from "../../search/TableSearch";
import CityTable from "../../tableElements/CityTable";
import FillterBarCreate from "../../barcreate/FillterBarCreate";
import ComponentLoading from "../../loading/ComponentLoading";
const DeleteModel = dynamicImport(() => import("../../models/DeleteModel"), {
  ssr: false, // ensures it only loads on client side
  loading: () => (
    <div className="dynimic_model_wrapper">
      <ComponentLoading />
    </div>
  ), // optional fallback
});

export default function CityList(props) {
  const { apiData, handelCreate, handelDelete } = props;

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
      <DeleteModel deletehandel={handelDelete} />{" "}
      <div className={styles.page_heading}>Cities List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <TableSearch
                  searchHandle={searchByTableFiled}
                  searchField="name"
                  placeholder="serach city"
                />
              </div>
            </div>
          </div>
          <div className={styles.fillter_createBar_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <FillterBarCreate
                  inputPlaceholder="create new city"
                  handelCreate={handelCreate}
                />
              </div>
            </div>
          </div>
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
        <CityTable tableData={visibleRows} handelDeleteItem={handelDelete} />
      </div>
    </div>
  );
}
