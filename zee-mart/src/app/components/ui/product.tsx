import Image from "next/image";
import Link from "next/link";
import { Product, SingleProductData } from "../../types/common";
import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

type Props = {
  data: [];
};

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


export default function Product({ data }: Props) {
  const product: SingleProductData[] = data;
  return (
    <>
      {product.map((items) => {
        return (
        
          <Link href={`products/${items._id}`} key={items._id}>
            <div className="flex flex-col gap-1 p-4">
              <div className="bg-slate-300 pt-3">
                <Image
                  src={urlFor(items.productImages[0]).url()}
                  alt={""}
                  width={300}
                  height={300}
                />
              </div>
              <h1 className={`text-[24px] font-bold `}>
                {items.productName}
              </h1>
              <h3 className={`text-[18px] font-semibold text-gray-400`}>
                {items.productCategory}
              </h3>
              <h5 className={`text-[20px] font-normal `}>
                ${items.productPrice}
              </h5>
              {/* <Sizes sizes = {items.sizes}/> */}
            </div>
          </Link>
        );
      })}
    </>
  );
}
