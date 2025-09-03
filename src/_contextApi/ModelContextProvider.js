"use client";
import { createContext, useCallback, useRef, useState } from "react";

export const ModelsContext = createContext();

export default function ModelContextProvider({ children }) {
  const [isCreatedOpen, setisCreatedOpen] = useState(false);

  const handelCloseCreatedModel = useCallback(() => {
    setisCreatedOpen(false);
  }, []);

  return (
    <ModelsContext.Provider
      value={{
        isCreatedOpen,
        setisCreatedOpen,
        handelCloseCreatedModel,
      }}
    >
      {children}
    </ModelsContext.Provider>
  );
}
