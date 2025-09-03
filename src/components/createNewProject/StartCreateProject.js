"use client";
import React, { useContext, useState } from "react";
import styles from "./css/createproject.module.css";
import { useForm } from "react-hook-form";
import CustomeHookRadioBtn from "../inputsElements/CustomeHookRadioBtn";
import {
  residentialOptions,
  commercialOptions,
} from "@/src/jsonData/projectFiledsData";
import { createProjectAction } from "@/src/app/utils/projectActions";
import CreateStaticBox from "../startCreate/CreateStaticBox";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
import CreatedModel from "../models/CreatedModel";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";

export default function StartCreateProject() {
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { isCreatedOpen, setisCreatedOpen, handelCloseCreatedModel } =
    useContext(ModelsContext);
  const [createdProjectId, setcreatedProjectId] = useState(null);
  const [updatePageLink, setupdatePageLink] = useState(null);
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      propertyCategory: "",
      propertyType: "",
    },
  });

  // ✅ Watch propertyCategory
  const propertyCategory = watch("propertyCategory");

  const onSubmit = async (data) => {
    console.log("SellApartment form data:", data);
    setisBtnLoading(true);
    try {
      const response = await createProjectAction(data);
      if (response.error) {
        console.error("Error creating project:", response.error);
        setisBtnLoading(false);
      }
      if (response.data.status === "success") {
        const result = response.data.data;
        console.log("Create Project Action Response:", response.data.data);
        setisBtnLoading(false);
        setupdatePageLink(
          `${result.lookingFor}/${result.propertyCategory}/${result.propertyType}/${result._id}`
        );
        console.log(
          `${result.lookingFor}/${result.propertyCategory}/${result.propertyType}/${result._id}`
        );

        setisCreatedOpen(true);
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setisBtnLoading(false);
    }
  };

  return (
    <div className={styles.main_container}>
      <CreatedModel nextLink={updatePageLink} />
      <div className={styles.inner_container}>
        <div className={styles.left_column}>
          <div className={styles.page_title}>
            Welcome Back Admin, Fill out basic details
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Looking For */}
            <section className={styles.section_container}>
              <div className={styles.radio_options_title}>
                What you are looking for
              </div>
              <div className={styles.inline_custome_radion_wrapper}>
                <CustomeHookRadioBtn
                  control={control}
                  name="lookingFor"
                  rules={{ required: "Please select one" }}
                  options={[
                    { value: "sell", label: "Sell" },
                    { value: "rent", label: "Rent/Lease" },
                  ]}
                  radioStyle="pill"
                  size="medium"
                  color="#0078db"
                />
                {errors.lookingFor && (
                  <p className={styles.error_text}>
                    {errors.lookingFor.message}
                  </p>
                )}
              </div>
            </section>

            {/* Property Category */}
            <section className={styles.section_container}>
              <div className={styles.radio_options_title}>
                What kind of property do you have
              </div>
              <div className={styles.inline_custome_radion_wrapper}>
                <CustomeHookRadioBtn
                  control={control}
                  name="propertyCategory"
                  rules={{ required: "Please select one" }}
                  options={[
                    { value: "residential", label: "Residential" },
                    { value: "commercial", label: "Commercial" },
                  ]}
                  radioStyle="pill"
                  size="medium"
                  color="#0078db"
                />
                {errors.propertyCategory && (
                  <p className={styles.error_text}>
                    {errors.propertyCategory.message}
                  </p>
                )}
              </div>
            </section>

            <section className={styles.section_container}>
              <div className={styles.options_wrappe}>
                {propertyCategory === "residential" && (
                  <CustomeHookRadioBtn
                    name="propertyType"
                    label="Residential Type"
                    options={residentialOptions}
                    control={control}
                    errors={errors}
                  />
                )}
              </div>
              <div className={styles.options_wrappe}>
                {propertyCategory === "commercial" && (
                  <CustomeHookRadioBtn
                    name="propertyType"
                    label="Commercial Type"
                    options={commercialOptions}
                    control={control}
                    errors={errors}
                  />
                )}
              </div>
            </section>

            <div className={styles.btn_wrapper}>
              <SubmitBtn
                btnText="Create"
                disabledBtn={!isValid}
                btnLoading={isBtnLoading}
              />
            </div>
          </form>
        </div>
        <div className={styles.right_column}>
          <CreateStaticBox />
        </div>
      </div>
    </div>
  );
}
