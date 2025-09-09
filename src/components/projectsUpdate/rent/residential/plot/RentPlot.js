"use client";
import React, { useContext, useEffect } from "react";
import styles from "../../../css/updateprojectstyle.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useForm } from "react-hook-form";
import SubmitBtn from "@/src/components/elements/buttons/SubmitBtn";
import { updateProjectAction } from "@/src/app/utils/projectActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import ClickBtn from "@/src/components/elements/buttons/ClickBtn";
import RadioNumbers from "../../../commanProjectFileds/RadioNumbers";
import ProjectLocation from "../../../commanProjectFileds/ProjectLocation";
import ProjectArea from "../../../commanProjectFileds/ProjectArea";
import PlotArea from "../../../commanProjectFileds/PlotArea";
import PlotOfficalDetails from "../../../commanProjectFileds/PlotOfficalDetails";
import {
  plotOpenSide,
  plotPossionTime,
  availabilityStatus,
} from "@/src/jsonData/projectFiledsData";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import PriceDetails from "../../../commanProjectFileds/PriceDetails";
export default function RentPlot(props) {
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
      city: "",
      location: "",
      address: "",
      basicPrice: "",
      plotArea: "", // default selected value
      plotLength: "", // default selected value
      plotWidth: "",
      projectStatus: "",
      plotOpenSide: "",
      plotPossession: "",
      rent: "",
    },
  });

  useEffect(() => {
    if (apiData) {
      reset({
        city: apiData.city || "",
        location: apiData.location || "",
        address: apiData.address || "",
        plotPossession: apiData.plotPossession || "",
        plotArea: apiData.plotArea ? String(apiData.plotArea) : "",
        plotLength: apiData.plotLength ? String(apiData.plotLength) : "",
        plotWidth: apiData.plotWidth ? String(apiData.plotWidth) : "",
        projectStatus: apiData.projectStatus || "",
        plotOpenSide: apiData.plotOpenSide ? String(apiData.plotOpenSide) : "",
        possessionDate: formatDate(apiData.possessionDate) || "",
        basicPrice: apiData.basicPrice || "",
        rent: apiData.rent ? String(apiData.rent) : "",
      });
    }
  }, [apiData, reset]);

  const handelsubmit = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await updateProjectAction(data, slug);

      console.log(response);
      if (response.error) {
        setisBtnLoading(false);
        console.error("Error creating project:", response.error);
        toast.error(response.error);
        return;
      }
      if (response.status === "success") {
        console.log("update project:", response);
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
      <div className={styles.page_title}>Fill The fileds for Plot</div>{" "}
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.form_inner_container}>
          <section className={styles.field_section_wrapper}>
            <RadioNumbers
              sectionTitle="Availability Status"
              control={control}
              name="projectStatus"
              options={availabilityStatus}
            />
          </section>
          <section className={styles.field_section_wrapper}>
            <RadioNumbers
              sectionTitle="Possession By"
              control={control}
              name="plotPossession"
              options={plotPossionTime}
            />
          </section>
          <section className={styles.field_section_wrapper}>
            <RadioNumbers
              sectionTitle="No. of Open Side"
              control={control}
              name="plotOpenSide"
              options={plotOpenSide}
            />
          </section>

          <section className={styles.field_section_wrapper}>
            <ProjectLocation control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <PlotArea control={control} errors={errors} />
          </section>
          <section className={styles.field_section_wrapper}>
            <PlotOfficalDetails control={control} errors={errors} />
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
