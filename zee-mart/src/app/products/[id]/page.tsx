import Sizes from "@/app/components/ui/Sizes";
import AddToCart from "@/app/components/ui/add-to-cart";
import { Poppins } from "next/font/google";
import Image from "next/image";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: object;
  createdAt: Date;
  category: number;
};

const getProductById = async (id: number) => {
  try {
    const result = await fetch(`http://localhost:3000/api/products/?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      throw new Error("faild data fetch");
    }

    const product = result.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};

export default async function SingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const Id: number = Number(params.id);
  const product: Product[] = await getProductById(Id);
  return (
    <main className={`${poppins.className}`}>
      <div className="flex flex-col lg:flex-row gap-2">
        {product.map((item) => {
          return (
            <>
            <div>
              <Image src={item.image} width={300} height={300} alt={""} />
            </div>
            <div>
                <h1>{item.name}</h1>
                <h1>{item.category}</h1>
                {/* <Sizes sizes={item.sizes}/> */}
                <AddToCart  product={item} />
            </div>
            </>
            
          );
        })}
      </div>
    </main>
  );
}
