import SingleProduct from "@/app/components/ui/single-product";
import { Product, SingleProductData } from "@/app/types/common";
import { createClient } from "next-sanity";


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-06-01",
  useCdn: true
})

const getProductById = async (id:string) => {
  try {
    // const result = await fetch(`http://localhost:3000/api/products/?id=${id}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   next: { revalidate: 3600 },
    // });

    // if (!result.ok) {
    //   throw new Error("faild data fetch");
    // }
 
    const query = `*[_type == "product" && _id == "${id}"]`

    const result = await client.fetch(query);

    // const product = result.json();
  //  console.log("result",(result))
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  
  const product: SingleProductData[] = await getProductById(params.id);
  //console.log(product)
  // const [selectedSize, setSelectedSize] = useState("");
  // const [price, setPrice] = useState(product.price);
  // const [quantity, setQuantity] = useState(1);
  // let currentQuantity = quantity;

  // const handleIncreaseQuantity = () => {
  //   if (selectedSize === "") {
  //     alert("select a size first");
  //   } else {
  //     setQuantity(++currentQuantity);
  //     setPrice(currentQuantity * product.price);
  //   }
  // };

  // const handleDecreseQuantity = () => {
  //   if (currentQuantity > 1) {
  //     setQuantity(--currentQuantity);
  //     setPrice(currentQuantity * product.price);
  //   } else {
  //     alert("sorry cannot select quantity less then 1");
  //   }
  // };

  return (
    <main className="px-14">
      <SingleProduct product={product[0]} />
    </main>
  );
}
