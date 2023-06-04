import Link from "next/link";
import Image from "next/image"
import { FiShoppingCart } from "react-icons/fi";
import headImage from "../../assets/images/header.webp"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function HeroHeader() {
  return (
    <section className={`${poppins.className} lg:h-screen flex lg:justify-evenly px-6  lg:px-14 mt-4`}>
        <div className="p-4 lg:w-[40%]">
            <h1  className={`text-[54px] py-6 font-extrabold`}>An Industrial Take on Streetwear</h1>
            <p>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <Link href={""} className={`flex items-center justify-center gap-2 w-[80%] lg:w-[40%] m-5 text-gray-50 bg-slate-950 py-3 px-4`}>
                <FiShoppingCart/>
               <span>Start Shopping</span> 
            </Link>
        </div>
        <div className="hidden lg:inline-block w-[55%] bg-pink-200 rounded-full">
            <Image src={headImage} className="w-[100%]" alt={""}/>
        </div>
    </section>
  )
}