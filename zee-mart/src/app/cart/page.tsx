"use client";
import Image from "next/image";
import { ImBin } from "react-icons/im";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import CheckOutButton from "../components/ui/checkout-button";

type Props = {};

export default function Cart({}: Props) {
  const cartItems = useSelector((state: RootState) => state.cart);

  return (
    <main>
      <div className="px-16 py-8">
        <h1 className="text-[32px] font-bold">Shopping Cart</h1>
        {cartItems.items.length === 0 ? (
          <h1>YOUR CART IS EMPTY</h1>
        ) : (
          <div className="flex gap-2 w-full pt-9">
            <div className="w-[70%] flex flex-col gap-y-2">
              {cartItems.items.map((item) => {
                return (
                  <div className="flex justify-around" key={item.id}>
                    <div className="flex gap-3">
                      <Image
                        src={item.image}
                        alt={""}
                        width={200}
                        height={200}
                      />
                      <div>
                        <h1>{item.title}</h1>
                        <h2>{item.category}</h2>
                        <div className="flex gap-1 items-center">
                          {Object.entries(cartItems.totalQuantity).map(
                            ([key, value]) => {
                              if (value.id === item.id) {
                                return (
                                  <div key={value.id} className="flex gap-1">
                                    <h3 className="border-[1px] border-slate-950 px-2 py-1 text-[18px]">
                                      {value.size}
                                    </h3>
                                    <h3 className="px-2 py-1 text-[18px]">
                                      x{value.value} Items
                                    </h3>
                                  </div>
                                );
                              }
                            }
                          )}
                        </div>
                        <h1>Delivery Estimation</h1>
                        <h2>5 Working days</h2>
                        <div className="flex gap-1 items-center">
                          <h3 className="border-[1px] border-slate-950 px-2 py-1 text-[18px]">
                            @{item.price}
                          </h3>
                          <h3 className="px-2 py-1 text-[18px]">
                            Total Price: ${item.totalPrice}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button>
                        <ImBin className="w-5 h-5" />
                      </button>

                      <div className="p-3 flex gap-3 content-center">
                        <button
                          // onClick={handleDecreseQuantity}
                          className="leading-4 w-[30px] h-[30px] text-center rounded-full border-slate-900 border-[1px] font-normal text-[26px]"
                        >
                          -
                        </button>
                        <p className="text-[18px]">0</p>
                        <button
                          // onClick={handleIncreaseQuantity}
                          className="leading-4 w-[30px] h-[30px] text-center rounded-full border-slate-900 border-[1px] font-normal text-[26px]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-[30%]">
              <div className="bg-gray-100 p-6 ">
                <h1>Order Summary</h1>
                <div className="flex justify-between">
                  <h2>Quantity</h2>
                  <h2>
                    {cartItems.totalQuantity.reduce(
                      (acc, item) => acc + item.value,
                      0
                    )}
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
                    styles={"bg-slate-950 py-2 px-4 text-gray-50 font-bold text-[20px]"} 
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
