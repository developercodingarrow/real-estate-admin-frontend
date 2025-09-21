"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./enquirelist.module.css";
import TableSearch from "../../search/TableSearch";
import FillterBarCreate from "../../barcreate/FillterBarCreate";
import TableFooter from "../../tableElements/TableFooter";
import EnquireTable from "../../tableElements/EnquireTable";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import BackupBar from "@/src/app/(tableList)/backupbar/BackupBar";
import * as XLSX from "xlsx";
import { AuthContext } from "@/src/_contextApi/authContext";
import { useRouter } from "next/navigation";

export default function EnquireList(props) {
  const router = useRouter();
  const { apiData } = props;
  const { authUser } = useContext(AuthContext);
  const useRole = authUser?.role;

  useEffect(() => {
    if (useRole !== "superAdmin") {
      router.replace("/"); // Redirect to home page
    }
  }, [useRole, router]);

  const handleExportExcel = () => {
    const transformedData = apiData.map((item) => ({
      name: item.name,
      email: item.email,
      mobile: item.mobileNumber,
      pageUrl: item.pageUrl,
      createdAt: item.createdAt,
      ipAddress: item.ipAddress || "N/A",
      userAgent: item.userAgent || "N/A",
    }));
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(transformedData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Backup");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

    // Use native download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `enquires-${new Date().toISOString()}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
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
  } = useTableFillters(apiData);

  const handleBackupJson = () => {
    window.location.href = "/api/v1/enquires/download-backup";
  };

  // If user is not superAdmin, nothing will render because of redirect
  if (useRole !== "superAdmin") {
    return null;
  }

  return (
    <div className={styles.main_conatiner}>
      {" "}
      <div className={styles.page_heading}>Enquire List</div>
      {useRole === "superAdmin" && (
        <div>
          <BackupBar
            onExportExcel={handleExportExcel}
            onBackupJson={handleBackupJson}
          />
        </div>
      )}
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <div className={styles.inner_wrraper}>
              <div className={styles.elemnet_wrapper}>
                <TableSearch
                  searchHandle={searchByTableFiled}
                  searchField="name"
                  placeholder="serach name"
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
        <EnquireTable tableData={visibleRows} />
      </div>
    </div>
  );
}
