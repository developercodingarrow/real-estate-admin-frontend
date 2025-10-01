import React from "react";
import { cookies } from "next/headers";
import { API_BASE_URL } from "@/config";
import NotDataFound from "@/src/components/errorpages/NotDataFound";
import Teamwarpper from "./warpper";

export default async function Teampage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  let data;
  try {
    const response = await fetch(`${API_BASE_URL}/auth/allTeamMember`, {
      method: "GET", // GET request to fetch the blog
      credentials: "include", // Include cookies in the request
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json", // Ensure this is set to JSON
      },
      next: { revalidate: 1 }, // ✅ revalidate after 1 day (24h)
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
      <Teamwarpper dataList={data} />
    </div>
  );
}
