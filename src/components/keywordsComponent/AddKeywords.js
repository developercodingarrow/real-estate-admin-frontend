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
  updateSlugAction,
} from "@/src/app/utils/projectActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import { useParams, useRouter } from "next/navigation";
export default function AddKeywords(props) {
  const router = useRouter();
  const { onNext, onBack, apiData, slug } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const [seconderyBtn, setseconderyBtn] = useState(false);

  const handelAddSlug = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await updateSlugAction(data, slug);
      console.log(response);
      if (response.error) {
        setisBtnLoading(false);
        return;
      }
      if (response.status === "success") {
        toast.success(response.message);
        setisBtnLoading(false);
        router.refresh();
        return;
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setisBtnLoading(false);
      router.refresh();
    }
  };

  const handeladdkeywords = async (keywords) => {
    console.log(keywords);
    setseconderyBtn(true);
    try {
      const res = await addKeywordsAction({ keywords }, slug);
      console.log("chip---", res.data);
      if (res.data.status === "success") {
        setseconderyBtn(false);
        toast.success(res.data.message);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setseconderyBtn(false);
      router.refresh();
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
