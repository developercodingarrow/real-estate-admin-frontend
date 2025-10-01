"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./page.module.css";
import { FiDownload, FiDatabase } from "react-icons/fi"; // icons for flair
import DataBackupBar from "@/src/components/backup/DataBackupBar";

export default function DataBackupWrapper() {
  const handleBackup = async (fileName, apiRoute) => {
    try {
      const response = await fetch(`/api/${apiRoute}`, { method: "GET" });
      if (!response.ok) throw new Error("Failed to fetch backup");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // format date & time
      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}_${String(
        now.getHours()
      ).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}`;

      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}-${formattedDate}.json`; // filename with date & time;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("❌ Error downloading backup:", err);
    }
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
          handleBackup={handleBackup}
          fileName="enquire-backup"
          apiRoute="enquirebackup"
        />
        <DataBackupBar
          backupnName="City Backup"
          handleBackup={handleBackup}
          fileName="cities-backup"
          apiRoute="citybackup"
        />
        <DataBackupBar
          backupnName="Location Backup"
          handleBackup={handleBackup}
          fileName="location-backup"
          apiRoute="locationbackup"
        />
        <DataBackupBar
          backupnName="Builders Backup"
          handleBackup={handleBackup}
          fileName="builders-backup"
          apiRoute="buildersbackup"
        />
        <DataBackupBar
          backupnName="Amenities Backup"
          handleBackup={handleBackup}
          fileName="amenities-backup"
          apiRoute="amenitiesbackup"
        />

        <DataBackupBar
          backupnName="Blogs Backup"
          handleBackup={handleBackup}
          fileName="blogs-backup"
          apiRoute="blogsbackup"
        />

        <DataBackupBar
          backupnName="Projects Backup"
          handleBackup={handleBackup}
          fileName="projects-backup"
          apiRoute="projectsbackup"
        />

        <DataBackupBar
          backupnName="Users Backup"
          handleBackup={handleBackup}
          fileName="users-backup"
          apiRoute="usersbackup"
        />
      </section>
    </div>
  );
}
