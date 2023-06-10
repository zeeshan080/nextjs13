"use client";
import Image from "next/image";
import { ImBin } from "react-icons/im";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import CheckOutButton from "../components/ui/checkout-button";
import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import CartQuantity from "../components/ui/cart-quantity";
import { cartAction } from "@/app/store/cart-store";
import { useDispatch } from "react-redux";

type Props = {};

export default function Cart({}: Props) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart);
  const [buyQuantity, setBuyQuantity] = useState(0);
  const buySizeQuantity = (value: number) => {
    setBuyQuantity(value);
  };

  const handleRemoveCart = (id: string, size: string) => {
    dispatch(
      cartAction.DeleteItemFromCart({
        id,
        size,
      })
    );
  };

  return (
    <main>
      <div className="px-16 py-8">
        <h1 className="text-[32px] font-bold">Shopping Cart</h1>
        {cartItems.items.length === 0 ? (
          <div className="w-full flex flex-col justify-center items-center gap-y-4">
            <BsHandbag className="w-[140px] h-[140px]" />
            <h1 className="text-[24px] font-semibold">
              Your Shopping Bag is Empty
            </h1>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-2 w-full pt-9">
            <div className="lg:w-[70%] flex flex-col gap-y-2">
              {cartItems.items.map((item) => {
                return (
                  <div
                    className="flex flex-col lg:flex-row justify-around"
                    key={item.id + item.quantity.size}
                  >
                    <div className="flex flex-col lg:flex-row gap-3">
                      <Image
                        src={item.image[0]}
                        alt={""}
                        width={200}
                        height={200}
                      />
                      <div>
                        <h1 className="font-bold text-[18px]">{item.title}</h1>
                        <h2 className="font-bold text-[14px] text-slate-400">{item.category}</h2>
                        <div className="flex gap-1 items-center">
                          <div className="flex gap-1">
                            <h3 className="border-[1px] border-slate-950 rounded-[5px] px-2 py-1 text-[18px]">
                              {item.quantity.size}
                            </h3>
                            <h3 className="px-2 py-1 text-[18px]">
                              x{item.quantity.value} Items
                            </h3>
                          </div>
                        </div>
                        <h1>Delivery Estimation</h1>
                        <h2>5 Working days</h2>
                        <div className="flex gap-1 items-center">
                          <h3 className="border-[1px] border-slate-950 rounded-[5px] px-2 py-1 text-[18px]">
                            @{item.price}
                          </h3>
                          <h3 className="px-2 py-1 text-[18px]">
                            Total Price: ${item.totalPrice}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col  justify-around gap-y-4 items-center">
                      <button
                        onClick={() => {
                          handleRemoveCart(item.id, item.quantity.size);
                        }}
                      >
                        <ImBin className="w-5 h-5" />
                      </button>

                      <CartQuantity
                        id={item.id}
                        size={item.quantity.size}
                        quantity={item.quantity.value}
                        getBuyQuantity={buySizeQuantity}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:w-[30%]">
              <div className="bg-gray-100 p-6 ">
                <h1>Order Summary</h1>
                <div className="flex justify-between">
                  <h2>Quantity</h2>
                  <h2>
                    {cartItems.totalQuantity}
                    products
                  </h2>
                </div>
                <div className="flex justify-between">
                  <h2>Sub Total</h2>
                  <h2>$ {cartItems.subTotalPrice.toFixed(2)}</h2>
                </div>
              </div>
              <div className="my-5 mx-7">
                <CheckOutButton
                  btnName={"CHECK OUT"}
                  styles={
                    "bg-slate-950 py-2 px-4 text-gray-50 font-bold text-[20px]"
                  }
                  item={cartItems.items}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
