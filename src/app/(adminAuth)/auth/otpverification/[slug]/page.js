"use client";
import React from "react";
import LoginOtpwrapper from "../wrapper";

export default function LoginOtpVerification({ params }) {
  const { slug } = params;
  return (
    <div>
      <LoginOtpwrapper slug={slug} />
    </div>
  );
}
