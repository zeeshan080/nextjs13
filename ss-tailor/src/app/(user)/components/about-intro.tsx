import Image from "next/image";
import about from "@/app/assets/images/aboutme.jpg";
import { Smile,Package,Users,Coffee } from "lucide-react";
type Props = {};

export default function AboutIntro({}: Props) {
  return (
    <section className="w-full">
      <div className="px-8">
        <div className="w-full flex  flex-col justify-center items-center">
          <h1 className="font-bold text-[42px] text-[#3a3845]">About Us</h1>
          <span className="border-b-[2px] border-[#3a3845] w-[12%]"></span>
        </div>

        <div className="flex w-full justify-center px-9 py-3">
          <div className="w-[40%]">
            <div>
              {/* add drop shadow with animation */}
              <Image src={about} alt={""} />
            </div>
          </div>
          <div className="w-[60%] px-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex w-full h-[35vh] justify-center bg-[url('./assets/images/clients.jpg')]">
        <div className="w-full flex justify-center items-center bg-[#17724559]">
          <ul className="flex w-full justify-between p-8">
            <li className="bg-slate-50/70 shadow-md rounded-lg w-[18%] flex flex-col items-center p-4">
              <div className="flex flex-col items-center justify-center">
                <Smile className="w-14 h-14" />
                <div className="font-semibold text-[22px]">1200</div>
                <div className="text-[18px]">Happy Customers</div>
              </div>
            </li>
            <li className="bg-slate-50/70 shadow-md rounded-lg w-[18%] flex flex-col items-center p-4">
              <div className="flex flex-col items-center justify-center">
                <Package className="w-14 h-14" />
                <div className="font-semibold text-[22px]">1200</div>
                <div className="text-[18px]">Orders Completed</div>
              </div>
            </li>
            <li className="bg-slate-50/70 shadow-md rounded-lg w-[18%] flex flex-col items-center p-4">
              <div className="flex flex-col items-center justify-center">
                <Users className="w-14 h-14" />
                <div className="font-semibold text-[22px]">4</div>
                <div className="text-[18px]">Employees</div>
              </div>
            </li>
            <li className="bg-slate-50/70 shadow-md rounded-lg w-[18%] flex flex-col items-center p-4">
              <div className="flex flex-col items-center justify-center">
                <Coffee className="w-14 h-14" />
                <div className="font-semibold text-[22px]">12</div>
                <div className="text-[18px]">Year of Experience</div>
              </div>
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  );
}
