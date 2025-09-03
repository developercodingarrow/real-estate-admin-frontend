"use client";
import React, { useContext, useEffect } from "react";
import styles from "../../../css/updateprojectstyle.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useForm } from "react-hook-form";
import { updateProjectAction } from "@/src/app/utils/projectActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import ProjectLocation from "../../../commanProjectFileds/ProjectLocation";
import ProjectArea from "../../../commanProjectFileds/ProjectArea";
import { availabilityStatus } from "@/src/jsonData/projectFiledsData";
import RadioNumbers from "../../../commanProjectFileds/RadioNumbers";
import FloorDetails from "../../../commanProjectFileds/FloorDetails";
import SubmitBtn from "@/src/components/elements/buttons/SubmitBtn";
import ClickBtn from "@/src/components/elements/buttons/ClickBtn";

export default function CommercialShopCat(props) {
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { apiData, slug, onNext } = props;
  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: "",
      location: "",
      address: "",
      projectStatus: "",
      carpetArea: "",
      builtUpArea: "",
      superBuiltUpArea: "",
      totalFloors: "",
      propertyOnFloor: "",
    },
  });

  useEffect(() => {
    if (apiData) {
      reset({
        totalFloors: apiData.totalFloors ? String(apiData.totalFloors) : "",
        projectStatus: apiData.projectStatus || "",
        city: apiData.city || "",
        location: apiData.location || "",
        address: apiData.address || "",
        carpetArea: apiData.carpetArea || "",
        builtUpArea: apiData.builtUpArea || "",
        superBuiltUpArea: apiData.superBuiltUpArea || "",
        propertyOnFloor: apiData.propertyOnFloor || "",
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
        console.error("Error creating project:", response.error);
        return;
      }
      if (response.data.status === "success") {
        console.log("update project:", response);
        toast.success(response.data.message);
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
      <div className={styles.page_title}>Fill The fileds for Shops</div>
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.form_inner_container}>
          <section className={styles.field_section_wrapper}>
            <ProjectLocation control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <ProjectArea control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <RadioNumbers
              sectionTitle="Availability Status"
              control={control}
              name="projectStatus"
              options={availabilityStatus}
            />
          </section>
          <section className={styles.field_section_wrapper}>
            <FloorDetails control={control} errors={errors} />
          </section>
        </div>
        <div className={styles.submitBtn_wrapper}>
          <SubmitBtn btnText="Update" btnLoading={isBtnLoading} />
          <ClickBtn btnText="Next" handelClick={onNext} />
        </div>
      </form>
    </div>
  );
}
