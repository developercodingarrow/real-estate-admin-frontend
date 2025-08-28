import "../globals.css";
import MainLayout from "@/src/components/layouts/MainLayout";

import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";

export default function Createlayout({ children }) {
  return (
    <div>
      <AppContextProvider>
        <MainLayout>{children}</MainLayout>
      </AppContextProvider>
    </div>
  );
}
