import "../globals.css";
import MainLayout from "@/src/components/layouts/MainLayout";

import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { APP_NAME } from "@/config";
import ModelContextProvider from "@/src/_contextApi/ModelContextProvider";
import AuthContextProvider from "@/src/_contextApi/authContext";
import { getUserAuthantication } from "../lib/authentication";

export const metadata = {
  title: `${APP_NAME}`,
  description: "Create and manage real estate projects easily.",
};

export default async function Createlayout({ children }) {
  const userDetails = await getUserAuthantication();
  return (
    <div>
      <AppContextProvider>
        <AuthContextProvider authData={userDetails}>
          <ModelContextProvider>
            <MainLayout>{children}</MainLayout>
          </ModelContextProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </div>
  );
}
