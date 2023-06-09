"use client";
import { SingleProductData, Product, Category, Item } from "@/app/types/common";
import { useState } from "react";
import Image from "next/image";
import Sizes from "./Sizes";
import ManageQuantity from "./manage-quantity";
import CartButton from "./cart-button";

import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-06-01",
  useCdn: true
})

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source:object) {
  return builder.image(source)
}

type Props = {
  product: SingleProductData;
};

export default function SingleProduct({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeQuantity, setsizeQuantity] = useState(0);
  const [buyQuantity, setBuyQuantity] = useState(0);
  // const singleProductData: SingleProductData = product.products;
  // const category: Category = product.categories;

  const selectedSizeQuantity = (size: string, value: number) => {
    setSelectedSize(size);
    setsizeQuantity(value);
  };

  const buySizeQuantity = (value: number) => {
    setBuyQuantity(value);
  };

  const item: Item = {
    id: product._id,
    title: product.productName,
    category: product.productCategory,
    image: urlFor(product.productImages[0]).url(),
    price: product.productPrice,
    quantity: { size: selectedSize, value: buyQuantity },
    totalPrice: Number((product.productPrice * buyQuantity).toFixed(2)),
  };

  return (
    <div className="m-4">
      <div className="flex gap-7">
        <div className="flex justify-around">
          <div className="flex flex-col gap-y-3 w-[22%]">
            <Image
              src={urlFor(product.productImages[0]).url()}
              width={120}
              height={120}
              alt={""}
            />
            <Image
              src={urlFor(product.productImages[0]).url()}
              width={120}
              height={120}
              alt={""}
            />
            <Image
              src={urlFor(product.productImages[0]).url()}
              width={120}
              height={120}
              alt={""}
            />
          </div>
          <div className="w-[78%]">
            <Image
              src={urlFor(product.productImages[0]).url()}
              width={550}
              height={550}
              alt={""}
            />
          </div>
        </div>
        <div>
          <h1 className="text-[30px] font-bold ">{product.productName}</h1>
          <h2 className="text-[22px] font-semibold text-gray-500">
            {product.productCategory}
          </h2>
          <Sizes
            sizes={product.sizes}
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
