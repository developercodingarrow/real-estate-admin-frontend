import OtpVerficationUi from "@/src/components/authComponent/OtpVerficationUi";
import React from "react";

export default function LoginOtpwrapper(props) {
  const { slug } = props;
  return (
    <div>
      <OtpVerficationUi slug={slug} />
    </div>
  );
}
