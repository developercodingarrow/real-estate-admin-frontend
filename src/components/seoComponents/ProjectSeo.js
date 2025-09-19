"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./seocomponents.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import ReactQuillElement from "../editor/ReactQuillElement";
import { updateProjectSeoAction } from "@/src/app/utils/projectActions";
import ClickBtn from "../elements/buttons/ClickBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
import { useParams, useRouter } from "next/navigation";
export default function ProjectSeo(props) {
  const router = useRouter();
  const { apiData, slug, onNext, onBack } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);

  // ✅ Local states for form fields
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
      const response = await updateProjectSeoAction(formData, slug);

      if (response.error) {
        toast.error(response.error);
        setisBtnLoading(false);
        return;
      }

      if (response.status === "Fails") {
        toast.error(response.message);
        setisBtnLoading(false);
        return;
      }

      if (response.status === "success") {
        setisBtnLoading(false);
        toast.success(response.message);
        router.refresh();
      } else {
        console.error("Failed to save SEO data:", response.error);
        setisBtnLoading(false);
        router.refresh();
      }
    } catch (error) {
      console.error("Error saving SEO data:", error);
      setisBtnLoading(false);
    }

    // call API update function here with formData + slug
  };

  return (
    <div className={styles.main_Conatiner}>
      <ToastContainer />
      <div className={styles.inner_conatiner}>
        <div className={styles.content_column}>
          <div className={styles.page_title}>
            Add SEO Details for Your Project
          </div>
          <div className={styles.updateBtn_wrapper}>
            <ClickBtn
              btnText="update"
              handelClick={handleSave}
              className={styles.submit_btn}
              btnLoading={isBtnLoading}
              disabledBtn={formIsValid}
            />

            <ClickBtn btnText="Back" handelClick={onBack} />
            <ClickBtn
              btnText="Next"
              handelClick={onNext}
              disabledBtn={formIsValid}
            />
          </div>

          <div className={styles.form_conatiner}>
            {/* SEO Form Fields */}
            <div className={styles.form_group}>
              <div className={styles.lable_wrapper}>
                <label className={styles.lable_style} htmlFor="title">
                  SEO Title
                </label>
              </div>
              <div className={styles.input_wrapper}>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={styles.inputStyle}
                  placeholder="Enter  Title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <span className={styles.error_msg}>{errors.title}</span>
              </div>
            </div>
            <div className={styles.form_group}>
              <div className={styles.lable_wrapper}>
                <label className={styles.lable_style} htmlFor="metaDescription">
                  Meta Descreption
                </label>
              </div>
              <div className={styles.input_wrapper}>
                <textarea
                  rows={4}
                  id="metaDescription"
                  name="metaDescription"
                  className={styles.textareaStyle}
                  placeholder="Enter Meta Description"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                />
                <span className={styles.error_msg}>
                  {errors.metaDescription}
                </span>
              </div>
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
      </div>
    </div>
  );
}
