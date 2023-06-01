import Image from "next/image";
import Sizes from "./Sizes";
import Link from "next/link";
type Props = {
  data: [];
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: object;
  createdAt: Date;
  category: number;
};

export default function Product({ data }: Props) {
  const product: Product[] = data;
  return (
    <>
      {product.map((items) => {
        return (
          <Link href={`products/${items.id}`} key={items.id}>
            <div className="flex flex-col gap-1 p-4">
              <div className="bg-slate-300 pt-3">
                <Image src={items.image} alt={""} width={300} height={300} />
              </div>
              <h1 className={`text-[24px] font-bold `}>{items.name}</h1>
              <h3 className={`text-[18px] font-semibold text-gray-400`}>
                {items.category}
              </h3>
              <h5 className={`text-[20px] font-normal `}>${items.price}</h5>
              {/* <Sizes sizes = {items.sizes}/> */}
            </div>
          </Link>
        );
      })}
      ;
    </>
  );
}
