"use client";
import React, { useContext } from "react";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function PageLoading() {
  const { isPageLoading } = useContext(AppContext);

  if (!isPageLoading) return null;
  return (
    <div
      className={`pageLoader_Maincontainer ${isPageLoading ? "active" : ""}`}
    >
      {isPageLoading && <div className="loader"></div>}
    </div>
  );
}
