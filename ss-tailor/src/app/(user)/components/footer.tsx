import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex min-h-[120px] flex-col gap-y-4 justify-center items-center bg-[url('./assets/images/header_bg.jpg')] text-white">
      <div className="w-full">
        <ul className="flex w-full gap-8 justify-center">
          <li>
            <Link href={""}>
              <Facebook fill="#f2f2f2" stroke="0"/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Instagram fill="#f2f2f2" stroke="#3a3845"/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <LinkedinIcon fill="#f2f2f2" stroke="0" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Twitter fill="#f2f2f2" stroke="0"/>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col items-center gap-y-2">
        <hr className="border-dotted w-full" />
        <div className="flex gap-2">
          <h2>Copyright © 2023, All Rights Reserved by</h2>
          <Link href={"/"} className="font-bold">
            ss-tailor
          </Link>
        </div>
      </div>
    </footer>
  );
}
