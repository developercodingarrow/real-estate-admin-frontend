"use client";
import React, { useState, useContext, useMemo } from "react";
import dynamicImport from "next/dynamic";
import styles from "./projectlist.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import ProjectListCard from "./ProjectListCard";
import ProjectFillterBar from "./ProjectFillterBar";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import TableFooter from "../../tableElements/TableFooter";
import TableSearch from "../../search/TableSearch";
import { deleteProjectWithImagesAction } from "@/src/app/utils/projectActions";
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

export default function ProjectList(props) {
  const { apiData } = props;

  const { handelOpenDeleteModel, idForDelete, handelCloseDeleteModel } =
    useContext(ModelsContext);
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  // 🔹 Keep local state of blogs

  const [projects, setprojects] = useState(apiData);

  const [filters, setFilters] = useState({
    propertyCategory: "commercial",
    lookingFor: "sell",
  });

  // Update filters from child
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredData = useMemo(() => {
    return projects.filter((item) => {
      return (
        (!filters.propertyCategory ||
          item.propertyCategory === filters.propertyCategory) &&
        (!filters.lookingFor || item.lookingFor === filters.lookingFor)
      );
    });
  }, [projects, filters]);

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
  } = useTableFillters(filteredData);

  const handelDeleteProject = async () => {
    try {
      setisBtnLoading(true);
      const res = await deleteProjectWithImagesAction(idForDelete);
      console.log("res---", res);
      if (res?.data?.status === "success") {
        // 🔹 Remove deleted blog from state
        setprojects((prev) => prev.filter((item) => item._id !== idForDelete));
        toast.success(res.data.message);
        // 🔹 Close modal
        handelCloseDeleteModel();
      }
      setisBtnLoading(false);
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  return (
    <div className={styles.main_conatiner}>
      <ToastContainer />
      <DeleteModel deletehandel={handelDeleteProject} />
      <div className={styles.page_heading}>Project List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <ProjectFillterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            totalCount={filteredData.length}
          />
          <TableSearch
            searchHandle={searchByTableFiled}
            searchField="title"
            placeholder="Enter project Title"
          />
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
        {visibleRows.length > 0 ? (
          visibleRows.map((item, index) => (
            <ProjectListCard key={index} dataList={item} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}
