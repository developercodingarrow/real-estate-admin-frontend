import "../globals.css";
import MainLayout from "@/src/components/layouts/MainLayout";

import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";
import FillterContextProvider from "@/src/_contextApi/FillterContextProvider";

export default function Listlayout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <FillterContextProvider>
          <MainLayout>{children}</MainLayout>
        </FillterContextProvider>
      </AppContextProvider>
    </div>
  );
}
