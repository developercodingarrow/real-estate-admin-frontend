import AuthUi from "@/src/components/authComponent/AuthUi";
import React from "react";
import { otpLoginAction } from "@/src/app/utils/authActions";
export default function LoginPagewrapper() {
  return (
    <div>
      <AuthUi handellogin={otpLoginAction} loginFor="SuperAdmin" />
    </div>
  );
}
