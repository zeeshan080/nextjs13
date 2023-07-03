"use client";
import React from "react";
import DataInput from "./ui/data-input";
import { Button } from "@/app/components/ui/button";
import { useForm } from "react-hook-form";
import { Owner } from "@/db/schema";

type Props = {};

export default function OwnerForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Owner>();

  const onSubmit = async (ownerData: Owner) => {
    const result = await fetch("http://localhost:3000/api/owners", {
      method: "POST",
      body: JSON.stringify(ownerData),
      headers: { "Content-Type": "application/json" },
    });
    console.log("this is data", result.json());
    // if(result){
    //     alert("data added successfully")
    // }else{
    //     alert("Error Adding Data")
    // }
  };
  return (
    <form
      className="lg:px-5 py-2 w-full flex flex-col items-center gap-y-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-[80%]">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-1 ">
            <DataInput
              id={"name"}
              label={"Name"}
              urdu_label={"نام"}
              type={"text"}
              placeholder={"Enter Customer Name"}
              register={register("name", { required: true })}
              error={errors.name}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <DataInput
              id={"phone"}
              label={"Phone"}
              urdu_label={"فون نمبر"}
              type={"text"}
              placeholder={"Enter Customer Phone Number"}
              register={register("phoneno", { required: true })}
              error={errors.phoneno}
            />
          </div>
        </div>
      
        <div className="w-full flex mt-6 justify-end">
          <Button className="w-[15%]">Save</Button>
        </div>
      </div>
    </form>
  );
}
