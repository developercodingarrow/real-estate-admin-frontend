"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./seocomponents.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import CreateStaticBox from "../startCreate/CreateStaticBox";
import ReactQuillElement from "../editor/ReactQuillElement";
import { updateProjectSeoAction } from "@/src/app/utils/projectActions";
import ClickBtn from "../elements/buttons/ClickBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
export default function ProjectSeo(props) {
  const { apiData, slug, onNext, onBack } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);

  // ✅ Local states for form fields
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
      const response = await updateProjectSeoAction(formData, slug);

      if (response.data.status === "success") {
        setisBtnLoading(false);
        console.log("SEO data saved:", response);
        toast.success(response.data.message);
      } else {
        console.error("Failed to save SEO data:", response.error);
        setisBtnLoading(false);
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
            />

            <ClickBtn btnText="Back" handelClick={onBack} />
            <ClickBtn btnText="Next" handelClick={onNext} />
          </div>

          <div className={styles.form_conatiner}>
            {/* SEO Form Fields */}
            <div className={styles.form_group}>
              <div className={styles.lable_wrapper}>
                <label className={styles.lable_style} htmlFor="title">
                  SEo Title
                </label>
              </div>
              <div className={styles.input_wrapper}>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={styles.inputStyle}
                  placeholder="Enter Meta Title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
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
              </div>
            </div>
            <div className={styles.editor_container}>
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
