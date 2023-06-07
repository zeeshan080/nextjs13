import { Rubik } from "next/font/google";
import MainNavbar from "./components/main-navbar";
import { MdDeleteOutline } from "react-icons/md";
import AddTask from "./components/models/add-tasks";

const rubit = Rubik({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main
      className={`h-screen ${rubit.className} mt-[10px]  flex flex-col items-center  w-full`}
    >
      <AddTask/>
      <div className="p-5 w-[38%]  h-[8%]">
        <input
          className="w-full rounded-[6px] text-slate-950 text-[14px] h-[34px] p-3"
          placeholder="Search..."
        />
      </div>
      <div className="lg:w-[38%]  bg-gray-400 p-8 rounded-[6px] h-[73%] overflow-y-scroll ">
        <div>
          <ul>
            <li className="flex items-center justify-between gap-5 bg-white shadow-lg py-4 px-5 mb-3 rounded-[5px] snap-y">
              <input type="checkbox" className="w-[5%]" />
              <h3 className="text-slate-950 text-[12px] w-[90%]">
                buy pizza dough from store buy pizza dough from store buy pizza
                dough from store
              </h3>
              <button className="w-[5%] hover:scale-110">
                <MdDeleteOutline className="w-[20px] h-[20px] fill-[#991b1b]" />
              </button>
            </li>
            <li className="flex items-center justify-between gap-5 bg-white shadow-lg py-4 px-5 mb-3 rounded-[5px] snap-y">
              <input type="checkbox" className="w-[5%]" />
              <h3 className="text-slate-950 text-[12px] w-[90%]">
                buy pizza dough from store buy
              </h3>
              <button className="w-[5%] hover:scale-110">
                <MdDeleteOutline className="w-[20px] h-[20px] fill-[#991b1b]" />
              </button>
            </li>
          </ul>
        </div>
        <MainNavbar />
      </div>
    </main>
  );
}
