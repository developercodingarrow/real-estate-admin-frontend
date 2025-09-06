"use client";
import React, { useContext, useEffect, useState, useRef, use } from "react";
import styles from "./addkeywords.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useForm } from "react-hook-form";
import CustomeHookInput from "../inputsElements/CustomeHookInput";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import { updateProjectAction } from "@/src/app/utils/projectActions";
import { AppContext } from "@/src/_contextApi/AppContext";
export default function SlugUpdate(props) {
  const { apiData, handelUpdate } = props;
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const {
    control, // add this
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange", // CHANGED to onChange for real-time validation
    reValidateMode: "onChange", // CHANGED to onChange for real-time validation
    defaultValues: {
      slug: "",
    },
  });

  useEffect(() => {
    if (apiData) {
      reset({
        slug: apiData.slug || "",
      });
    }
  }, [apiData, reset]);

  const handelsubmit = async (data) => {
    handelUpdate(data);
  };
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(handelsubmit)}>
        <div className={styles.section_container}>
          <CustomeHookInput
            inputPlaceholder="slug"
            type="text"
            name="slug"
            control={control}
            register={register}
            rules={{
              required: "slug is required",
            }}
            error={errors.slug?.message}
          />
        </div>

        <div className={styles.updateBtn_wrapper}>
          <SubmitBtn btnText="update" btnLoading={isBtnLoading} />
        </div>
      </form>
    </div>
  );
}
