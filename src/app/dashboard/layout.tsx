"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import React, { useEffect } from "react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import SideBar from "./_components/SideBar";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const convex = useConvex();
  const router = useRouter();
  const { user }: any = useKindeBrowserClient();

  useEffect(() => {
    if (user) {
      checkTeam();
    }
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeams, {
      email: user?.email,
    });
    console.log("Existing Teams", result);
    if (!result.length) {
      router.push("/teams/create");
    }
  };

  return (
    <div>
      <section className="grid grid-cols-4">
        <aside className="h-screen bg-gray-100 w-72 border-black-200 border-r">
          <SideBar />
        </aside>
        <main className="bg-sky-400 grid-cols-3">{children}</main>
      </section>
    </div>
  );
}

export default DashboardLayout;
