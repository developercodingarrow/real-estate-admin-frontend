"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./fillterbarcreate.module.css";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
import { amenitiesTypeOption } from "@/src/jsonData/amnitiesData";
import CustomeHookSelector from "../inputsElements/CustomeHookSelector";
import { Controller } from "react-hook-form";

export default function AmanitiesBarCreate(props) {
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const { inputPlaceholder = "create new", handelCreate } = props;
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: "onChange", // validate as the user types
    reValidateMode: "onChange",
    defaultValues: {
      propertyType: "",
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
          <div>
            <Controller
              name="propertyType"
              control={control}
              rules={{ required: "Project builder is required" }}
              render={({ field, fieldState }) => (
                <CustomeHookSelector
                  name={field.name}
                  options={amenitiesTypeOption}
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
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
              size="medium"
              btnLoading={isBtnLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
