"use client";
import React, { useState, useContext, useEffect } from "react";
import dynamicImport from "next/dynamic";
import styles from "./builderlist.module.css";
import ListTable from "../../tableElements/ListTable";
import TableSearch from "../../search/TableSearch";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import TableFooter from "../../tableElements/TableFooter";
import FillterBarCreate from "../../barcreate/FillterBarCreate";
import {
  createBuilderAction,
  deleteBuilderAction,
} from "@/src/app/utils/builderActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import ComponentLoading from "../../loading/ComponentLoading";

const DeleteModel = dynamicImport(() => import("../../models/DeleteModel"), {
  ssr: false, // ensures it only loads on client side
  loading: () => (
    <div className="dynimic_model_wrapper">
      <ComponentLoading />
    </div>
  ), // optional fallback
});

export default function BuilderList(props) {
  const { apiData } = props;
  const [builders, setBuilders] = useState(apiData);
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { idForDelete, handelCloseDeleteModel } = useContext(ModelsContext);

  const handelCreateBuilder = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await createBuilderAction(data);
      console.log(response);
      if (response.data.status === "success") {
        console.log(response.data.data);
        setBuilders((prev) => [response.data.data, ...prev]);
        setisBtnLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  const handelDelete = async () => {
    try {
      const response = await deleteBuilderAction({ _id: idForDelete }); // ✅ pass id in body
      if (response?.status === "success") {
        // remove deleted builder instantly
        setBuilders((prev) =>
          prev.filter((builder) => builder._id !== idForDelete)
        );
        handelCloseDeleteModel();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
  } = useTableFillters(builders);

  return (
    <div className={styles.main_conatiner}>
      <DeleteModel deletehandel={handelDelete} />{" "}
      <div className={styles.page_heading}>Builder List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <TableSearch
              searchHandle={searchByTableFiled}
              searchField="name"
              placeholder="serach builder"
            />
          </div>
          <div>
            <FillterBarCreate
              inputPlaceholder="create new builder"
              handelCreate={handelCreateBuilder}
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
