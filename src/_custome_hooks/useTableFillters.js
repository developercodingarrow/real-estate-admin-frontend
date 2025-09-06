"use client";
import { useState, useEffect, useMemo, useCallback, useContext } from "react";
import { FillterContext } from "../_contextApi/FillterContextProvider";

export default function useTableFillters(
  initialRows,
  initialRowsPerPage = 100
) {
  const { visibleRows, setvisibleRows } = useContext(FillterContext);
  const totalRows = initialRows?.length ?? 0;
  const [currentPage, setcurrentPage] = useState(1);
  const [rowsPerPage, setrowsPerPage] = useState(initialRowsPerPage);

  const [visibleRange, setVisibleRange] = useState({
    start: 1,
    end: rowsPerPage,
  });

  useEffect(() => {
    // Update visible rows when page or rowsPerPage changes
    updateVisibleRows(initialRows);
  }, [currentPage, rowsPerPage, initialRows]);

  const searchByTableFiled = (searchTerm, field) => {
    if (!searchTerm) {
      updateVisibleRows(initialRows);
    }

    let filteredData;
    filteredData = initialRows.filter((item) => {
      if (
        item[field] &&
        item[field].toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    updateVisibleRows(filteredData);
  };

  const handleRowsPerPageChange = (e) => {
    const selectedRowsPerPage = Number(e.target.value);
    setrowsPerPage(selectedRowsPerPage);
    setcurrentPage(1); // Reset to first page when changing rows per page
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(totalRows / rowsPerPage)) {
      setcurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const updateVisibleRows = (data) => {
    let rowsToDisplay = data || initialRows; // Use sorted data if available
    let startpageIndex = (currentPage - 1) * rowsPerPage;
    const endPageIndex = currentPage * rowsPerPage;
    const updatedVisibleRows = rowsToDisplay.slice(
      startpageIndex,
      endPageIndex
    );
    setvisibleRows(updatedVisibleRows);
    setVisibleRange({
      start: startpageIndex + 1,
      end: Math.min(endPageIndex, totalRows), // Ensure end is within total rows
    });
  };
  return {
    visibleRows,
    setvisibleRows,
    totalRows,
    currentPage,
    rowsPerPage,
    visibleRange,
    nextPage,
    prevPage,
    searchByTableFiled,
    handleRowsPerPageChange,
  };
}
