import React from "react";
import styles from "./css/imageUplaoder.module.css";
import SingleImageUpload from "./SingleImageUpload";
import ImagGalleryUploder from "./ImagGalleryUploder";
import ClickBtn from "../elements/buttons/ClickBtn";
export default function ProjectImageUploader(props) {
  const { apiData, slug, onNext, onBack } = props;
  return (
    <div className={styles.ProjectImage_wrapper_conatiner}>
      <div className={styles.inner_conatiner}>
        <div className={styles.image_uplod_wrapper}>
          <div className={styles.single_image_uplaod_wrapper}>
            <div className={styles.section_title}>
              Add Main Photo Of your Property
            </div>
            <SingleImageUpload slug={slug} apiData={apiData} />
          </div>

          <div className={styles.single_image_uplaod_wrapper}>
            <div className={styles.section_title}>
              Add Photo Gallery Of your Property
            </div>
            <ImagGalleryUploder slug={slug} apiData={apiData} />
          </div>
        </div>
      </div>

      <div className={styles.submitBtn_wrapper}>
        <ClickBtn btnText="Back" handelClick={onBack} />
        <ClickBtn btnText="Next" handelClick={onNext} />
      </div>
    </div>
  );
}
