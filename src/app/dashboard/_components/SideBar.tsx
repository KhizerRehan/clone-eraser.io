import React from "react";
import SidebarNavTop from "./SidebarNavTop";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function SideBar() {
  const { user } = useKindeBrowserClient();
  return (
    <div className="p-6">
      <SidebarNavTop user={user} />
    </div>
  );
}

export default SideBar;
