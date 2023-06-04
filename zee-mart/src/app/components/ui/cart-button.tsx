"use client";
import { cartAction } from "@/app/store/cart-store";
import { useDispatch } from "react-redux";
import { Item } from "../../types/common";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  btnName: string;
  styles: string;
  item: Item;
};

export default function CartButton({ btnName, styles, item }: Props) {
  const dispatch = useDispatch();

  const { id, title, category, image, price, quantity, totalPrice } = item;
  const handleAddItems = () => {
    if (quantity.size === "") {
      toast("select a size first");
    } else {
      toast(`${quantity.value} items addded to cart successfully`);
      dispatch(
        cartAction.addItemToCart({
          id,
          title,
          category,
          image,
          price,
          quantity,
          totalPrice,
        })
      );
    }
  };
  return (
    <button className={styles} onClick={handleAddItems}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "rgb(22 101 52)",
            fontSize: "18px",
            color: "#fff",
          },
        }}
      />
      {btnName}
    </button>
  );
}
