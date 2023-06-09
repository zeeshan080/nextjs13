import { Poppins } from "next/font/google";
import Product from "../components/ui/product";
import { createClient } from "next-sanity";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-06-01",
  useCdn: true
})


const getProducts = async () => {
  try {

    // const result = await  fetch("http://localhost:3000/api/products",  {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   next : {revalidate: 3600}
      
    // });
    const result = await client.fetch(`*[_type == "product"]`);
    //console.log(result)

    // result.map((items: { sizes: any; productImages: any})=> {
    //   //  console.log( items.sizes)
    //    const images : [] = items.productImages
    //    //console.log(items.productImages)
    //   //  images.map((img:any)=> console.log(builder.image(img).url()))
       
    // })

    // if (!result.ok) {
    //   throw new Error("faild data fetch");
    // }

    // const products = result.json();
    // console.log(result)
    return result;
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
