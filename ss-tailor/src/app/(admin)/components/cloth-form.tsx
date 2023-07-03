"use client";
import React from "react";
import DataInput from "./ui/data-input";
import { Button } from "@/app/components/ui/button";
import { useForm } from "react-hook-form";
import { Clothes } from "@/db/schema";
import OwnerSelector from "./ui/owner-select";

type Props = {};

export default function ClothForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Clothes>();

  const onSubmit = async (clothData: Clothes) => {
    console.log("I am working...");
    try{
      const result = await fetch("http://localhost:3000/api/clothes", {
        method: "POST",
        body: JSON.stringify(clothData),
        headers: { "Content-Type": "application/json" },
      });
      console.log("this is data", result.json());
    }
    catch (error){
      console.log("this is error", error);
    }
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
            <OwnerSelector
              id={"ownerSelect"}
              label={"Name"}
              urdu_label={"نام"}
              placeholder={"Select Owner Name"}
              register={register("owner",{required: true})}
              error={errors.owner}
            />
            <DataInput
              id={"length"}
              label={"Length"}
              urdu_label={"لمبائی"}
              type={"double"}
              register={register("length", { required: true })}
              error={errors.length}
              placeholder={"Enter Length"}
            />
            <DataInput
              id={"arms"}
              label={"Arms"}
              urdu_label={"بازو"}
              type={"double"}
              register={register("arms", { required: true })}
              error={errors.arms}
              placeholder={"Enter Arms Length"}
            />
            <DataInput
              id={"shoulder"}
              label={"Shoulder"}
              urdu_label={"کندھا"}
              type={"double"}
              register={register("shoulderlength", { required: true })}
              error={errors.shoulderlength}
              placeholder={"Enter Shoulder Length"}
            />
            <DataInput
              id={"chest"}
              label={"Chest"}
              urdu_label={"چھاتی"}
              type={"double"}
              register={register("chest", { required: true })}
              error={errors.chest}
              placeholder={"Enter Chest Length"}
            />
            <DataInput
              id={"surround"}
              label={"Surround"}
              urdu_label={"گھیرا"}
              type={"double"}
              register={register("surroundlength", { required: true })}
              error={errors.surroundlength}
              placeholder={"Enter Surround Length"}
            />
            <DataInput
              id={"collar"}
              label={"Collar"}
              urdu_label={"کالر"}
              type={"double"}
              register={register("collar", { required: true })}
              error={errors.collar}
              placeholder={"Enter Collar Length"}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <DataInput
              id={"shoulder"}
              label={"Shoulder"}
              urdu_label={"کندھا"}
              type={"text"}
              register={register("shouldershape", { required: true })}
              error={errors.shouldershape}
              placeholder={"Enter Shoulder Shape"}
            />
            <DataInput
              id={"shalwar"}
              label={"Shalwar"}
              urdu_label={"شلوار"}
              type={"double"}
              register={register("shalwarlength", { required: true })}
              error={errors.shalwarlength}
              placeholder={"Enter Shalwar Length"}
            />
            <DataInput
              id={"cuff"}
              label={"Cuff"}
              urdu_label={"پانچہ"}
              type={"double"}
              register={register("cuff", { required: true })}
              error={errors.cuff}
              placeholder={"Enter Cuff Turnup Length"}
            />
            <DataInput
              id={"front"}
              label={"Front"}
              urdu_label={"سامنے"}
              type={"number"}
              register={register("frontpocket", { required: true })}
              error={errors.frontpocket}
              placeholder={"Enter Front Pockets"}
            />
            <DataInput
              id={"side"}
              label={"Side"}
              urdu_label={"سائیڈ"}
              type={"number"}
              register={register("sidepocket", { required: true })}
              error={errors.sidepocket}
              placeholder={"Enter Side Pockets"}
            />

            <DataInput
              id={"shalwar"}
              label={"Shalwar"}
              urdu_label={"شلوار"}
              type={"number"}
              register={register("shalwarpocket", { required: true })}
              error={errors.shalwarpocket}
              placeholder={"Enter Shalwar Pockets"}
            />
            <DataInput
              id={"surround"}
              label={"Surround"}
              urdu_label={"گھیرا"}
              type={"text"}
              register={register("surroundshape", { required: true })}
              error={errors.surroundshape}
              placeholder={"Enter Surround Shape"}
            />
          </div>
        </div>
        <DataInput
          id={"extra"}
          isTextArea={true}
          label={"Extra Work"}
          urdu_label={"اضافی کام"}
          type={"text"}
          register={register("extrawork", { required: false })}
          error={errors.extrawork}
          placeholder={"Enter Data"}
        />
        <div className="w-full flex mt-6 justify-end">
          <Button className="w-[15%]">Save</Button>
        </div>
      </div>
    </form>
  );
}
