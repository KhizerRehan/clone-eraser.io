"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
export default function DashboardPage() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log("Dashboard-1 user", user);
  }, [user]);

  return (
    <div>
      <h1>Dashboard</h1>
      <Button>
        <LogoutLink>Log out</LogoutLink>
      </Button>
    </div>
  );
}
