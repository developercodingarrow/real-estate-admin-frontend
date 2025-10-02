"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./fillterbarcreate.module.css";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
import CustomeHookSelector from "../inputsElements/CustomeHookSelector";
import { Controller } from "react-hook-form";
import { TeamRoleOption } from "@/src/jsonData/teamData";

export default function TeamBarCreate(props) {
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
      role: "",
      name: "",
      email: "",
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
              name="role"
              control={control}
              rules={{ required: "Team Role is Required" }}
              render={({ field, fieldState }) => (
                <CustomeHookSelector
                  name={field.name}
                  options={TeamRoleOption}
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
                placeholder="enter name"
                className={styles.inputStyle}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
          </div>

          <div className={styles.inputs_wrapper}>
            <div className={styles.input_field}>
              <input
                type="text"
                name="email"
                placeholder="enter email"
                className={styles.inputStyle}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email regex
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className={styles.team_create_btn_wrapper}>
            <SubmitBtn btnText="Add" size="medium" btnLoading={isBtnLoading} />
          </div>
        </div>
      </form>
    </div>
  );
}
