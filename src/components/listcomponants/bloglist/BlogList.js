"use client";
import React, { useState, useContext, useEffect } from "react";
import dynamicImport from "next/dynamic";
import styles from "./bloglist.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import TableFooter from "../../tableElements/TableFooter";
import TableSearch from "../../search/TableSearch";
import useTableFillters from "@/src/_custome_hooks/useTableFillters";
import BlogListCard from "./BlogListCard";
import {
  deleteBlogWithImageAction,
  isPublishedBlogtAction,
  starteBlogCreateAction,
} from "@/src/app/utils/blogAction";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import { AppContext } from "@/src/_contextApi/AppContext";
import ClickBtn from "../../elements/buttons/ClickBtn";
import { useParams, useRouter } from "next/navigation";
import ComponentLoading from "../../loading/ComponentLoading";

const DeleteModel = dynamicImport(() => import("../../models/DeleteModel"), {
  ssr: false, // ensures it only loads on client side
  loading: () => (
    <div className="dynimic_model_wrapper">
      <ComponentLoading />
    </div>
  ), // optional fallback
});

export default function BlogList(props) {
  const router = useRouter();
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
      const res = await deleteBlogWithImageAction(idForDelete);
      if (res?.status === "success") {
        // 🔹 Remove deleted blog from state
        setBlogs((prev) => prev.filter((blog) => blog._id !== idForDelete));
        toast.success(res.message);
        // 🔹 Close modal
        handelCloseDeleteModel();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelStartCreateBlog = async () => {
    try {
      setisBtnLoading(true);
      const res = await starteBlogCreateAction();
      console.log("start- creating blog-", res);
      if (res.status === "success") {
        router.push(`/create-new-blog/${res.data._id}`);
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };

  const handelIsPublished = async (id) => {
    try {
      const res = await isPublishedBlogtAction({ id });
      console.log(res);

      if (res.error) {
        toast.error(res.error);
        return;
      }
      if (res.status === "success") {
        toast.success(res.message);
        return;
      }
    } catch (error) {
      console.log(error);
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
              searchField="title"
              placeholder="Enter Blog Title"
            />
          </div>
          <div>
            <ClickBtn
              btnText="Create New Blog"
              handelClick={handelStartCreateBlog}
              btnLoading={isBtnLoading}
            />
          </div>
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
            <BlogListCard
              key={index}
              dataList={item}
              onToggleIsPublished={handelIsPublished}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}
