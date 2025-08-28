"use client";
import React, { useEffect, useState } from "react";
import styles from "./sellapartment.module.css";
import ProjectTypeLocationSection from "./ProjectTypeLocationSection";
import ProjectAreaSection from "./ProjectAreaSection";
import ProjectBasicsDetails from "./ProjectBasicsDetails";
import ProjectOfficialDetails from "./ProjectOfficialDetails";
import ClickBtn from "@/src/components/elements/buttons/ClickBtn";
import { useForm } from "react-hook-form";
import SubmitBtn from "@/src/components/elements/buttons/SubmitBtn";
export default function SellApartment(props) {
  const { pageHeading, onNext } = props;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange", // CHANGED to onChange for real-time validation
    reValidateMode: "onChange", // CHANGED to onChange for real-time validation
    defaultValues: {
      projectStatus: "",
      projectType: "",
      projectBuilder: "",
      city: "",
      location: "",
      address: "",
      // other fields (area, basics, official) - add names used in child components
      projectTitle: "",
      price: "",
      carpetArea: "",
      BuiltUpArea: "",
      SuperBuiltUpArea: "",
      floors: "",
      units: "",
      unittypes: "",
      reraNo: "",
      posssession: "",
      basicPrice: "",
      // ...etc
    },
  });

  const handelsubmit = (data) => {
    // data contains all registered fields from this form (child components must register fields)
    console.log("SellApartment form data:", data);
    // also show JSON string in case you want to copy-paste
  };

  return (
    <div className={styles.main_conianter}>
      <div className={styles.page_title}>{pageHeading}</div>
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.inner_container}>
          <div className={styles.section_fileds_wrapper}>
            <div className={styles.fileds_wrapper}>
              <ProjectTypeLocationSection
                register={register}
                setValue={setValue}
                watch={watch}
                errors={errors}
              />
            </div>

            <div className={styles.fileds_wrapper}>
              <ProjectAreaSection
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
              />
            </div>

            <div className={styles.fileds_wrapper}>
              <ProjectBasicsDetails
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
              />
            </div>
            <div className={styles.fileds_wrapper}>
              <ProjectOfficialDetails
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
              />
            </div>
          </div>
        </div>
        <div className={styles.section_footer}>
          <SubmitBtn btnText="Processs" size="medium" />
        </div>
      </form>
    </div>
  );
}
