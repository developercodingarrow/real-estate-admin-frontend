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

  const [errors, setErrors] = useState({
    title: "",
    metaDescription: "",
    content: "",
  });

  const [formIsValid, setFormIsValid] = useState(true);

  const validateForm = () => {
    const isTitleValid =
      formData.title.length >= 10 && formData.title.length <= 160;
    const isMetaDescriptionValid =
      formData.metaDescription.length >= 100 &&
      formData.metaDescription.length <= 200;
    const iscontent = formData.content.length >= 50; // Fix condition

    // Validation is false if any check fails
    setFormIsValid(!(isTitleValid && isMetaDescriptionValid && iscontent));
  };

  useEffect(() => {
    validateForm();
  }, [formData.title, formData.metaDescription, errors]);

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
    // Validation for title
    if (name === "title") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          title: "Title cannot be empty.",
        }));
      } else if (value.length < 10 || value.length > 160) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          title: "Title must be must be between 10 and 160 characters..",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, title: "" }));
      }
    }
    // Validation for metaDescription
    if (name === "metaDescription") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          metaDescription: "Meta description cannot be empty.",
        }));
      } else if (value.length < 100 || value.length > 160) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          metaDescription:
            "Meta description must be between 100 and 160 characters.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, metaDescription: "" }));
      }
    }
  };

  // ✅ Handle editor change
  const handleEditorChange = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
    // valiadtion for edditor
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        content: "Content cannot be empty.",
      }));
    } else if (value.length < 50) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        content: "Content must be at least 50 characters long.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        content: "",
      }));
    }
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
          disabledBtn={formIsValid}
        />
        <ClickBtn
          btnText="Next"
          handelClick={onNext}
          disabledBtn={formIsValid}
        />
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
          <span className={styles.error_msg}> {errors.title}</span>
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
          <span className={styles.error_msg}> {errors.metaDescription}</span>
        </div>

        <div className={styles.editor_container}>
          <span className={styles.editorerror_msg}> {errors.content}</span>
          <ReactQuillElement
            inputValue={formData.content}
            inputChnageHandler={handleEditorChange}
          />
        </div>
      </div>
    </div>
  );
}
