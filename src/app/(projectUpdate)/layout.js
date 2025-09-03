import "../globals.css";
import React from "react";
import MainLayout from "@/src/components/layouts/MainLayout";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { APP_NAME } from "@/config";

export const metadata = {
  title: `${APP_NAME}`,
  description: "Create and manage real estate projects easily.",
};

export default function Updatelayout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <MainLayout>{children}</MainLayout>
      </AppContextProvider>
    </div>
  );
}
