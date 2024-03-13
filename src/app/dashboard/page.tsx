"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function DashboardPage() {
  const { user }: any = useKindeBrowserClient();
  const getUser = useQuery(api.user.getUser, { email: user?.email });
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      console.log("Kinde User:", user);

      if (getUser === undefined || getUser === null) {
        createUser({
          name: user.given_name,
          email: user.email,
          image: user.picture,
        }).then((resp) => {
          console.log("ConvexDB Inserted User");
        });
      } else {
        console.log("ConvexDB GetUser", getUser);
      }
    }
  }, [user]);

  return (
    <div>
      <Button>
        <LogoutLink>Log out</LogoutLink>
      </Button>
    </div>
  );
}
