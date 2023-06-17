import Image from "next/image";
import Link from "next/link";
import Mode from "./ui/mode";
import Logo from "@/app/assets/logo.png";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="p-4 min-h-[60px]">
      <nav className="flex justify-between items-center">
        <div className="flex items-start gap-1">
          <Image src={Logo} width={20} height={20} alt={""} />
          <span className="text-[18px] font-semibold text-slate-900 dark:text-gray-50">EESHAN</span>
        </div>
        <div className="flex items-center p-2 gap-4 z-10">
          <div className="pt-2">
            <Mode />
          </div>
          <Sheet>
            <SheetTrigger asChild className="">
              <Menu />
            </SheetTrigger>
            <SheetContent position="right" size="lg">
              <div className="grid gap-4 py-4">
                <ul>
                  <li>
                    <Link href={""}>Home</Link>
                  </li>
                  <li>
                    <Link href={""}>About</Link>
                  </li>
                  <li>
                    <Link href={""}>Contact</Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
