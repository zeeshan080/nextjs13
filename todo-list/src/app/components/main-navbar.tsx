'use client'
import { Rubik } from "next/font/google";
import { ListChecks } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { CheckCheck } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import Item from "./item";
import { useModalStore } from "../store/store";

const rubit = Rubik({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

type Props = {};

export default function MainNavbar({}: Props) {

  const {openModal} = useModalStore()
  
  return (
    <div className="flex w-full h-[12%] justify-center items-center">
      <div className="bg-white py-[0.30rem] rounded-[6px] w-[85%]  lg:w-[38%] shadow-lg">
        <ul className="flex justify-around items-center text-slate-950">
          <Item title={"All Tasks"} icon={<ListChecks className="w-4 h-4"/>}/>
          <Item title={"Today"} icon={<CalendarCheck className="w-4 h-4"/>}/>
          <li className="flex justify-center items-center px-6">
            <div className="absolute">
              <div className="realtive flex justify-center items-center rounded-full w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] bg-gray-300">
                <button
                  onClick= {openModal}
                  className={`absolute text-center text-[20px] lg:text-[28px] font-normal rounded-full w-[48px] h-[48px] shadow-lg lg:w-[54px] lg:h-[54px] bg-white ${rubit.className}`}
                >
                  +
                </button>
              </div>
            </div>
          </li>
          <Item title={"Completed"} icon={<CheckCheck className="w-4 h-4"/>}/>
          <Item title={"Categories"} icon={<LayoutDashboard className="w-4 h-4"/>}/>
        </ul>
      </div>
    </div>
  );
}
