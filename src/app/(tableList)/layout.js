import "../globals.css";
import MainLayout from "@/src/components/layouts/MainLayout";

import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";
import FillterContextProvider from "@/src/_contextApi/FillterContextProvider";
import ModelContextProvider from "@/src/_contextApi/ModelContextProvider";

export default function Listlayout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <ModelContextProvider>
          <FillterContextProvider>
            <MainLayout>{children}</MainLayout>
          </FillterContextProvider>
        </ModelContextProvider>
      </AppContextProvider>
    </div>
  );
}
