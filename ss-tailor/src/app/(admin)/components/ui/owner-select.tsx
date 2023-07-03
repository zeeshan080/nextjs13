"use client";
import { Label } from "@/app/components/ui/label";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/app/components/ui/ui/select";
import { useEffect, useState } from "react";
import { Owner } from "@/db/schema";

const noto = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
});

type Props = {
  id: string;
  label: string;
  urdu_label: string;
  placeholder: string;
  register: any; // Register function from react-hook-form
  error: any; // Error object from react-hook-form
};

export default function OwnerSelector({
  id,
  label,
  urdu_label,
  placeholder,
  register,
  error,
}: Props) {
  const [ownerData, setownerData] = useState<Owner[]>([]);
  useEffect(() => {
    console.log("yes i ran")
    const result = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/owners", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const jsonData = await response.json();
        const allOwners: Owner[] = jsonData.data
        console.log("i have no data",allOwners)
        setownerData(allOwners);
      } catch (error) {
        console.log("i  have no error",error);
      }
    };
    result();
  }, []);

  return (
    <div>
      <div className={`items-center my-1 flex  gap-2`}>
        <Label htmlFor={id} className={`w-[28%] flex gap-2 items-center`}>
          <span className="text-[16px]">{label}</span>{" "}
          <span className={`${noto.className} text-[14px]`}>
            ({urdu_label})
          </span>
        </Label>
        <select {...register}>
        {ownerData.map((owner) => {
              return (
                <option key={owner.id} value={String(owner.id)}>{owner.name}</option>
              );
            })}
        </select>
        {/* <Select>
          <SelectTrigger className={`w-[72%] flex gap-2 items-center`} ref={...register}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {ownerData.map((owner) => {
              return (
                <SelectItem key={owner.id} value={String(owner.id)}>{owner.name}</SelectItem>
              );
            })}
          </SelectContent>
        </Select> */}
      </div>
      <div className="flex justify-end">
        {error && (
          <span className="text-[#FF0000] text-[12px]">
            This field is required.
          </span>
        )}
      </div>
    </div>
  );
}
