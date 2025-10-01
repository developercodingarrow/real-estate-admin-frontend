import { otpAdminLoginAction } from "@/src/app/utils/authActions";
import AuthUi from "@/src/components/authComponent/AuthUi";
import React from "react";

export default function AdminLoginwarpper() {
  return (
    <div>
      <AuthUi handellogin={otpAdminLoginAction} loginFor="Admin" />
    </div>
  );
}
