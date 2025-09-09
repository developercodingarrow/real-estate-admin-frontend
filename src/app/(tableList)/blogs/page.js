import React from "react";
import BlogListwrapper from "./wrapper";
import { API_BASE_URL } from "@/config";

export default async function BlogListpage() {
  let data;
  try {
    const response = await fetch(`${API_BASE_URL}/blog/allBlogs`, {
      method: "GET", // GET request to fetch the blog
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/json", // Ensure this is set to JSON
      },
      cache: "no-store",
    });

    if (response.status === 404) {
      return <NotDataFound />;
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
      <BlogListwrapper dataList={data} />
    </div>
  );
}
