"use client";
import { SingleProductData, Product, Category, Item } from "@/app/types/common";
import { useState } from "react";
import Image from "next/image";
import Sizes from "./Sizes";
import ManageQuantity from "./manage-quantity";
import CartButton from "./cart-button";

type Props = {
  product: Product;
};

export default function SingleProduct({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeQuantity, setsizeQuantity] = useState(0);
  const [buyQuantity, setBuyQuantity] = useState(0);
  const singleProductData: SingleProductData = product.products;
  const category: Category = product.categories;

  const selectedSizeQuantity = (size: string, value: number) => {
    setSelectedSize(size);
    setsizeQuantity(value);
  };

  const buySizeQuantity = (value: number) => {
    setBuyQuantity(value);
  };

  const item: Item = {
    id: product.products.id,
    title: product.products.name,
    category: product.categories.name,
    image: product.products.image,
    price: product.products.price,
    quantity: { size: selectedSize, value: buyQuantity },
    totalPrice: Number((product.products.price * buyQuantity).toFixed(2)),
  };

  return (
    <div className="m-4">
      <div className="flex gap-7">
        <div className="flex justify-around">
          <div className="flex flex-col gap-y-3 w-[22%]">
            <Image
              src={singleProductData.image}
              width={120}
              height={120}
              alt={""}
            />
            <Image
              src={singleProductData.image}
              width={120}
              height={120}
              alt={""}
            />
            <Image
              src={singleProductData.image}
              width={120}
              height={120}
              alt={""}
            />
          </div>
          <div className="w-[78%]">
            <Image
              src={singleProductData.image}
              width={550}
              height={550}
              alt={""}
            />
          </div>
        </div>
        <div>
          <h1 className="text-[30px] font-bold ">{singleProductData.name}</h1>
          <h2 className="text-[22px] font-semibold text-gray-500">
            {category.name}
          </h2>
          <Sizes
            sizes={singleProductData.sizes}
            getSelectSize={selectedSizeQuantity}
          />
          <ManageQuantity
            size={selectedSize}
            quantity={sizeQuantity}
            getBuyQuantity={buySizeQuantity}
          />
          <CartButton
            btnName={"ADD TO CART"}
            styles={"bg-slate-950 py-2 px-4 text-gray-50 font-bold text-[20px]"}
            item={item}
          />
        </div>
      </div>
    </div>
  );
}
