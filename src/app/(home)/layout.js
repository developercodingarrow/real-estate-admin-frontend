import MainLayout from "@/src/components/layouts/MainLayout";
import "../globals.css";
import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";

export default function layout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <MainLayout>{children}</MainLayout>
      </AppContextProvider>
    </div>
  );
}
