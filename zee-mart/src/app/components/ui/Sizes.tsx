"use client";
import { useState } from "react";

type Props = {
  sizes: object;
};

export default function Sizes({ sizes }: Props) {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelection = (size: string, value: number) => {
    if (value === 0) {
      alert("Size Not Available Now.");
    } else {
      setSelectedSize(size);
    }
    // You can perform any additional actions with the selected size here
  };

  return (
    <>
      {
        // <div className="">
        //   <h3 className="text-[22px] font-bold">Available Sizes:</h3>

        //   <div className="flex gap-4 py-4">
        //     {Object.entries(sizes).map(([key, value]) => {
        //       return (
        //         <div
        //           key={key}
        //           className={`${
        //             value === 0 ? "text-gray-400" : "text-slate-950 hover:rounded-full hover:bg-gray-400 hover:text-gray-50"
        //           }  text-[18px] pt-1 w-9 h-9 text-center cursor-pointer font-semibold  ${
        //             selectedSize === key ? "selected" : ""
        //           }`}
        //           onClick={() => handleSizeSelection(key, value)}
        //         >
        //           {key}
        //         </div>
        //       );
        //     })}
        //   </div>
        // </div>
      }
    </>
  );
}
