'use client'
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import React from "react";

type Props = {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    register: any; // Register function from react-hook-form
    error: any; // Error object from react-hook-form
};

export default function UserInput({id,label,placeholder,type,register,error}: Props) {
  return (
    <div className="flex flex-col gap-y-1 justify-start py-2">
      <Label htmlFor={id} className="text-[16px] ml-1">{label}</Label>
      <Input id={id} placeholder={placeholder} type={type} {...register}/>
      {error && <span className="text-[#FF0000] text-[12px]">This field is required.</span>}
    </div>

  );
}
