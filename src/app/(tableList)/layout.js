import "../globals.css";
import MainLayout from "@/src/components/layouts/MainLayout";

import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";
import FillterContextProvider from "@/src/_contextApi/FillterContextProvider";
import ModelContextProvider from "@/src/_contextApi/ModelContextProvider";
import { getUserAuthantication } from "../lib/authentication";
import AuthContextProvider from "@/src/_contextApi/authContext";

export default async function Listlayout({ children }) {
  const userDetails = await getUserAuthantication();

  return (
    <div>
      <AppContextProvider>
        <AuthContextProvider authData={userDetails}>
          <ModelContextProvider>
            <FillterContextProvider>
              <MainLayout>{children}</MainLayout>
            </FillterContextProvider>
          </ModelContextProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </div>
  );
}
