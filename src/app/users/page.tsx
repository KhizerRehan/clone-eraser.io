"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { getAllUsers } from "../../../convex/user";

export default function UsersPage() {
  const { user }: any = useKindeBrowserClient();
  const getAllUsers = useQuery(api.user.getAllUsers, {});

  if (!getAllUsers) {
    return;
  }

  console.log("GetAllUsers", getAllUsers);

  return (
    <div>
      <h1>Users list Page</h1>

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {getAllUsers.map((user) => {
              return (
                <tr key={user._id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <img
                      src={`${user.image}`}
                      alt={`${user.name}`}
                      width={20}
                      height={20}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
