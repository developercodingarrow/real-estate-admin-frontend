"use client";
import { createContext, useCallback, useRef, useState } from "react";

export const ModelsContext = createContext();

export default function ModelContextProvider({ children }) {
  const [isCreatedOpen, setisCreatedOpen] = useState(false);
  const [isDeleteOpen, setisDeleteOpen] = useState(false);
  const [idForDelete, setidForDelete] = useState(null);

  const handelCloseCreatedModel = useCallback(() => {
    setisCreatedOpen(false);
  }, []);

  const handelCloseDeleteModel = useCallback(() => {
    setisDeleteOpen(false);
  }, []);

  const handelOpenDeleteModel = (itemId) => {
    setisDeleteOpen(true);
    setidForDelete(itemId);
  };

  return (
    <ModelsContext.Provider
      value={{
        isCreatedOpen,
        setisCreatedOpen,
        handelCloseCreatedModel,
        isDeleteOpen,
        setisDeleteOpen,
        handelCloseDeleteModel,
        handelOpenDeleteModel,
        idForDelete,
      }}
    >
      {children}
    </ModelsContext.Provider>
  );
}
