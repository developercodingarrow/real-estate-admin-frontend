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
import { createProjectAction } from "@/src/app/utils/projectActions";

export default function SellApartment(props) {
  const { pageHeading, onNext } = props;

  const {
    control, // add this
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
      builder: "",
      city: "",
      location: "",
      address: "",
      // other fields (area, basics, official) - add names used in child components
      projectTitle: "",
      price: "",
      carpetArea: "",
      builtUpArea: "",
      SuperBuiltUpArea: "",
      noOfFloors: "",
      noOfUnits: "",
      unitType: "",
      reraNo: "",
      possessionDate: "",
      basicPrice: "",
      // ...etc
    },
  });

  const handelsubmit = async (data) => {
    console.log("SellApartment form data:", data);
    try {
      const response = await createProjectAction(data);
      if (response.error) {
        console.error("Error creating project:", response.error);
      }
      if (response.data.status === "success") {
        console.log("Create Project Action Response:", response);
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className={styles.main_conianter}>
      <div className={styles.page_title}>{pageHeading}</div>
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.inner_container}>
          <div className={styles.section_fileds_wrapper}>
            <div className={styles.fileds_wrapper}>
              <ProjectTypeLocationSection control={control} errors={errors} />
            </div>
            <div className={styles.fileds_wrapper}>
              <ProjectAreaSection control={control} errors={errors} />
            </div>

            <div className={styles.fileds_wrapper}>
              <ProjectBasicsDetails control={control} errors={errors} />
            </div>
            <div className={styles.fileds_wrapper}>
              <ProjectOfficialDetails control={control} errors={errors} />
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
