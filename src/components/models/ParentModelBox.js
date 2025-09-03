import React from "react";
import styles from "./modelStyle.module.css";
export default function ParentModelBox({
  children,
  modelFor,
  modelClosehandel,
}) {
  return (
    <div className={styles.overlay} aria-hidden={!modelFor}>
      <div className={styles.modalCard}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => modelClosehandel(false)}
          aria-label="Close"
        >
          ✕
        </button>

        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}
