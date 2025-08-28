import React from "react";
import styles from "./listtable.module.css";
import { MdDelete, FiEdit, IoEye } from "../ApplicationIcons";

export default function CityTable(props) {
  const { tableData } = props;
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S No</th>
            <th>City Name</th>
            <th>Created Date</th>
            <th>Total Location</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View Location</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr>
                <td>{item.sno}</td>
                <td>{item.cityName}</td>
                <td>{item.createdAt}</td>
                <td>{item.totalLocation}</td>
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
                <td>
                  <span className={styles.table_iconBox}>
                    <IoEye className={styles.table_icon} />
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
