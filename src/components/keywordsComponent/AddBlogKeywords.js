"use client";
import React, { useContext, useEffect, useState, useRef, use } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import styles from "./addkeywords.module.css";

import ChipInput from "./ChipInput";
import SlugUpdate from "./SlugUpdate";
import ClickBtn from "../elements/buttons/ClickBtn";
import {
  addKeywordsAction,
  updateProjectAction,
} from "@/src/app/utils/projectActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import {
  addBlogKeywordsAction,
  updateBlogSlugAction,
} from "@/src/app/utils/blogAction";

export default function AddBlogKeywords(props) {
  const { onNext, onBack, apiData, slug } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [seconderyBtn, setseconderyBtn] = useState(false);
  const handelAddSlug = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await updateBlogSlugAction(data, slug);
      if (response.error) {
        console.error("Error creating project:", response.error);
        setisBtnLoading(false);
        return;
      }
      if (response.data.status === "success") {
        console.log("Create Project Action Response:", response);
        toast.success(response.data.message);
        setisBtnLoading(false);
        return;
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setisBtnLoading(false);
    }
  };

  const handeladdkeywords = async (keywords) => {
    console.log(keywords);
    setseconderyBtn(true);
    try {
      const res = await addBlogKeywordsAction({ keywords }, slug);
      console.log("chip---", res.data);
      if (res.data.status === "success") {
        setseconderyBtn(false);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setseconderyBtn(false);
    }
  };
  return (
    <div className={styles.main_Conatiner}>
      <ToastContainer />
      <div className={styles.inner_conatiner}>
        <div className={styles.page_title}>
          Add SEO Details for Your Project
        </div>
        <section className={styles.section_container}>
          <div className={styles.section_title}>update Slug</div>
          <SlugUpdate
            onNext={onNext}
            onBack={onBack}
            apiData={apiData}
            slug={slug}
            handelUpdate={handelAddSlug}
          />
        </section>
        <section className={styles.section_container}>
          <div className={styles.section_title}>add keywords</div>
          <ChipInput
            apiData={apiData}
            slug={slug}
            handelUpdate={handeladdkeywords}
            isLoading={seconderyBtn}
          />
        </section>
      </div>

      <div className={styles.submitBtn_wrapper}>
        <ClickBtn btnText="Back" handelClick={onBack} />
      </div>
    </div>
  );
}
