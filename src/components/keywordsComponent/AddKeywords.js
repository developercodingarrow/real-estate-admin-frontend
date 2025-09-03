import React from "react";
import styles from "./addkeywords.module.css";
import ChipInput from "./ChipInput";
import SlugUpdate from "./SlugUpdate";
import ClickBtn from "../elements/buttons/ClickBtn";
export default function AddKeywords(props) {
  const { onNext, onBack, apiData, slug } = props;
  return (
    <div className={styles.main_Conatiner}>
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
          />
        </section>
        <section className={styles.section_container}>
          <div className={styles.section_title}>add keywords</div>
          <ChipInput apiData={apiData} slug={slug} />
        </section>
      </div>

      <div className={styles.submitBtn_wrapper}>
        <ClickBtn btnText="Back" handelClick={onBack} />
      </div>
    </div>
  );
}
