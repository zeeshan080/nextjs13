import SingleProduct from "@/app/components/ui/single-product";
import { Product } from "@/app/types/common";

const getProductById = async (id: number) => {
  try {
    const result = await fetch(`http://localhost:3000/api/products/?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
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

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const Id: number = Number(params.id);
  const product: Product[] = await getProductById(Id);
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
