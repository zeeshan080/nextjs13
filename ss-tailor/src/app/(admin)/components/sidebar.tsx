import Image from "next/image"
import logo from  "@/app/assets/images/ss-tailor.png"
import Link from "next/link"
import { LayoutDashboard } from 'lucide-react';
import { Shirt } from 'lucide-react';

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className='p-4 rounded-md w-full min-h-screen h-full bg-slate-900 text-gray-100'>
        <div className="flex items-center justify-center">
            <Image width={160} height={160} src={logo} alt="logo"/>     
        </div>
        <div className="w-full mt-6">
            <ul className="flex flex-col items-center gap-y-2 w-full justify-center ">
                <li className="w-full py-2 px-4 bg-gray-100/10 rounded-md"><Link href={"/dashboard"} className="flex items-center gap-3"><LayoutDashboard className="w-5 h-5"/><span className="text-[19px] hidden lg:inline-block">Dashboard</span></Link></li>
                <li className="w-full py-2 px-4 bg-gray-100/10 rounded-md"><Link href={"/clothes"} className="flex items-center gap-3"><Shirt className="w-5 h-5"/><span className="text-[19px] hidden lg:inline-block">Clothes</span></Link></li>
                <li><Link href={""}></Link></li>
                <li><Link href={""}></Link></li>
            </ul>
        </div>
    </div>
  )
}