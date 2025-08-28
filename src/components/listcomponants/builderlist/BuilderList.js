"use client";
import React from "react";
import styles from "./builderlist.module.css";
import ListTable from "../../tableElements/ListTable";
import TableSearch from "../../search/TableSearch";
import ClickBtn from "../../elements/buttons/ClickBtn";
import { builderList } from "@/src/jsonData/tabledata";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import TableFooter from "../../tableElements/TableFooter";

export default function BuilderList() {
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
  } = useTableFillters(builderList);

  return (
    <div className={styles.main_conatiner}>
      {" "}
      <div className={styles.page_heading}>Builder List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <TableSearch
              searchHandle={searchByTableFiled}
              searchField="buliderName"
              placeholder="serach builder"
            />
          </div>
          <div>
            <ClickBtn
              btnText="Create Builder"
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
        <ListTable tableData={visibleRows} />
      </div>
    </div>
  );
}
