import { Rubik } from "next/font/google";

const rubit = Rubik({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

type Props = {}

export default function MainNavbar({}: Props) {
  return (
    <div className="flex justify-center  w-full h-[20%]">
    <div className="bg-white fixed bottom-0  mb-[2%] py-3 rounded-[6px] w-[85%]  lg:w-[33%] shadow-lg">
      <ul className="flex justify-around items-center text-slate-950">
        <li className="text-[12px]">All Tasks</li>
        <li className="text-[12px]">Today</li>
        <li className="flex justify-center items-center px-6">
          <div className="absolute">
            <div className="realtive flex justify-center items-center rounded-full w-[58px] h-[58px] lg:w-[68px] lg:h-[68px] bg-gray-300">
              <button
                className={`absolute text-center text-[20px] lg:text-[28px] font-normal rounded-full w-[44px] h-[44px] shadow-lg lg:w-[54px] lg:h-[54px] bg-white ${rubit.className}`}
              >
                +
              </button>
            </div>
          </div>
        </li>
        <li className="text-[12px]">Completed</li>
        <li className="text-[12px]">Categories</li>
      </ul>
    </div>
    </div> 
  )
}