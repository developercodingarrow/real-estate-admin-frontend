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
import {
  deleteProjectWithImagesAction,
  isFeauredProjectAction,
  isPublishedProjectAction,
} from "@/src/app/utils/projectActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import ComponentLoading from "../../loading/ComponentLoading";
import NotDataFound from "../../errorpages/NotDataFound";
import EmptyListMessage from "../../errorpages/EmptyListMessage";

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
    propertyCategory: "residential",
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

      if (res?.status === "success") {
        // 🔹 Remove deleted blog from state
        setprojects((prev) => prev.filter((item) => item._id !== idForDelete));
        toast.success(res.message);
        // 🔹 Close modal
        handelCloseDeleteModel();
      }
      setisBtnLoading(false);
    } catch (error) {
      console.log("error--", error);
      setisBtnLoading(false);
    }
  };

  const handelIsFeaured = async (id) => {
    try {
      const res = await isFeauredProjectAction({ id });

      if (res.error) {
        toast.error(res.error);
        return;
      }
      if (res.status === "success") {
        toast.success(res.message);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelIsPublished = async (id) => {
    try {
      const res = await isPublishedProjectAction({ id });

      if (res.error) {
        toast.error(res.error);
        return;
      }
      if (res.status === "success") {
        toast.success(res.message);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main_conatiner}>
      <ToastContainer />
      <DeleteModel deletehandel={handelDeleteProject} />
      <div className={styles.page_heading}>Project List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.project_fillter_bar_wrapper}>
            <ProjectFillterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              totalCount={filteredData.length}
            />
          </div>
          <div className={styles.search_wrapper}>
            <TableSearch
              searchHandle={searchByTableFiled}
              searchField="title"
              placeholder="Enter project Title"
            />
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
          visibleRows.map((item, index) => (
            <ProjectListCard
              key={index}
              dataList={item}
              onToggleFeatured={handelIsFeaured}
              onToggleIsPublished={handelIsPublished}
            />
          ))
        ) : (
          <EmptyListMessage message="No projects found. Please create a project first." />
        )}
      </div>
    </div>
  );
}
