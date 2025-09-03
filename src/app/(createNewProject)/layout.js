import "../globals.css";
import MainLayout from "@/src/components/layouts/MainLayout";

import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { APP_NAME } from "@/config";
import ModelContextProvider from "@/src/_contextApi/ModelContextProvider";

export const metadata = {
  title: `${APP_NAME}`,
  description: "Create and manage real estate projects easily.",
};

export default function Createlayout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <ModelContextProvider>
          <MainLayout>{children}</MainLayout>
        </ModelContextProvider>
      </AppContextProvider>
    </div>
  );
}
