import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import FooterLinks from "./footer-links";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className={`${poppins.className} lg:px-12 lg:py-6`}>
      <div className="grid grid-cols-1 pl-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link
            href={"/"}
            className={`py-7 logo ${poppins.className} font-bold text-[22px]`}
          >
            ZeeMart
          </Link>
          <p className="mt-8">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>

          <div className="flex items-center gap-3 my-4">
            <Link href={""} className="p-2 rounded-[5px] bg-gray-300">
              <BsTwitter className="w-5 h-5 text-slate-950" />
            </Link>
            <Link href={""} className="p-2 rounded-[5px] bg-gray-300">
              <FaFacebookF className="w-5 h-5 text-slate-950" />
            </Link>{" "}
            <Link href={""} className="p-2 rounded-[5px] bg-gray-300">
              <BsInstagram className="w-5 h-5 text-slate-950" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul>
            <FooterLinks href={""} title={"About"} />
            <FooterLinks href={""} title={"Terms of Use"} />
            <FooterLinks href={""} title={"Privacy Ploicy"} />
            <FooterLinks href={""} title={"How it Works"} />
            <FooterLinks href={""} title={"Contact Us"} />
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Support</h3>
          <ul>
            <FooterLinks href={""} title={"Support Carrer"} />
            <FooterLinks href={""} title={"24h Service"} />
            <FooterLinks href={""} title={"Quick Chat"} />
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <ul>
            <FooterLinks href={""} title={"Whatsapp"} />
            <FooterLinks href={""} title={"Support 24h"} />
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-2 lg:p-9 border-t-[1px] border-slate-950">
        <div>Copyright © 2022 <b>ZeeMart</b></div>
        <div>Design by. <b>Zeeshan Aziz</b></div>
        <div>Code by. <b><Link href={""}>zeeshan080 on github</Link></b></div>
      </div>
    </footer>
  );
}
