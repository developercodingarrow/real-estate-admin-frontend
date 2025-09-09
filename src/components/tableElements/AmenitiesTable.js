"use client";
import React, { useContext } from "react";
import styles from "./listtable.module.css";
import { MdDelete, FiEdit, IoEye } from "../ApplicationIcons";
import Link from "next/link";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import ComponentLoading from "../loading/ComponentLoading";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";

export default function AmenitiesTable(props) {
  const { tableData, handelDeleteItem } = props;

  const { handelOpenDeleteModel } = useContext(ModelsContext);

  const handelDeleteTableItem = (id) => {
    handelOpenDeleteModel(id);
  };
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S No</th>
            <th>property Type</th>
            <th>Amanities </th>
            <th>Created Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {!tableData || tableData.length === 0 ? (
            <tr className={styles.loading_tr}>
              <td colSpan={6} className={styles.table_loaderCell}>
                <ComponentLoading />
              </td>
            </tr>
          ) : (
            tableData.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.propertyType}</td>
                <td>{item.name}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>
                  <span className={styles.table_iconBox}>
                    <FiEdit className={styles.table_icon} />
                  </span>
                </td>
                <td>
                  <span className={styles.table_iconBox}>
                    <MdDelete
                      className={styles.table_icon}
                      onClick={() => handelDeleteTableItem(item._id)}
                    />
                  </span>
                </td>
              </tr>
            ))
          )}

          {/* {tableData.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.propertyType}</td>
                <td>{item.name}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>
                  <span className={styles.table_iconBox}>
                    <FiEdit className={styles.table_icon} />
                  </span>
                </td>
                <td>
                  <span className={styles.table_iconBox}>
                    <MdDelete
                      className={styles.table_icon}
                      onClick={() => handelDeleteTableItem(item._id)}
                    />
                  </span>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}
