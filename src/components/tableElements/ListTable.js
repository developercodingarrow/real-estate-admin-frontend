import React from "react";
import styles from "./listtable.module.css";
import { MdDelete, FiEdit } from "../ApplicationIcons";
export default function ListTable(props) {
  const { tableData } = props;

  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S No</th>
            <th>Builder Name</th>
            <th>Created Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr>
                <td>{item.sno}</td>
                <td>{item.buliderName}</td>
                <td>{item.createdAt}</td>
                <td>
                  <span className={styles.table_iconBox}>
                    <FiEdit className={styles.table_icon} />
                  </span>
                </td>
                <td>
                  <span className={styles.table_iconBox}>
                    <MdDelete className={styles.table_icon} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
