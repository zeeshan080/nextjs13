"use client";
import Image from "next/image";
import Link from "next/link";
import { SingleProductData } from "@/app/types/common";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

type Props = {
  product: SingleProductData[];
};

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
function urlFor(source: object) {
  return builder.image(source);
}

export default function Sales({ product }: Props) {
    const breakpoints = {
        // For mobile screens
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // For laptop screens
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      };
  return (
    <section className="lg:h-screen px-7">
      <div className="flex flex-col items-center gap-y-1 my-4">
        <p className="text-blue-600 text-[14px] font-semibold">PRODUCTS</p>
        <h1 className="text-[26px] font-bold">Check What We Have</h1>
      </div>

      <div className="flex w-full gap-3 lg:p-6">
        <Swiper
        breakpoints={ breakpoints}
          spaceBetween={50}
          slidesPerView={1}
        
        >
          {product.map((items) => {
            return (
              <SwiperSlide key={items._id} >
                <Link
                  key={items._id}
                  href={`products/${items._id}`}
                
                >
                  <Image
                    src={urlFor(items.productImages[0]).url()}
                    width={200}
                    height={200}
                    className="w-[100%] h-auto hover:scale-110 ease-in-out duration-300 bg-slate-300"
                    alt={""}
                  />
                  <div className="p-3 w-full">
                    <h1 className={`text-[16px] lg:text-[24px] font-bold `}>
                      {items.productName}
                    </h1>
                    <h5 className={`text-[12px] lg:text-[20px] font-normal `}>
                      ${items.productPrice}
                    </h5>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
         
        </Swiper>
      </div>
    </section>
  );
}
