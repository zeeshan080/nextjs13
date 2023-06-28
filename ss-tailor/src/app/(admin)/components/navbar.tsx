"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import React from "react";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="bg-slate-900 text-gray-100 w-full h-12 flex items-center justify-end  px-5 py-2 rounded-md">
        
        <DropdownMenu >
          <DropdownMenuTrigger>
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent data-side="right" className="absolute right-[-10px]">
            <DropdownMenuLabel className="flex items-center gap-1">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="flex items-center gap-1">
            <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
     
    </header>
  );
}
