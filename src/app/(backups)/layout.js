import MainLayout from "@/src/components/layouts/MainLayout";
import "../globals.css";
import React from "react";
import AppContextProvider from "@/src/_contextApi/AppContext";
import AuthContextProvider from "@/src/_contextApi/authContext";
import { getUserAuthantication } from "../lib/authentication";

export default async function layout({ children }) {
  const userDetails = await getUserAuthantication();
  return (
    <div>
      <AppContextProvider>
        <AuthContextProvider authData={userDetails}>
          <MainLayout>{children}</MainLayout>
        </AuthContextProvider>
      </AppContextProvider>
    </div>
  );
}
