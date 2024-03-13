import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateTeam() {
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
          />
        </div>
        <Button className="bg-blue-500 hover:bg-blue-400 w-[30%] mt-5">
          Create Team
        </Button>
      </div>
    </div>
  );
}
