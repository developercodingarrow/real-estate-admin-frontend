"use client";
import React, { useContext, useState } from "react";
import styles from "./authUi.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import { loginotpVerfication } from "@/src/app/utils/authActions";
import { AppContext } from "@/src/_contextApi/AppContext";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

export default function OtpVerficationUi(props) {
  const router = useRouter();
  const { slug } = props;
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
      otp: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setisBtnLoading(true);
      const res = await loginotpVerfication(data, slug);
      if (res.status === "Fails" || res.error) {
        toast.error(res.message);
        setisBtnLoading(false);
        return;
      }
      console.log("test refresh---", res);
      if (res.status === "success") {
        setisBtnLoading(false);
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setisBtnLoading(false);
    }
  };
  return (
    <div className={styles.main_container}>
      <ToastContainer />
      <div className={styles.center_container}>
        <div className={styles.form_header}>
          <div className={styles.form_heading}>
            <h1>OTP </h1>
          </div>
          <div className={styles.form_subHeading}>
            Please check your mail enter that otp for secure login
          </div>
        </div>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input_wrapper}>
              <input
                type="number"
                name="otp"
                placeholder="Enter your 6 digit otp for login"
                className={styles.inputStyle}
                {...register("otp", {
                  required: "OTP is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                  minLength: {
                    value: 6,
                    message: "6 digits OTP required",
                  },
                  maxLength: {
                    value: 6,
                    message: "6 digits OTP allowed",
                  },
                })}
              />
              {errors.otp && (
                <p className={styles.errorMsg}>{errors.otp.message}</p>
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
