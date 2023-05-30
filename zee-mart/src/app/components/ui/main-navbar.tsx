"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import {poppins} from "../../utils/webfonts";
import NavbarLinks from "./navbar-links";


export default function MainNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      {/* backdrop for menu */}
      <div
        className={`${
          toggleMenu ? "" : "hidden"
        } absolute top-0 left-0 h-screen w-screen z-10 bg-slate-950 opacity-30`}
      ></div>
      <header className="w-full min-h-[60px] p-3 flex justify-between items-center">
        {/* main site logo */}
        <Link
          href={"/"}
          className={`p-3 logo ${poppins.className} font-bold text-[16px]`}
        >
          ZeeMart
        </Link>
        {/* responsive navbar */}
        <div
          className={`${
            toggleMenu ? "right-0" : "right-[-60%]"
          } z-10 bg-gray-50 lg:bg-transparent absolute lg:relative lg:right-0 top-0 h-screen w-[48%] lg:h-[40px] lg:w-auto ease-in-out duration-300 `}
        >
          <div className="relative top-0 right-0 flex justify-end p-3 lg:hidden">
            <IoMdClose onClick={toggleMenuHandler} className="h-4 w-4" />
          </div>
          <ul
            className={`${poppins.className} px-1 py-4 lg:flex lg:py-1 lg:px-2`}
          >
           <NavbarLinks href={"/"} title={"Home"}/>
           <NavbarLinks href={"/female"} title={"Female"}/>
           <NavbarLinks href={"/male"} title={"Male"}/>
           <NavbarLinks href={"/kids"} title={"Kids"}/>
           <NavbarLinks href={"/products"} title={"All Products"}/>
           
          </ul>
        </div>
        {/* main menu area */}
        <div className="flex gap-3 items-center lg:justify-between lg:w-[35%]">
          {/*search bar */}
          <div className="w-[75%]">
            <form className="lg:flex lg:gap-3 w-full">
              <input
                className="hidden lg:inline-block bg-transparent border-[1px] border-gray-400 rounded-[8px] text-[14px] px-4 py-1 w-full"
                placeholder="What are you looking for..."
              />
              <button>{<BsSearch />}</button>
            </form>
          </div>
          {/* cart icon */}
          <div className="lg:w-[25%] lg:flex lg:pr-5  lg:justify-end">
            <div className="relative p-1">
              <div className={`absolute top-0 right-0 w-[14px] flex justify-center items-center text-white bg-slate-950 rounded-full `}>
                <p className={`${poppins.className} text-[10px]`}>0</p>
              </div>
              <FiShoppingCart className="h-5 w-5" />
            </div>
          </div>

          {/*button to toggle navbar on mobile*/}
          <button className="lg:hidden" onClick={toggleMenuHandler}>
            <CgMenuRightAlt className="h-5 w-5" />
          </button>
        </div>
      </header>
    </>
  );
}
