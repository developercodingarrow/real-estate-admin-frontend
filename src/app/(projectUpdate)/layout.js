import "../globals.css";
import React from "react";
import MainLayout from "@/src/components/layouts/MainLayout";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { APP_NAME } from "@/config";
import ApiDataContextProvider from "@/src/_contextApi/ApiDataContextProvider";
import { StepperProvider } from "@/src/_contextApi/StepperProvider";

export const metadata = {
  title: `${APP_NAME}`,
  description: "Create and manage real estate projects easily.",
};

export default function Updatelayout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <ApiDataContextProvider>
          <StepperProvider>
            <MainLayout>{children}</MainLayout>
          </StepperProvider>
        </ApiDataContextProvider>
      </AppContextProvider>
    </div>
  );
}
