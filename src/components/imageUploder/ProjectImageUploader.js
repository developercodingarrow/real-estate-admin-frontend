import React from "react";
import styles from "./css/imageUplaoder.module.css";
import CreateStaticBox from "../startCreate/CreateStaticBox";
import SingleImageUpload from "./SingleImageUpload";
import ImagGalleryUploder from "./ImagGalleryUploder";
export default function ProjectImageUploader() {
  return (
    <div className={styles.ProjectImage_wrapper_conatiner}>
      <div className={styles.inner_conatiner}>
        <div className={styles.image_uplod_wrapper}>
          <div className={styles.single_image_uplaod_wrapper}>
            <div className={styles.section_title}>
              Add Main Photo Of your Property
            </div>
            <SingleImageUpload />
          </div>

          <div className={styles.single_image_uplaod_wrapper}>
            <div className={styles.section_title}>
              Add Photo Gallery Of your Property
            </div>
            <ImagGalleryUploder />
          </div>
        </div>
        <div>
          <CreateStaticBox boxTitle="Important Guid" />
        </div>
      </div>
    </div>
  );
}
