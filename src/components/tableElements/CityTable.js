"use client";
import React, { useContext } from "react";
import styles from "./listtable.module.css";
import { MdDelete, FiEdit, IoEye } from "../ApplicationIcons";
import Link from "next/link";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function CityTable(props) {
  const { tableData, handelDeleteItem } = props;
  const { handelOpenDeleteModel } = useContext(ModelsContext);
  const { authUser } = useContext(AuthContext);
  const useRole = authUser?.role;

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
            {useRole === "superAdmin" && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{formatDate(item.createdAt)}</td>
                {useRole === "superAdmin" && (
                  <td>
                    <span className={styles.table_iconBox}>
                      <MdDelete
                        className={styles.table_icon}
                        onClick={() => handelDeleteTableItem(item._id)}
                      />
                    </span>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
