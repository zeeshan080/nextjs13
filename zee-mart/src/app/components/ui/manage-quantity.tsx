"use client";
import Button from "./button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

type Props = {
  size: string;
  totalStock: number;
  toBuy: number
  getBuyQuantity: Function
};

export default function ManageQuantity({ size,toBuy, totalStock,getBuyQuantity }: Props) {
  const [newQuantity, setnewQuantity] = useState(toBuy);
  const handleIncreaseQuantity = () => {
    if (size === "") {
      toast("select a size first");
    } else {
      if (newQuantity < totalStock) {
        let quantity = newQuantity
        setnewQuantity(++quantity);
        getBuyQuantity(newQuantity)
      } else {
        toast("sorry this size do not have more stock");
      }
    }
  };

  const handleDecreseQuantity = () => {
    if (size === "") {
      toast("select a size first");
    } else {
      if (newQuantity > 1) {
        let quantity = newQuantity
        setnewQuantity(--quantity);
        getBuyQuantity(newQuantity)
      } else {
        toast("sorry cannot select quantity less then 1");
      }
    }
  };

  return (
    <div className="flex p-4 items-center gap-4">
     
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 3000,
              style: {
                background: "rgb(185 28 28)",
                color: "#fff",
              },
            }}
          />
      <Button
        styles={
          "flex justify-center items-center w-[35px] h-[35px] text-center rounded-full border-slate-900 border-[1px] font-bold text-[18px]"
        }
        btnClick={handleDecreseQuantity}
        childrens={<AiOutlineMinus className="w-4 h-4" />}
      />
      <span>{newQuantity}</span>
      <Button
        styles={
          "flex justify-center items-center w-[35px] h-[35px] text-center rounded-full border-slate-900 border-[1px] font-bold text-[18px]"
        }
        btnClick={handleIncreaseQuantity}
        childrens={<AiOutlinePlus className="w-4 h-4" />}
      />
    </div>
  );
}
