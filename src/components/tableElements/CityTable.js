"use client";
import React, { useContext } from "react";
import styles from "./listtable.module.css";
import { MdDelete, FiEdit, IoEye } from "../ApplicationIcons";
import Link from "next/link";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";

export default function CityTable(props) {
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
            <th>City Name</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View Location</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
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
                <td>
                  <Link
                    href={`/cities/${item._id}`}
                    className={styles.table_iconBox}
                  >
                    <IoEye className={styles.table_icon} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
