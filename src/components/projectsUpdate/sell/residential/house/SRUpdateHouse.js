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
import {
  bedroomOptions,
  bathroomOptions,
  balconiesOptions,
  availabilityStatus,
} from "@/src/jsonData/projectFiledsData";
import { useParams, useRouter } from "next/navigation";
import CustomeHookInput from "@/src/components/inputsElements/CustomeHookInput";
import CustomeAreaHookInput from "@/src/components/inputsElements/CustomeAreaHookInput";

export default function SRUpdateHouse(props) {
  const router = useRouter();
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { apiData, slug, onNext, headingText = "house" } = props;

  const {
    control,
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      noOfBedrooms: "", // default selected value
      noOfBathrooms: "", // default selected value
      noOfBalconies: "",
      projectStatus: "",
      carpetArea: "",
      builtUpArea: "",
      superBuiltUpArea: "",
      city: "",
      location: "",
      address: "",
      basicPrice: "",
      ProjectArea: "",
      StartsPrice: "",
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
        city: apiData.city || "",
        location: apiData.location || "",
        address: apiData.address || "",
        basicPrice: apiData.basicPrice ? String(apiData.basicPrice) : "",
        ProjectArea: apiData.ProjectArea ? String(apiData.ProjectArea) : "",
        StartsPrice: apiData.StartsPrice || "",
      });
    }
  }, [apiData, reset]);

  const handelsubmit = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await updateProjectAction(data, slug);
      if (response.error) {
        setisBtnLoading(false);
        return;
      }
      if (response.status === "success") {
        toast.success(response.message);
        setisBtnLoading(false);
        router.refresh();
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setisBtnLoading(false);
      router.refresh();
    }
  };

  return (
    <div className={styles.main_conianter}>
      <ToastContainer />
      <div className={styles.page_title}>Fill The fileds for {headingText}</div>
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

          <section className={styles.fieldColumn_section_wrapper}>
            <CustomeHookInput
              inputLabel="Project Area"
              inputPlaceholder="property Area in sq.yards"
              type="text"
              name="ProjectArea"
              control={control}
              register={register}
              error={errors.ProjectArea?.message}
              rules={{
                required: "Area is required",
              }}
            />

            <CustomeHookInput
              inputLabel="Starts Price"
              inputPlaceholder="prefic with value cr,lakh"
              type="text"
              name="StartsPrice"
              control={control}
              register={register}
              error={errors.StartsPrice?.message}
              rules={{
                required: "Staring Price is required",
              }}
            />

            <CustomeAreaHookInput
              inputLabel="Basic Price"
              inputPlaceholder="Basic Price"
              type="number"
              name="basicPrice"
              control={control}
              register={register}
              rules={{
                required: "Basic Price is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
              }}
              error={errors.basicPrice?.message}
            />
          </section>
        </div>

        <div className={styles.submitBtn_wrapper}>
          <SubmitBtn
            btnText="Update"
            btnLoading={isBtnLoading}
            disabledBtn={!isValid}
          />
          <ClickBtn
            btnText="Next"
            handelClick={onNext}
            disabledBtn={!isValid}
          />
        </div>
      </form>
    </div>
  );
}
