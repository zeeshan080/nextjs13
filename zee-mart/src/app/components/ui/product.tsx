import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/common";
type Props = {
  data: [];
};

export default function Product({ data }: Props) {
  const product: Product[] = data;
  return (
    <>
      {product.map((items) => {
        return (
          <Link href={`products/${items.products.id}`} key={items.products.id}>
            <div className="flex flex-col gap-1 p-4">
              <div className="bg-slate-300 pt-3">
                <Image
                  src={items.products.image}
                  alt={""}
                  width={300}
                  height={300}
                />
              </div>
              <h1 className={`text-[24px] font-bold `}>
                {items.products.name}
              </h1>
              <h3 className={`text-[18px] font-semibold text-gray-400`}>
                {items.categories.name}
              </h3>
              <h5 className={`text-[20px] font-normal `}>
                ${items.products.price}
              </h5>
              {/* <Sizes sizes = {items.sizes}/> */}
            </div>
          </Link>
        );
      })}
    </>
  );
}
