"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./fillterbarcreate.module.css";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
export default function FillterBarCreate(props) {
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { inputPlaceholder = "create new", handelCreate } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: "onChange", // validate as the user types
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data) => {
    if (handelCreate) {
      handelCreate(data); // call parent callback if provided
    }
    reset(); // clear input after submit
  };

  return (
    <div className={styles.main_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inner_container}>
          <div className={styles.inputs_wrapper}>
            <div className={styles.input_field}>
              <input
                type="text"
                name="name"
                placeholder={inputPlaceholder}
                className={styles.inputStyle}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
          </div>
          <div>
            <SubmitBtn
              btnText="create New"
              size="small"
              btnLoading={isBtnLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
