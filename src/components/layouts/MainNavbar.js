"use client";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import { LogOutAction } from "@/src/app/utils/authActions";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function MainNavbar() {
  const router = useRouter();
  const [logoutLoading, setlogoutLoading] = useState(false);
  const { authUser } = useContext(AuthContext);
  const useRole = authUser?.role;

  const handelLogOut = async () => {
    try {
      setlogoutLoading(true);
      const res = await LogOutAction();
      console.log(res);
      if (res.status === "success") {
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
        {useRole === "superAdmin" && <h2>Super Admin</h2>}
        {useRole === "admin" && <h2>Admin</h2>}
      </div>
      <div className={styles.btn_style} onClick={handelLogOut}>
        {logoutLoading ? "loading.." : "LOGOUT"}
      </div>
    </div>
  );
}
