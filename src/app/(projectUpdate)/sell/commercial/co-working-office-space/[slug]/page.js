import React from "react";
import { cookies } from "next/headers";
import { API_BASE_URL } from "@/config";
import SCofficeCoWprkingWrapper from "../wrapper";
import NotDataFound from "@/src/components/errorpages/NotDataFound";

export default async function SCofficeCoWprkingpage({ params }) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const { slug } = params;
  let data;
  try {
    const response = await fetch(
      `${API_BASE_URL}/project/getSingleProject/${slug}`,
      {
        method: "GET", // GET request to fetch the blog
        credentials: "include", // Include cookies in the request
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json", // Ensure this is set to JSON
        },
        cache: "no-store",
      }
    );

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

  console.log("apia data for office--", data);

  return (
    <div>
      <SCofficeCoWprkingWrapper data={data} slug={slug} />
    </div>
  );
}
