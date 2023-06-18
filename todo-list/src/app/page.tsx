import { Rubik } from "next/font/google";
import MainNavbar from "./components/main-navbar";
import TaskInfo from "./components/tasks-info";
const rubit = Rubik({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main
      className={`h-screen ${rubit.className} flex flex-col justify-between items-center  w-full`}
    >
      {/* searchbar */}
      <div className="p-5 w-full lg:w-[38%]  h-[8%]">
        <input
          className="w-full rounded-[6px] text-slate-950 text-[14px] h-[34px] p-3"
          placeholder="Search..."
        />
      </div>
      {/* task area */}
     <TaskInfo/>
      {/* bottom navbar */}
      <MainNavbar />
    </main>
  );
}
