"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const createTeam = useMutation(api.teams.createTeam);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((resp) => {
      console.log("Team is Created");
      toast({
        title: "Team",
        description: "team created successfully",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);
    });
  };
  return (
    <div className="px-10 py-5 md:p-16">
      <Image
        src={"/eraser-logo.png"}
        alt="footer logo"
        width={120}
        height={120}
      />

      <div className="flex flex-col items-center mt-8">
        <h2 className="text-gray-700 font-bold text-[35px] py-2">
          What should we call your team?
        </h2>
        <h3 className="text-gray-500 text-[15px]">
          You can always change team name later from settings pages.
        </h3>

        <div className="mt-10 w-[50%]">
          <label className="text-gray-600">Email</label>
          <Input
            className="mt-3"
            type="email"
            placeholder="Enter Team Name..."
            onChange={(e: Event | any) => {
              const value = (e.target as HTMLInputElement).value;
              setTeamName(value);
            }}
          />
        </div>
        <Button
          className="bg-blue-500 hover:bg-blue-600 w-[30%] mt-5"
          disabled={!(teamName && teamName?.length > 0)}
          onClick={createNewTeam}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}
