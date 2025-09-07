import React from "react";
import "../globals.css";
import AppContextProvider from "@/src/_contextApi/AppContext";
import PageLoading from "@/src/components/loading/PageLoading";
import AuthNavbar from "@/src/components/authNavbar/AuthNavbar";

export default function AuthMainlayout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <PageLoading />
        <AuthNavbar />
        <div className="authMainLayout_wrapper">{children}</div>
      </AppContextProvider>
    </div>
  );
}
