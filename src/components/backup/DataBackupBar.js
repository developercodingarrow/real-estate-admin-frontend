import React from "react";
import styles from "./databackupbar.module.css";
import { FiDownload, FiDatabase } from "react-icons/fi"; // icons for flair
export default function DataBackupBar(props) {
  const { backupnName, handleBackup, fileName, apiRoute } = props;
  return (
    <div className={styles.backupBar}>
      <div className={styles.backupInfo}>
        <FiDatabase className={styles.icon} />
        <span className={styles.backupText}>{backupnName}</span>
      </div>
      <button
        className={styles.backupBtn}
        onClick={() => handleBackup(fileName, apiRoute)}
      >
        <FiDownload size={18} style={{ marginRight: "8px" }} />
        Download JSON
      </button>
    </div>
  );
}
