"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "../builderlist/builderlist.module.css";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import TableSearch from "../../search/TableSearch";
import FillterBarCreate from "../../barcreate/FillterBarCreate";
import TableFooter from "../../tableElements/TableFooter";
import ListTable from "../../tableElements/ListTable";
import {
  createLocationAction,
  deleteLocationAction,
} from "@/src/app/utils/locationActions";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function LocationList(props) {
  const { apiData, slug } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [cityLocations, setcityLocations] = useState(apiData);

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
  } = useTableFillters(cityLocations);

  const handelCreateCityLocation = async (data) => {
    setisBtnLoading(true);
    const objData = {
      city: slug,
      name: data.name,
    };
    try {
      const response = await createLocationAction(objData);
      if (response.data.status === "success") {
        console.log(response.data.data);
        setcityLocations((prev) => [response.data.data, ...prev]);
        setisBtnLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  const handelDelete = async (id) => {
    try {
      const response = await deleteLocationAction({ _id: id }); // ✅ pass id in body
      if (response?.data?.status === "success") {
        // remove deleted builder instantly
        setcityLocations((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.main_conatiner}>
      <div className={styles.page_heading}>Citiy Location List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <TableSearch
              searchHandle={searchByTableFiled}
              searchField="name"
              placeholder="serach Location"
            />
          </div>
          <div>
            <FillterBarCreate
              inputPlaceholder="create new Location"
              handelCreate={handelCreateCityLocation}
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
        <ListTable tableData={visibleRows} handelDeleteItem={handelDelete} />
      </div>
    </div>
  );
}
