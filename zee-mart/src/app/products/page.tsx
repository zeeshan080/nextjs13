import { Poppins } from "next/font/google";
import Product from "../components/ui/product";
import { revalidatePath } from "next/cache";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});



const getProducts = async () => {
  try {

    const result = await  fetch("http://localhost:3000/api/products",  {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next : {revalidate: 3600}
      
    });

    if (!result.ok) {
      throw new Error("faild data fetch");
    }

    const products = result.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

export default async function Products() {
  const data = await getProducts();

  return (
    <main className={`${poppins.className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-4 p-8">
        {/* @ts-ignore*/}
        <Product data= {data}/>
      </div>
    </main>
  );
}
