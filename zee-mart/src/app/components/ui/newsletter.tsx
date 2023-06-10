import React from "react";

type Props = {};

export default function Newsletter({}: Props) {
  return (
    <section className="relative flex flex-col gap-y-4 items-center justify-center w-full h-[300px] my-8">
      <div className="absolute top-0 text-[4.6rem] lg:text-[8rem] opacity-[0.07]  text-[#212121] font-bold z-[-1]">
        Newsletter
      </div>
      <h1 className="text-[34px] font-bold text-center">Subscribe Our Newsletter</h1>
      <h3 className="font-light text-[24px] text-center">Get the latest information and promo offers directly</h3>
      <form className="lg:w-[50%] w-full flex-col items-center lg:flex-col flex gap-3 pt-2">
        <input
          placeholder="Input Email Address"
          className="border-[2px]  w-[70%] border-slate-950 py-2 px-2 rounded-[3px]"
        />
        <button className="bg-slate-950 py-2 px-4 text-gray-50 font-bold text-[20px] w-[55%] lg:w-[25%]">
          Get Started
        </button>
      </form>
    </section>
  );
}
