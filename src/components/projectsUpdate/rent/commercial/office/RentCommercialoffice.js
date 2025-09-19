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
import OfficeSetupDetails from "../../../commanProjectFileds/OfficeSetupDetails";
import PriceDetails from "../../../commanProjectFileds/PriceDetails";
import { useParams, useRouter } from "next/navigation";
export default function RentCommercialoffice(props) {
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
      city: "",
      location: "",
      address: "",
      projectStatus: "",
      carpetArea: "",
      builtUpArea: "",
      superBuiltUpArea: "",
      noOfFloors: "",
      propertyOnFloor: "",
      officeCabines: "",
      officeMiniSeats: "",
      rent: "",
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
        officeMiniSeats: apiData.officeMiniSeats || "",
        officeCabines: apiData.officeCabines || "",
        rent: apiData.rent ? String(apiData.rent) : "",
      });
    }
  }, [apiData, reset]);

  const handelsubmit = async (data) => {
    try {
      setisBtnLoading(true);
      const response = await updateProjectAction(data, slug);
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
      <div className={styles.page_title}>Fill The Required fileds </div>
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.form_inner_container}>
          <section className={styles.field_section_wrapper}>
            <ProjectLocation control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <ProjectArea control={control} errors={errors} />
          </section>
          <section>
            <RadioNumbers
              sectionTitle="Availability Status"
              control={control}
              name="projectStatus"
              options={availabilityStatus}
            />
          </section>

          <section className={styles.field_section_wrapper}>
            <OfficeSetupDetails control={control} errors={errors} />
          </section>

          <section className={styles.field_section_wrapper}>
            <div className={styles.flex_column}>
              <PriceDetails control={control} errors={errors} />
              <FloorDetails control={control} errors={errors} />
            </div>
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
