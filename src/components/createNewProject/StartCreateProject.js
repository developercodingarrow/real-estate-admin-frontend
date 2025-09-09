"use client";
import React, { useContext, useState } from "react";
import dynamicImport from "next/dynamic";
import styles from "./css/createproject.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useForm } from "react-hook-form";
import CustomeHookRadioBtn from "../inputsElements/CustomeHookRadioBtn";
import {
  residentialOptions,
  commercialOptions,
} from "@/src/jsonData/projectFiledsData";
import { createProjectAction } from "@/src/app/utils/projectActions";

import SubmitBtn from "../elements/buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
import { ModelsContext } from "@/src/_contextApi/ModelContextProvider";
import CreateStaticBox from "./CreateStaticBox";
import ComponentLoading from "../loading/ComponentLoading";

const CreatedModel = dynamicImport(() => import("../models/CreatedModel"), {
  ssr: false, // ensures it only loads on client side
  loading: () => (
    <div className="dynimic_model_wrapper">
      <ComponentLoading />
    </div>
  ), // optional fallback
});

export default function StartCreateProject() {
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { isCreatedOpen, setisCreatedOpen, handelCloseCreatedModel } =
    useContext(ModelsContext);
  // const [createdProjectId, setcreatedProjectId] = useState(null);
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
      lookingFor: "",
      propertyCategory: "",
      propertyType: "",
    },
  });

  // ✅ Watch propertyCategory
  const propertyCategory = watch("propertyCategory");

  // Create new Project
  const onSubmit = async (data) => {
    setisBtnLoading(true);
    try {
      const response = await createProjectAction(data);

      if (response.status === "Fails") {
        toast.error(response.message);
        setisBtnLoading(false);
        return;
      }

      if (response.status === "success") {
        const result = response.data;
        setisBtnLoading(false);
        setupdatePageLink(
          `${result.lookingFor}/${result.propertyCategory}/${result.propertyType}/${result._id}`
        );

        setisCreatedOpen(true);
      }
    } catch (error) {
      toast.error("Something went wrong...!");
      setisBtnLoading(false);
    }
  };

  return (
    <div className={styles.main_container}>
      <ToastContainer />
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
              {propertyCategory === "residential" && (
                <div className={styles.options_wrappe}>
                  <CustomeHookRadioBtn
                    name="propertyType"
                    label="Residential Type"
                    options={residentialOptions}
                    control={control}
                    errors={errors}
                    rules={{ required: "Property type is required" }}
                  />
                </div>
              )}
              {propertyCategory === "commercial" && (
                <div className={styles.options_wrappe}>
                  <CustomeHookRadioBtn
                    name="propertyType"
                    label="Commercial Type"
                    options={commercialOptions}
                    control={control}
                    errors={errors}
                    rules={{ required: "Property type is required" }}
                  />
                </div>
              )}
            </section>

            <div className={styles.btn_wrapper}>
              <SubmitBtn
                btnText="Create"
                disabledBtn={!isValid}
                btnLoading={isBtnLoading}
                size="medium"
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
