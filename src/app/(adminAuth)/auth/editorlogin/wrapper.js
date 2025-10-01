import React from "react";
import { otpEditorLoginAction } from "@/src/app/utils/authActions";
import AuthUi from "@/src/components/authComponent/AuthUi";

export default function EdtorLoginwrapper() {
  return (
    <div>
      <AuthUi handellogin={otpEditorLoginAction} loginFor="Editor" />
    </div>
  );
}
