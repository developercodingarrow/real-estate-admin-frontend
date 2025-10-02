"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./page.module.css";
import DataBackupBar from "@/src/components/backup/DataBackupBar";
import { jsonBackupAction } from "../../utils/backupActions";

export default function DataBackupWrapper() {
  const handleDownload = async (fileName, apiRoute) => {
    const result = await jsonBackupAction(apiRoute);
    if (!result.success) {
      console.error("Backup failed:", result.error);
      return;
    }

    // Decode base64 back into binary
    const byteCharacters = atob(result.base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/json" });

    const url = window.URL.createObjectURL(blob);

    // format filename
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}_${String(
      now.getHours()
    ).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}`;

    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}-${formattedDate}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.backupContainer}>
      <section className={styles.header_section}>
        <div className={styles.section_title}>Data Backup Dashboard</div>
        <div className={styles.section_descreption}>
          Manage your data with one-click backups. Download JSON files of your
          daily records to keep your information safe and accessible.
        </div>
      </section>
      <section className={styles.bars_wrapper}>
        <DataBackupBar
          backupnName="Enquire Backup"
          handleBackup={handleDownload}
          fileName="enquire-backup"
          apiRoute="downloadenquireBackup"
        />
        <DataBackupBar
          backupnName="City Backup"
          handleBackup={handleDownload}
          fileName="cities-backup"
          apiRoute="downloadCitiesBackup"
        />
        <DataBackupBar
          backupnName="Location Backup"
          handleBackup={handleDownload}
          fileName="location-backup"
          apiRoute="downloadLocationsBackup"
        />
        <DataBackupBar
          backupnName="Builders Backup"
          handleBackup={handleDownload}
          fileName="builders-backup"
          apiRoute="downloadBuildersBackup"
        />
        <DataBackupBar
          backupnName="Amenities Backup"
          handleBackup={handleDownload}
          fileName="amenities-backup"
          apiRoute="downloadAmenitiesBackup"
        />

        <DataBackupBar
          backupnName="Blogs Backup"
          handleBackup={handleDownload}
          fileName="blogs-backup"
          apiRoute="downloadBlogsBackup"
        />

        <DataBackupBar
          backupnName="Projects Backup"
          handleBackup={handleDownload}
          fileName="projects-backup"
          apiRoute="downloadProjectsBackupForRestore"
        />

        <DataBackupBar
          backupnName="Users Backup"
          handleBackup={handleDownload}
          fileName="users-backup"
          apiRoute="downloadUsersBackup"
        />
      </section>
    </div>
  );
}
