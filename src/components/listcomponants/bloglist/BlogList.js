"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./bloglist.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import TableFooter from "../../tableElements/TableFooter";
import TableSearch from "../../search/TableSearch";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import BlogListCard from "./BlogListCard";
import DeleteModel from "../../models/DeleteModel";
import { deleteBlogWithImageAction } from "@/src/app/utils/blogAction";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function BlogList(props) {
  const { apiData } = props;
  const { handelOpenDeleteModel, idForDelete, handelCloseDeleteModel } =
    useContext(ModelsContext);
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  // 🔹 Keep local state of blogs
  const [blogs, setBlogs] = useState(apiData);

  const {
    totalRows,
    currentPage,
    rowsPerPage,
    visibleRows,
    visibleRange,
    nextPage,
    prevPage,
    handleRowsPerPageChange,
    searchByTableFiled,
  } = useTableFillters(blogs);

  const handelDeleteBlog = async () => {
    try {
      setisBtnLoading(true);
      const res = await deleteBlogWithImageAction(idForDelete);
      console.log("res---", res);
      if (res?.data?.status === "success") {
        // 🔹 Remove deleted blog from state
        setBlogs((prev) => prev.filter((blog) => blog._id !== idForDelete));
        toast.success(res.data.message);
        // 🔹 Close modal
        handelCloseDeleteModel();
      }
      setisBtnLoading(false);
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  return (
    <div className={styles.main_conatiner}>
      <ToastContainer />
      <DeleteModel deletehandel={handelDeleteBlog} />
      <div className={styles.page_heading}>Blog List</div>
      <div className={styles.page_fillter_wrapper}>
        <div className={styles.fillter_left_column}>
          <div className={styles.search_wrapper}>
            <TableSearch
              searchHandle={searchByTableFiled}
              searchField="name"
              placeholder="serach builder"
            />
          </div>
          <div></div>
        </div>
        <div>
          <TableFooter
            totalRows={totalRows}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            visibleRange={visibleRange}
            handelNextPage={nextPage}
            handelPrevPage={prevPage}
            handelRowChange={handleRowsPerPageChange}
          />
        </div>
      </div>
      <div className={styles.table_wrapper}>
        {visibleRows.length > 0 ? (
          visibleRows.map((item, index) => (
            <BlogListCard key={index} dataList={item} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}
