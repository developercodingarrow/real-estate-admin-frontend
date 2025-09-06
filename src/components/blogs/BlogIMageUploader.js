import React from "react";
import styles from "./blog.module.css";
import SingleImageUpload from "../imageUploder/SingleImageUpload";
import { handeluplodBlogImage } from "@/src/app/imghandlers/imageHandlers";
export default function BlogIMageUploader(props) {
  const { slug, apiData } = props;

  const uplodeblogIng = (image, imagefor, slug) => {
    alert("ok");
    console.log(image, imagefor, slug);
  };

  return (
    <div className={styles.blogImage_wrapper_conatiner}>
      <div className={styles.inner_conatiner}>
        <div className={styles.single_image_uplaod_wrapper}>
          <div className={styles.section_title}>
            Add Main Photo Of your Property
          </div>
          <SingleImageUpload
            slug={slug}
            apiData={apiData}
            uploadFor="blogImage"
            imageUrl={apiData?.blogImage?.url}
            imageUplodhandeler={handeluplodBlogImage}
          />
        </div>
      </div>
    </div>
  );
}
