"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("error-", error);
  }, [error]);

  return (
    <div className="error_container">
      <div className="error_icon">⚠️</div>
      <h1 className="error_title">Oops! Something went wrong</h1>
      <p className="error_message">
        An unexpected error occurred. Please try again or contact support if the
        problem persists.
      </p>
      <div className="error_actions">
        <button onClick={reset} className="error_btn retry-btn">
          Retry
        </button>
        <Link href="/" className="error_btn home_btn">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
