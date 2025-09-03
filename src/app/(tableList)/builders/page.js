import React from "react";
import Builderswrapper from "./wrapper";
import { API_BASE_URL } from "@/config";

export default async function Builderspage() {
  let data;
  try {
    const response = await fetch(`${API_BASE_URL}/builder/allBuilder`, {
      method: "GET", // GET request to fetch the blog
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/json", // Ensure this is set to JSON
      },
      cache: "no-store",
    });

    if (response.status === 404) {
      return "not found";
    }

    if (response.status === 200) {
      const initalData = await response.json();
      if (initalData.status == "success") {
        data = initalData.data;
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    data = null;
    throw new Error(`Failed to fetch data: ${error}`);
  }

  return (
    <div>
      <Builderswrapper dataList={data} />{" "}
    </div>
  );
}
