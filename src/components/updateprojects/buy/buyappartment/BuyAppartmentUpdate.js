"use client";
import React, { useEffect } from "react";
import styles from "../../updatecomponentsStyles.module.css";
import { useForm } from "react-hook-form";
import BuyUpdateProjectTypeLocationSection from "./BuyUpdateProjectTypeLocationSection";
import { updateProjectAction } from "@/src/app/utils/projectActions";
import SubmitBtn from "@/src/components/elements/buttons/SubmitBtn";
import BuyProjectAreaLocation from "./BuyProjectAreaLocation";
import ProjectAreaSection from "@/src/components/createproject/projectTypes/sell/sellAppartment/ProjectAreaSection";
import ProjectBasicsDetails from "@/src/components/createproject/projectTypes/sell/sellAppartment/ProjectBasicsDetails";
import ProjectOfficialDetails from "@/src/components/createproject/projectTypes/sell/sellAppartment/ProjectOfficialDetails";
import ClickBtn from "@/src/components/elements/buttons/ClickBtn";

export default function BuyAppartmentUpdate(props) {
  const { apiData, slug, onNext } = props;

  const {
    control, // add this
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
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

  // Update form values when apiData changes
  useEffect(() => {
    if (apiData) {
      reset({
        projectStatus: apiData.projectStatus || "",
        projectType: apiData.projectType || "",
        builder: apiData.builder || "",
        city: apiData.city || "",
        location: apiData.location || "",
        address: apiData.address || "",
        projectTitle: apiData.projectTitle || "",
        price: apiData.price || "",
        carpetArea: apiData.carpetArea || "",
        builtUpArea: apiData.builtUpArea || "",
        SuperBuiltUpArea: apiData.SuperBuiltUpArea || "",
        noOfFloors: apiData.noOfFloors || "",
        noOfUnits: apiData.noOfUnits || "",
        unitType: apiData.unitType || "",
        reraNo: apiData.reraNo || "",
        possessionDate: apiData.possessionDate || "",
        basicPrice: apiData.basicPrice || "",
      });
    }
  }, [apiData, reset]);

  const handelsubmit = async (data) => {
    try {
      const response = await updateProjectAction(data, slug);
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
      <div className={styles.page_title}>
        Fill The fileds for Appartment/Flat
      </div>
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.inner_container}>
          <div className={styles.section_fileds_wrapper}>
            <div className={styles.fileds_wrapper}>
              <BuyUpdateProjectTypeLocationSection
                control={control}
                errors={errors}
              />
            </div>

            <div className={styles.fileds_wrapper}>
              <BuyProjectAreaLocation control={control} errors={errors} />
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
          <SubmitBtn btnText="Update" size="medium" />
          <ClickBtn btnText="Next" handelClick={onNext} />
        </div>
      </form>
    </div>
  );
}
