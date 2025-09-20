"use client";
import React from "react";
import dynamicImport from "next/dynamic";
import styles from "./amenities.module.css";
import TableSearch from "../../search/TableSearch";
import FillterBarCreate from "../../barcreate/FillterBarCreate";
import TableFooter from "../../tableElements/TableFooter";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import AmenitiesTable from "../../tableElements/AmenitiesTable";
import AmanitiesBarCreate from "../../barcreate/AmanitiesBarCreate";
import ComponentLoading from "../../loading/ComponentLoading";
import EmptyListMessage from "../../errorpages/EmptyListMessage";

const DeleteModel = dynamicImport(() => import("../../models/DeleteModel"), {
  ssr: false, // ensures it only loads on client side
  loading: () => (
    <div className="dynimic_model_wrapper">
      <ComponentLoading />
    </div>
  ), // optional fallback
});
export default function AmenitiesList(props) {
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
      <div className={styles.page_heading}>Amanites List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <TableSearch
                  searchHandle={searchByTableFiled}
                  searchField="name"
                  placeholder="serach amenities"
                />
              </div>
            </div>
          </div>
          <div className={styles.fillter_createBar_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <AmanitiesBarCreate
                  inputPlaceholder="create new Amanities"
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
          <AmenitiesTable
            tableData={visibleRows}
            handelDeleteItem={handelDelete}
          />
        ) : (
          <EmptyListMessage message="No amenities yet — please create one to get started." />
        )}
      </div>
    </div>
  );
}
