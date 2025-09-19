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
import { useParams, useRouter } from "next/navigation";
import CustomeHookInput from "@/src/components/inputsElements/CustomeHookInput";
import CustomeAreaHookInput from "@/src/components/inputsElements/CustomeAreaHookInput";

export default function CommercialShopCat(props) {
  const router = useRouter();
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { apiData, slug, onNext } = props;
  const {
    control,
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      city: "",
      location: "",
      address: "",
      projectStatus: "",
      carpetArea: "",
      builtUpArea: "",
      superBuiltUpArea: "",
      noOfFloors: "",
      propertyOnFloor: "",
      basicPrice: "",
      ProjectArea: "",
      StartsPrice: "",
    },
  });

  useEffect(() => {
    if (apiData) {
      reset({
        noOfFloors: apiData.noOfFloors ? String(apiData.noOfFloors) : "",
        projectStatus: apiData.projectStatus || "",
        city: apiData.city || "",
        location: apiData.location || "",
        address: apiData.address || "",
        carpetArea: apiData.carpetArea || "",
        builtUpArea: apiData.builtUpArea || "",
        superBuiltUpArea: apiData.superBuiltUpArea || "",
        propertyOnFloor: apiData.propertyOnFloor || "",
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
        toast.error(response.error);
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
          <section className={styles.fieldColumn_section_wrapper}>
            <CustomeHookInput
              inputLabel="Project Area"
              inputPlaceholder="Project Area in Acers"
              type="text"
              name="ProjectArea"
              control={control}
              register={register}
              rules={{
                required: "Project Area required",
              }}
              error={errors.ProjectArea?.message}
            />

            <CustomeHookInput
              inputLabel="Starts Price"
              inputPlaceholder="mention prefic with value cr,lakh"
              type="text"
              name="StartsPrice"
              control={control}
              register={register}
              rules={{
                required: "Starts Price required",
              }}
              error={errors.StartsPrice?.message}
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
