"use client";
import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import styles from "../../../css/updateprojectstyle.module.css";
import { useForm } from "react-hook-form";
import ProjectType from "./ProjectType";
import ProjectLocation from "../../../commanProjectFileds/ProjectLocation";
import ProjectArea from "../../../commanProjectFileds/ProjectArea";
import ProjectOfficialDetails from "./ProjectOfficialDetails";
import SubmitBtn from "@/src/components/elements/buttons/SubmitBtn";
import ClickBtn from "@/src/components/elements/buttons/ClickBtn";
import { updateProjectAction } from "@/src/app/utils/projectActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
export default function SRUpdateApartment(props) {
  const { apiData, slug, onNext } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);

  const {
    control, // add this
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isValid },
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
      projectTitle: "",
      price: "",
      carpetArea: "",
      builtUpArea: "",
      superBuiltUpArea: "",
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
        price: apiData.price || "",
        carpetArea: apiData.carpetArea || "",
        builtUpArea: apiData.builtUpArea || "",
        superBuiltUpArea: apiData.superBuiltUpArea || "",
        noOfUnits: apiData.noOfUnits ? String(apiData.noOfUnits) : "",
        noOfFloors: apiData.noOfFloors ? String(apiData.noOfFloors) : "",
        unitType: apiData.unitType || "",
        reraNo: apiData.reraNo || "",
        possessionDate: formatDate(apiData.possessionDate) || "",
        basicPrice: apiData.basicPrice || "",
      });
    }
  }, [apiData, reset]);

  const handelsubmit = async (data) => {
    try {
      console.log("data:", data);
      setisBtnLoading(true);
      const response = await updateProjectAction(data, slug);
      if (response.error) {
        setisBtnLoading(false);
        toast.error(response.error);
        return;
      }
      if (response.status === "success") {
        toast.success(response.message);
        setisBtnLoading(false);
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setisBtnLoading(false);
    }
  };
  return (
    <div className={styles.main_conianter}>
      <ToastContainer />
      <div className={styles.page_title}>
        Fill The fileds for Appartment/Flat
      </div>
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.form_inner_container}>
          <section className={styles.field_section_wrapper}>
            <ProjectType control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <ProjectLocation control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <ProjectArea control={control} errors={errors} />
          </section>
          <section className={styles.field_section_wrapper}>
            <ProjectOfficialDetails control={control} errors={errors} />
          </section>
        </div>

        <div className={styles.submitBtn_wrapper}>
          <SubmitBtn
            btnText="Update"
            btnLoading={isBtnLoading}
            disabledBtn={!isValid}
          />
          <ClickBtn btnText="Next" handelClick={onNext} />
        </div>
      </form>
    </div>
  );
}
