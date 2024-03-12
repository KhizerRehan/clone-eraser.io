"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { useConvex, useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function SkipQuery() {
  const { user }: any = useKindeBrowserClient();

  const convex = useConvex();
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, { email: user?.email });

    if (!result.length) {
      createUser({
        name: user.given_name,
        email: user.email,
        image: user.picture,
      }).then((resp) => {
        console.log("ConvexDB Inserted User");
      });
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Button>
        <LogoutLink>Log out</LogoutLink>
      </Button>
    </div>
  );
}
