import React from "react";
import Image from "next/image";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const MENU = [
  {
    id: 1,
    name: "Join or Create Team",
    path: "/teams/create",
    icon: User,
  },
  {
    id: 1,
    name: "Settngs",
    path: "/settings",
    icon: Settings,
  },
];

interface Props {
  user: any;
}
function SidebarNavTop({ user }: Props) {
  debugger;
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center gap-[16px] hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
          <Image
            src={"/eraser-logo.png"}
            alt="footer logo"
            width={40}
            height={40}
          />
          <h3 className=" font-extrabold text-[15px]">Team Name</h3>
          <ChevronDown />
        </div>
      </PopoverTrigger>
      <PopoverContent className="ml-10 w-[16rem]">
        {/* Teams Section */}
        <div className="pb-2 text-[12px] font-bold">
          <h2>Team Name</h2>
        </div>
        <Separator className="mt-2 bg-slate-100" />
        {/* Actions Section */}
        <div>
          {MENU.map((item, _) => (
            <div
              key={item.id}
              className="cursor-pointer flex items-center gap-2 p-2 text-sm"
            >
              <item.icon className="h-4 w-4" />
              <span className="text-[12px]">{item.name}</span>
            </div>
          ))}

          {/* Logout Button */}
          <Separator className="mb-2 bg-slate-100" />
          <LogoutLink>
            <div className="cursor-pointer flex items-center p-2 text-sm">
              <LogOut className="h-4 w-4" />
              <span className="text-[12px]">Sign Out</span>
            </div>
          </LogoutLink>
        </div>

        {/* User Info Section */}
        <Separator className="mb-2 bg-slate-100" />
        {user && (
          <div className="flex items-center gap-3 pt-2">
            <Image
              src={user?.picture}
              alt={user?.given_name}
              width={30}
              height={30}
              className="rounded-full"
            />

            <div className="text-[12px] flex flex-col">
              <h2 className="font-bold">
                {user?.given_name} {user?.family_name}
              </h2>
              <p className="text-slate-500">{user?.email}</p>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default SidebarNavTop;
