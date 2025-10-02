"use client";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const [isBtnLoading, setisBtnLoading] = useState(false);

  const handelToggleAsidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarCollapsed,
        setIsSidebarCollapsed,
        handelToggleAsidebar,

        isBtnLoading,
        setisBtnLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
