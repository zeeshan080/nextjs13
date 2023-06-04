"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  sizes: object;
  getSelectSize: Function;
};

export default function Sizes({ getSelectSize, sizes }: Props) {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelection = (size: string, value: number) => {
    if (value === 0) {
      toast("Size Not Available Now.");
    } else {
      setSelectedSize(size);
      getSelectSize(size, value);
    }
    // You can perform any additional actions with the selected size here
  };

  return (
    <>
      {
        <div className="">
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
          <h3 className="text-[22px] font-bold">Available Sizes:</h3>

          <div className="flex gap-4 py-4 flex-wrap">
            {Object.entries(sizes).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className={`${
                    value === 0
                      ? "text-gray-400"
                      : "text-slate-950 hover:bg-gray-400 hover:text-gray-50"
                  }  text-[18px] p-4  text-center cursor-pointer font-semibold border-[1px] border-slate-950 ${
                    selectedSize === key ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection(key, value)}
                >
                  <span className="pr-2">{key}</span>{" "}
                  <span
                    className={`${
                      value === 0 ? "bg-red-700" : "bg-green-700"
                    } text-[10px] py-1 px-2 text-gray-200`}
                  >
                    x{value} {value === 0 ? "out stock" : "in stock"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      }
    </>
  );
}
