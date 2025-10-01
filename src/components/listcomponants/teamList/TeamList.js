"use client";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import React from "react";
import styles from "./teams.module.css";
import TableSearch from "../../search/TableSearch";
import TeamBarCreate from "../../barcreate/TeamBarCreate";
import TableFooter from "../../tableElements/TableFooter";
import TeamTable from "../../tableElements/TeamTable";
import EmptyListMessage from "../../errorpages/EmptyListMessage";
export default function TeamList(props) {
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
      <div className={styles.page_heading}>Team List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <TableSearch
                  searchHandle={searchByTableFiled}
                  searchField="name"
                  placeholder="serach Team"
                />
              </div>
            </div>
          </div>
          <div className={styles.fillter_createBar_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <TeamBarCreate
                  inputPlaceholder="create new Team"
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
        {visibleRows.length > 0 ? (
          <TeamTable tableData={visibleRows} handelDeleteItem={handelDelete} />
        ) : (
          <EmptyListMessage message="No amenities yet — please create one to get started." />
        )}
      </div>
    </div>
  );
}
