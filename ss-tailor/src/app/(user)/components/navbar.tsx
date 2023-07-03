'use client'
import Image from "next/image";
import logo from "@/app/assets/images/ss-tailor.png";
import Link from "next/link";
import {usePathname} from "next/navigation"
import TrackOrder from "./track-order";

type Props = {};

export default function Navbar({}: Props) {
    const pathname = usePathname()
  return (
    <header className="sticky top-0 bg-[url('./assets/images/header_bg.jpg')] bg-no-repeat bg-cover h-26 z-20">
      <nav>
        <ul className="flex gap-2 text-white justify-end py-2 px-4 text-[14px]">
          <li>
            <TrackOrder/>
          </li>
          <li className="border-l-white border-l-[1px] pl-2">
            <Link href={"/sign-in"}>Login</Link>
          </li>
        </ul>
        <hr className="border-dotted w-full" />
        <ul className="flex items-center justify-center gap-4 text-white">
          <li className={`py-1 px-4 hover:border-b-[1px] border-b-[#b60303] hover: w-100 ${pathname === "/" ? "border-b-[1px] border-b-[#b60303]" : ""}`}>
            <Link  href={"/"}>Home</Link>
          </li>
          <li className={`py-1 px-4 hover:border-b-[1px] border-b-[#b60303] ${pathname === "/about" ? "border-b-[1px] border-b-[#b60303]" : ""}`}>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>
              
              <div>
                <Image
                  src={logo}
                  width={120}
                  height={120}
                  alt={"ss-tailor logo"}
                />
              </div>
            </Link>
          </li>
          <li className={`py-1 px-4 hover:border-b-[1px] border-b-[#b60303] ${pathname === "/contact" ? "border-b-[1px] border-b-[#b60303]" : ""}`}>
            <Link href={"/contactus"}>Contact Us</Link>
          </li>
          <li className={`py-1 px-4 hover:border-b-[1px] border-b-[#b60303] ${pathname === "/services" ? "border-b-[1px] border-b-[#b60303]" : ""}`}>
            <Link href={"/services"}>Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
