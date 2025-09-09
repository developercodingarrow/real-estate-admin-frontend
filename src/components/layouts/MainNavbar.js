"use client";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import { LogOutAction } from "@/src/app/utils/authActions";
import { useRouter } from "next/navigation";

export default function MainNavbar() {
  const router = useRouter();
  const [logoutLoading, setlogoutLoading] = useState(false);

  const handelLogOut = async () => {
    try {
      setlogoutLoading(true);
      const res = await LogOutAction();
      if (res.data.status === "success") {
        router.refresh();
        router.push("/auth/login");
        setlogoutLoading(false);
      }
    } catch (error) {
      console.log(error);
      setlogoutLoading(false);
    }
  };
  return (
    <div className={styles.main_container}>
      <div className="">
        <h2>Home</h2>
      </div>
      <div className={styles.btn_style} onClick={handelLogOut}>
        {logoutLoading ? "loading.." : "LOGOUT"}
      </div>
    </div>
  );
}
