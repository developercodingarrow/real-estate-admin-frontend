"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./createblog.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import ReactQuillElement from "../editor/ReactQuillElement";
import { AppContext } from "@/src/_contextApi/AppContext";
import ClickBtn from "../elements/buttons/ClickBtn";
import { updateBlogContentAction } from "@/src/app/utils/blogAction";
import { useParams, useRouter } from "next/navigation";

export default function CreateBlog(props) {
  const router = useRouter();
  const { apiData, slug, onNext, onBack } = props;

  console.log(apiData);
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [formData, setFormData] = useState({
    title: "",
    metaDescription: "",
    content: "",
  });

  // Prefill data when apiData changes
  useEffect(() => {
    if (apiData) {
      setFormData({
        title: apiData.title || "",
        metaDescription: apiData.metaDescription || "",
        content: apiData.content || "",
      });
    }
  }, [apiData]);

  // ✅ Handle text input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle editor change
  const handleEditorChange = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  // ✅ Save handler
  const handleSave = async () => {
    try {
      setisBtnLoading(true);
      const response = await updateBlogContentAction(formData, slug);
      if (response.status === "success") {
        setisBtnLoading(false);
        router.refresh();
        console.log("SEO data saved:", response);
        toast.success(response.message);
      } else {
        console.error("Failed to save SEO data:", response.error);
        setisBtnLoading(false);
        router.refresh();
      }
    } catch (error) {
      setisBtnLoading(false);
      router.refresh();
    }

    // call API update function here with formData + slug
  };
  return (
    <div>
      <ToastContainer />
      <div className={styles.top_bar}>
        <ClickBtn
          btnText="publish"
          btnLoading={isBtnLoading}
          handelClick={handleSave}
        />
        <ClickBtn btnText="Next" handelClick={onNext} />
      </div>
      <div className={styles.createContainer}>
        <div className={styles.titleContainer}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            className={styles.inputTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.titleContainer}>
          <textarea
            type="text"
            name="metaDescription"
            placeholder="meta description"
            value={formData.metaDescription}
            className={styles.inputTitle}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.editor_container}>
          <ReactQuillElement
            inputValue={formData.content}
            inputChnageHandler={handleEditorChange}
          />
        </div>
      </div>
    </div>
  );
}
