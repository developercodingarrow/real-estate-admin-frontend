import MainLayout from "@/src/components/layouts/MainLayout";
import "../globals.css";
import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";
import PageLoading from "@/src/components/loading/PageLoading";

export default function layout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <PageLoading />
        <MainLayout>{children}</MainLayout>
      </AppContextProvider>
    </div>
  );
}
