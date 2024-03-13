"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import React, { useEffect } from "react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const convex = useConvex();
  const router = useRouter();
  const { user }: any = useKindeBrowserClient();

  useEffect(() => {
    if (user) {
      debugger;
      checkTeam();
    }
  }, []);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeams, {
      email: user?.email,
    });
    console.log("Teams", result);
    if (!result.length) {
      router.push("/teams/create");
    }
  };

  return (
    <div>
      Dashboard Layout
      {children}
    </div>
  );
}

export default DashboardLayout;
