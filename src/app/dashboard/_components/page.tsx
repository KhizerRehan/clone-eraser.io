import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

function SideBar() {
  return (
    <div className="p-6">
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
    </div>
  );
}

export default SideBar;
