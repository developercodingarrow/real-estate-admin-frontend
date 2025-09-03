"use client";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isPageLoading, setisPageLoading] = useState(false);
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
        isPageLoading,
        setisPageLoading,
        isBtnLoading,
        setisBtnLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
