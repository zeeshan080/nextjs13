"use client";
import Button from "./button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { cartAction } from "@/app/store/cart-store";

type Props = {
  id: string;
  size: string;
  quantity: number;
  getBuyQuantity: Function;
};

export default function CartQuantity({
  id,
  size,
  quantity,
  getBuyQuantity,
}: Props) {
  const [newQuantity, setnewQuantity] = useState(quantity);
  let currentQuantity = newQuantity;
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    //todo: stock should not be allow more then current
    setnewQuantity(++currentQuantity);
    getBuyQuantity(currentQuantity);
  };

  const handleDecreseQuantity = () => {
    dispatch(cartAction.removeItemFromCart({ id, size }));
    setnewQuantity(--currentQuantity);
    getBuyQuantity(currentQuantity);
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
      <span>{currentQuantity}</span>
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
