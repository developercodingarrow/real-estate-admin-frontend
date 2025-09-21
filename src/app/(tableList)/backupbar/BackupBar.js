import React from "react";
import styles from "./backupbar.module.css";
import { FaFileExcel, FaDatabase } from "react-icons/fa";
export default function BackupBar(props) {
  const { onExportExcel, onBackupJson } = props;
  return (
    <div className={styles.backupBar}>
      {/* Left Side - Title */}
      <h2 className={styles.title}>📋 Enquiry Data Backup</h2>

      {/* Right Side - Buttons */}
      <div className={styles.buttons}>
        <button
          onClick={onExportExcel}
          className={`${styles.btn} ${styles.excelBtn}`}
        >
          <FaFileExcel className={styles.icon} />
          <span>Export Excel</span>
        </button>

        <button
          onClick={onBackupJson}
          className={`${styles.btn} ${styles.jsonBtn}`}
        >
          <FaDatabase className={styles.icon} />
          <span>Backup JSON</span>
        </button>
      </div>
    </div>
  );
}
