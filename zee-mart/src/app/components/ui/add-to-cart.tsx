"use client";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: object;
  createdAt: Date;
  category: number;
};
type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const item: Product = product;
  const [selectedSize, setSelectedSize] = useState("");
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(1);
  let currentQuantity = quantity;

  const handleSizeSelection = (size: string, value: number) => {
    if (value === 0) {
      alert("Size Not Available Now.");
    } else {
      setSelectedSize(size);
    }
  };

  const handleIncreaseQuantity = () => {
    if (selectedSize === "") {
      alert("select a size first");
    } else {
      setQuantity(++currentQuantity);
      setPrice(currentQuantity * item.price)
    }
  };

  const handleDecreseQuantity = () => {
    if (currentQuantity > 1) {
      setQuantity(--currentQuantity);
      setPrice(currentQuantity * item.price)
    } else {
      alert("sorry cannot select quantity less then 1");
    }
  };

  return (
    <>
      {
        <div className="">
          <h3 className="text-[22px] font-bold">Available Sizes:</h3>

          <div className="flex gap-4 py-4">
            {Object.entries(item.sizes).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className={`${
                    value === 0
                      ? "text-gray-400"
                      : "text-slate-950 hover:rounded-full hover:bg-gray-400 hover:text-gray-50"
                  }  text-[18px] pt-1 w-9 h-9 text-center cursor-pointer font-semibold  ${
                    selectedSize === key ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelection(key, value)}
                >
                  {key}
                </div>
              );
            })}
          </div>
          <div>
            <h3 className="font-bold text-[18px]">Quantity:</h3>
            <div className="p-3 flex gap-3 content-center">
              <button
                onClick={handleDecreseQuantity}
                className="leading-4 w-[30px] h-[30px] text-center rounded-full border-slate-900 border-[1px] font-normal text-[26px]"
              >
                -
              </button>
              <p className="text-[18px]">{currentQuantity}</p>
              <button
                onClick={handleIncreaseQuantity}
                className="leading-4 w-[30px] h-[30px] text-center rounded-full border-slate-900 border-[1px] font-normal text-[26px]"
              >
                +
              </button>
            </div>
            <div className="flex gap-3 items-center">
              <button className="px-2 py-1 bg-slate-950 text-gray-50 font-bold text-[18px]">
                Add to Cart
              </button>
              <h3 className="font-semibold text-[22px]">${price}</h3>
            </div>
          </div>
        </div>
      }
    </>
  );
}
