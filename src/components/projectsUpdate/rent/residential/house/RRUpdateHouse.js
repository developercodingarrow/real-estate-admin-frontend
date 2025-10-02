"use client";
import React, { useContext, useEffect } from "react";
import styles from "../../../css/updateprojectstyle.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { updateProjectAction } from "@/src/app/utils/projectActions";
import ClickBtn from "@/src/components/elements/buttons/ClickBtn";
import SubmitBtn from "@/src/components/elements/buttons/SubmitBtn";
import ProjectArea from "../../../commanProjectFileds/ProjectArea";
import ProjectLocation from "../../../commanProjectFileds/ProjectLocation";
import RadioNumbers from "../../../commanProjectFileds/RadioNumbers";
import { AppContext } from "@/src/_contextApi/AppContext";
import { useForm } from "react-hook-form";
import CustomeHookInput from "@/src/components/inputsElements/CustomeHookInput";
import { Controller } from "react-hook-form";
import PriceDetails from "../../../commanProjectFileds/PriceDetails";
import {
  availabilityReadytoMove,
  bedroomOptions,
  bathroomOptions,
  balconiesOptions,
} from "@/src/jsonData/projectFiledsData";
import { useParams, useRouter } from "next/navigation";

export default function RRUpdateHouse(props) {
  const router = useRouter();
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { apiData, slug, onNext } = props;

  const {
    control,
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
      rent: "",
      city: "",
      location: "",
      address: "",
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
        rent: apiData.rent ? String(apiData.rent) : "",
        city: apiData.city || "",
        location: apiData.location || "",
        address: apiData.address || "",
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
              options={availabilityReadytoMove}
            />
          </section>

          <section className={styles.field_section_wrapper}>
            <ProjectLocation control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <ProjectArea control={control} errors={errors} />
          </section>
          <section className={styles.field_section_wrapper}>
            <PriceDetails control={control} errors={errors} />
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
