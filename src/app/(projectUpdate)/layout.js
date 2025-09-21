import "../globals.css";
import React from "react";
import MainLayout from "@/src/components/layouts/MainLayout";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { APP_NAME } from "@/config";
import ApiDataContextProvider from "@/src/_contextApi/ApiDataContextProvider";
import { StepperProvider } from "@/src/_contextApi/StepperProvider";
import AuthContextProvider from "@/src/_contextApi/authContext";
import { getUserAuthantication } from "../lib/authentication";

export const metadata = {
  title: `${APP_NAME}`,
  description: "Create and manage real estate projects easily.",
};

export default async function Updatelayout({ children }) {
  const userDetails = await getUserAuthantication();
  return (
    <div>
      <AppContextProvider>
        <AuthContextProvider authData={userDetails}>
          <ApiDataContextProvider>
            <StepperProvider>
              <MainLayout>{children}</MainLayout>
            </StepperProvider>
          </ApiDataContextProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </div>
  );
}
