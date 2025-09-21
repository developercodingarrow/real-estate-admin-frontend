import React from "react";
import { cookies } from "next/headers";
import { API_BASE_URL } from "@/config";
import HomePagewrapper from "./wrapper";

export default async function Homepage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;

  let overallStats = null;
  let projectStats = null;
  let PublishStats = null;
  let amnitiesStats = null;
  let enquireStats = null;

  try {
    const [
      overallRes,
      projectRes,
      PublishStatsRes,
      amnitiesStatRes,
      enquireStatRes,
    ] = await Promise.all([
      fetch(`${API_BASE_URL}/stats/overallStats`, {
        method: "GET",
        headers: { Authorization: `Bearer ${authToken}` },
        next: { revalidate: 10 },
      }),
      fetch(`${API_BASE_URL}/stats/projectStats`, {
        method: "GET",
        headers: { Authorization: `Bearer ${authToken}` },
        next: { revalidate: 10 },
      }),
      fetch(`${API_BASE_URL}/stats/ProjectPublishStats`, {
        method: "GET",
        headers: { Authorization: `Bearer ${authToken}` },
        next: { revalidate: 10 },
      }),
      fetch(`${API_BASE_URL}/stats/amenityStats`, {
        method: "GET",
        headers: { Authorization: `Bearer ${authToken}` },
        next: { revalidate: 10 },
      }),
      fetch(`${API_BASE_URL}/stats/enquirestats`, {
        method: "GET",
        headers: { Authorization: `Bearer ${authToken}` },
        next: { revalidate: 10 },
      }),
    ]);

    if (overallRes.ok) {
      const parsed = await overallRes.json();
      if (parsed.status === "success") overallStats = parsed.data;
    }

    if (projectRes.ok) {
      const parsed = await projectRes.json();
      if (parsed.status === "success") projectStats = parsed.data;
    }
    if (PublishStatsRes.ok) {
      const parsed = await PublishStatsRes.json();
      if (parsed.status === "success") PublishStats = parsed.data;
    }
    if (amnitiesStatRes.ok) {
      const parsed = await amnitiesStatRes.json();
      if (parsed.status === "success") amnitiesStats = parsed.data;
    }
    if (enquireStatRes.ok) {
      const parsed = await enquireStatRes.json();
      if (parsed.status === "success") enquireStats = parsed.data;
    }
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw new Error(`Failed to fetch data: ${error}`);
  }

  return (
    <div>
      <HomePagewrapper
        overallStats={overallStats}
        projectStats={projectStats}
        PublishStats={PublishStats}
        amnitiesStats={amnitiesStats}
        enquireStats={enquireStats}
      />
    </div>
  );
}
