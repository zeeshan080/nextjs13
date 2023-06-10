"use client";
import { SingleProductData, Product, Category, Item } from "@/app/types/common";
import { useState } from "react";
import Image from "next/image";
import Sizes from "./Sizes";
import ManageQuantity from "./manage-quantity";
import CartButton from "./cart-button";

import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-06-01",
  useCdn: true,
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(sources: object[]) {
  let allSources: string[] = [];
  sources.map((source) => allSources.push(builder.image(source).url()));
  return allSources;
}

type Props = {
  product: SingleProductData;
};

export default function SingleProduct({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeQuantity, setsizeQuantity] = useState(1);
  const [buyQuantity, setBuyQuantity] = useState(1);
  const [toBuy, setToBuy] = useState(1);
  // const singleProductData: SingleProductData = product.products;
  // const category: Category = product.categories;

  const handleImageHover = (image: string) => {
    setSelectedImage(image);
  };

  const selectedSizeQuantity = (size: string, value: number) => {
    setSelectedSize(size);
    setsizeQuantity(value);
  };

  const handleRefresh = () => {
    setSelectedSize("");
    setToBuy(1);
  };

  const buySizeQuantity = (value: number) => {
    setBuyQuantity(value);
  };

  const item: Item = {
    id: product._id,
    title: product.productName,
    category: product.productCategory,
    image: urlFor(product.productImages),
    price: product.productPrice,
    quantity: { size: selectedSize, value: buyQuantity },
    totalPrice: Number((product.productPrice * buyQuantity).toFixed(2)),
  };
  const [selectedImage, setSelectedImage] = useState(item.image[0]);

  return (
    <div className="m-4">
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="flex gap-4">
          <div className="flex flex-col gap-y-3 w-[17%]">
            {item.image.map((img) => {
              return (
                <Image
                  key={img}
                  src={img}
                  width={120}
                  height={120}
                  onMouseEnter={() => handleImageHover(img)}
                  alt={""}
                />
              );
            })}
          </div>
          <div className="w-[82%]">
            {selectedImage && (
              <Image src={selectedImage} width={550} height={550} alt={""} />
            )}
          </div>
        </div>
        <div>
          <h1 className="text-[30px] font-bold ">{product.productName}</h1>
          <h2 className="text-[22px] font-semibold text-gray-500">
            {product.productCategory}
          </h2>
          <Sizes
            isSelected={selectedSize}
            sizes={product.sizes}
            getSelectSize={selectedSizeQuantity}
          />
          <ManageQuantity
            size={selectedSize}
            toBuy={toBuy}
            totalStock={sizeQuantity}
            getBuyQuantity={buySizeQuantity}
          />
          <div className="flex gap-3">
            <CartButton
              refreshData={handleRefresh}
              btnName={"ADD TO CART"}
              styles={
                "bg-slate-950 py-2 px-4 text-gray-50 font-bold text-[20px]"
              }
              item={item}
            />
            <h2 className="font-bold text-[26px]">${item.price}</h2>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:p-8">
        <div className="relative lg:pt-16">
          <h1 className="absolute top-0  text-[4.6rem] lg:text-[6.6rem] opacity-[0.07]  text-[#212121] font-bold z-[-1]">Overview</h1>
          <h2 className="font-bold text-[40px]">Product Information</h2>
        </div>
        <hr className="mt-8"/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
          <h2 className="text-[24px] font-bold">PRODUCT DETAILS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-[24px] font-bold">PRODUCT CARE</h2>
          <ul className="list-disc font-bold">
           <li>Hand wash using cold water.</li>
           <li>Do not using bleach.</li>
           <li>Hang it to dry.</li>
           <li>Iron on low temperature.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
