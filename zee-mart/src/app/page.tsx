import Promotions from "./components/ui/promotions";
import HeroHeader from "./components/ui/hero-header";
import Sales from "./components/ui/sales";


import { createClient } from "next-sanity";

import { SingleProductData } from "@/app/types/common";
import Newsletter from "./components/ui/newsletter";
import Features from "./components/ui/features";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-06-01",
  useCdn: true,
});



const getProducts = async () => {
  try {
    const result = await client.fetch(`*[_type == "product"]`);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const product: SingleProductData[] = await getProducts();
  return (
    <main >
      <HeroHeader />
      <Promotions />
      <Sales product = {product} />
      <Features/> 
      <Newsletter/>
    </main>
  );
}
