import React from "react";
import styles from "./authnavbar.module.css";
import navlogo from "../../../public/web-img/Company-Logo-500X500-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
export default function AuthNavbar() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <Link href={"/"} className={styles.navLogo_wrapper}>
          <Image
            src={navlogo}
            width={700}
            height={700}
            alt="saransh-realtors logo"
            className={styles.imgStyle}
          />
        </Link>
        <div className={styles.login_links}>
          <Link href={"/auth/adminlogin"}>Admin Login</Link>
          <Link href={"/auth/editorlogin"}>Editor Login</Link>
        </div>
      </div>
    </div>
  );
}
