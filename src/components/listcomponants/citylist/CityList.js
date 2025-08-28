"use client";
import React from "react";
import styles from "../builderlist/builderlist.module.css";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import { citiesListData } from "@/src/jsonData/tabledata";
import TableFooter from "../../tableElements/TableFooter";
import ListTable from "../../tableElements/ListTable";
import ClickBtn from "../../elements/buttons/ClickBtn";
import TableSearch from "../../search/TableSearch";
import CityTable from "../../tableElements/CityTable";

export default function CityList() {
  const handelCreate = () => {};
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
  } = useTableFillters(citiesListData);
  return (
    <div className={styles.main_conatiner}>
      {" "}
      <div className={styles.page_heading}>Cities List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <TableSearch
              searchHandle={searchByTableFiled}
              searchField="cityName"
              placeholder="serach city"
            />
          </div>
          <div>
            <ClickBtn
              btnText="Add New City"
              size="medium"
              handelClick={handelCreate}
            />
          </div>
        </div>
        <div>
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
        <CityTable tableData={visibleRows} />
      </div>
    </div>
  );
}
