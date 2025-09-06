"use client";
import React, { useState, useMemo } from "react";
import styles from "./projectlist.module.css";
import tagBg from "../../../../public/web-img/tagbg.png";
import StaticprojectImg from "../../../../public/web-img/default-project-image.png";
import Image from "next/image";
import ProjectListCard from "./ProjectListCard";
import ProjectFillterBar from "./ProjectFillterBar";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import TableFooter from "../../tableElements/TableFooter";
import TableSearch from "../../search/TableSearch";
export default function ProjectList(props) {
  const { apiData } = props;
  const [filters, setFilters] = useState({
    propertyCategory: "commercial",
    lookingFor: "sell",
  });

  // Update filters from child
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredData = useMemo(() => {
    return apiData.filter((item) => {
      return (
        (!filters.propertyCategory ||
          item.propertyCategory === filters.propertyCategory) &&
        (!filters.lookingFor || item.lookingFor === filters.lookingFor)
      );
    });
  }, [apiData, filters]);

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

  return (
    <div className={styles.main_conatiner}>
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
