"use client";
import React, { useContext, useEffect } from "react";
import styles from "../../../css/updateprojectstyle.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useForm } from "react-hook-form";
import SubmitBtn from "@/src/components/elements/buttons/SubmitBtn";
import RadioNumbers from "../../../commanProjectFileds/RadioNumbers";
import { AppContext } from "@/src/_contextApi/AppContext";
import { updateProjectAction } from "@/src/app/utils/projectActions";
import ProjectArea from "../../../commanProjectFileds/ProjectArea";
import ClickBtn from "@/src/components/elements/buttons/ClickBtn";
import ProjectLocation from "../../../commanProjectFileds/ProjectLocation";

export default function SRUpdateHouse(props) {
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { apiData, slug, onNext } = props;

  console.log("apiData---", apiData);
  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      noOfBedrooms: "", // default selected value
      noOfBathrooms: "", // default selected value
      noOfBalconies: "",
      projectStatus: "",
      carpetArea: "",
      builtUpArea: "",
      superBuiltUpArea: "",
    },
  });

  useEffect(() => {
    if (apiData) {
      reset({
        noOfBedrooms: apiData.noOfBedrooms ? String(apiData.noOfBedrooms) : "",
        noOfBathrooms: apiData.noOfBathrooms
          ? String(apiData.noOfBathrooms)
          : "",
        noOfBalconies: apiData.noOfBalconies
          ? String(apiData.noOfBalconies)
          : "",
        projectStatus: apiData.projectStatus || "",
        carpetArea: apiData.carpetArea || "",
        builtUpArea: apiData.builtUpArea || "",
        superBuiltUpArea: apiData.superBuiltUpArea || "",
      });
    }
  }, [apiData, reset]);

  const bedroomOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const bathroomOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const balconiesOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const availabilityStatus = [
    { value: "ready-to-move", label: "Ready to Move" },
    { value: "under-construction", label: "Under Construction" },
  ];

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
      <div className={styles.page_title}>Fill The fileds for House</div>
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.form_inner_container}>
          <section className={styles.field_section_wrapper}>
            <RadioNumbers
              sectionTitle="No. of Bedrooms"
              control={control}
              name="noOfBedrooms"
              options={bedroomOptions}
            />
          </section>
          <section className={styles.field_section_wrapper}>
            <RadioNumbers
              sectionTitle="No. of Bathrooms"
              control={control}
              name="noOfBathrooms"
              options={bathroomOptions}
            />
          </section>

          <section className={styles.field_section_wrapper}>
            <RadioNumbers
              sectionTitle="No. of Balconies"
              control={control}
              name="noOfBalconies"
              options={balconiesOptions}
            />
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
            <ProjectLocation control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <ProjectArea control={control} errors={errors} />
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
