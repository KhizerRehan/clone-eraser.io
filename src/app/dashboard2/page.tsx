"use client";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Dashboard2Page() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log("Dashboard-2: user", user);
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(isAuthenticated);
  return isAuthenticated ? (
    <div>
      <h1>Dashboard</h1>
      <Button>
        <LogoutLink>Log out</LogoutLink>
      </Button>
    </div>
  ) : (
    <LoginLink>Log In</LoginLink>
  );
}
