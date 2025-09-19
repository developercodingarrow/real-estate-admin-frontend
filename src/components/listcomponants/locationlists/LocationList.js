import React from "react";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import styles from "./location.module.css";
import TableSearch from "../../search/TableSearch";
import DeleteModel from "../../models/DeleteModel";
import FillterBarCreate from "../../barcreate/FillterBarCreate";
import TableFooter from "../../tableElements/TableFooter";
import CityTable from "../../tableElements/CityTable";
import EmptyListMessage from "../../errorpages/EmptyListMessage";
import LocationTable from "../../tableElements/LocationTable";

export default function LocationList(props) {
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
      <div className={styles.page_heading}>Location List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <TableSearch
                  searchHandle={searchByTableFiled}
                  searchField="name"
                  placeholder="serach location"
                />
              </div>
            </div>
          </div>
          <div className={styles.fillter_createBar_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <FillterBarCreate
                  inputPlaceholder="create new location"
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
          <LocationTable
            tableData={visibleRows}
            handelDeleteItem={handelDelete}
          />
        ) : (
          <EmptyListMessage message="No Location yet — please create one to get started." />
        )}
      </div>
    </div>
  );
}
