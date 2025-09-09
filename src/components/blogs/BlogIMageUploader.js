import React from "react";
import styles from "./blog.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { handeluplodBlogImage } from "@/src/app/imghandlers/imageHandlers";
import ClickBtn from "../elements/buttons/ClickBtn";

import SinglBlogImageUplod from "../imageUploder/SinglBlogImageUplod";
export default function BlogIMageUploader(props) {
  const { slug, apiData, onNext, onBack } = props;

  return (
    <div className={styles.blogImage_wrapper_conatiner}>
      <div className={styles.inner_conatiner}>
        <div className={styles.single_image_uplaod_wrapper}>
          <div className={styles.section_title}>
            Add Main Photo Of your Blog
          </div>
          <SinglBlogImageUplod
            slug={slug}
            apiData={apiData}
            uploadFor="blogImage"
            imageUrl={apiData?.blogImage?.url}
            imageUplodhandeler={handeluplodBlogImage}
          />
        </div>
      </div>

      <div className={styles.submitBtn_wrapper}>
        <ClickBtn btnText="Back" handelClick={onBack} />
        <ClickBtn btnText="Next" handelClick={onNext} />
      </div>
    </div>
  );
}
