import React from "react";
import styles from "./errorpage.module.css";
import Link from "next/link";
export default function NotDataFound(props) {
  const {
    msg = "Sorry, the page you’re looking for doesn’t exist or has been moved.",
  } = props;
  return (
    <div className={styles.notfoundContainer}>
      <div className={styles.icon}>🔍</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>{msg}</p>
      <Link href="/" className={styles.homeBtn}>
        Go Back to Home
      </Link>
    </div>
  );
}
