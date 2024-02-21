"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgUser } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaUser, FaUserAlt, FaUserFriends } from "react-icons/fa";

const Sidebar = () => {
  const pathName = usePathname();
  
  return (
    <div className="h-full w-20 bg-slate-50 rounded-xl border-[1px] border-neutral-800 transition-transform">
      <div className="flex flex-col space-y-11 justify-center items-center p-2">
        <div>Logo</div>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={clsx(
                    "w-10 aspect-square flex justify-center items-center rounded-2xl",
                    pathName === "/chats" && 'bg-AlmostBlack' 
                  )}
                >
                  <Link href={"/chats"}>
                    <FaUserAlt size={20} className="text-slate-50" />
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className=" text-sm text-center">
                <p>Chats</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={clsx(
                    "w-10 aspect-square flex justify-center items-center rounded-2xl",
                    pathName === "/friend" && 'bg-AlmostBlack' 
                  )}
                >
                  <Link href={"/friend"}>
                    <FaUserFriends size={20} className="text-slate-50" />
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className=" text-sm text-center">
                <p>Friends</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={clsx(
                    "w-10 aspect-square flex justify-center items-center rounded-2xl",
                    pathName === "/profile" && 'bg-AlmostBlack' 
                  )}
                >
                  <Link href={"/profile"}>
                    <FaUser size={20} className="text-slate-100" />
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className=" text-sm text-center">
                <p>Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
