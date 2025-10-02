"use client";
import React, { useContext, useState } from "react";
import styles from "./authUi.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useForm } from "react-hook-form";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";

import { useParams, useRouter } from "next/navigation";

export default function AuthUi(props) {
  const { loginFor, handellogin } = props;
  const router = useRouter();
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
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
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setisBtnLoading(true);
      const res = await handellogin(data);

      if (res.status === "Fails" || res.error) {
        toast.error(res.message || res.error);
        setisBtnLoading(false);
        return;
      }
      if (res.status == "success") {
        setisBtnLoading(false);
        toast.success(res.message);
        router.push(`/auth/otpverification/${res.UrlToken}`);
      }
    } catch (error) {
      toast.error("Something went wrong...!");
      setisBtnLoading(false);
    }
  };

  return (
    <div className={styles.main_container}>
      <ToastContainer />
      <div className={styles.center_container}>
        <div className={styles.form_header}>
          <div className={styles.form_heading}>
            <h1> {loginFor} Login In </h1>
          </div>
          <div className={styles.form_subHeading}>
            Welcome back! Please enter your register e-mail
          </div>
        </div>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input_wrapper}>
              <input
                type="text"
                name="email"
                placeholder="Enter your E-mail Addres *"
                className={styles.inputStyle}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className={styles.errorMsg}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.form_submitBtn_wrapper}>
              <SubmitBtn
                btnText="Login"
                fullWidth={true}
                size="large"
                btnLoading={isBtnLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
