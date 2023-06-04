import { Poppins } from "next/font/google";
import Image from "next/image";
import summerWoman from "../../assets/images/summer.webp";
import summerMan from "../../assets/images/summer-man.webp";
import winterMan from "../../assets/images/winner-man.webp";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function Promotions() {
  return (
    <section className={`${poppins.className} py-7 px-12 lg:h-screen`}>
      <div className="flex flex-col items-center gap-y-1 my-4">
        <p className="text-blue-600 text-[14px] font-semibold">PROMOTIONS</p>
        <h1 className="text-[26px] font-bold">Our Promotions Events</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <div className="flex flex-col gap-y-3 lg:w-[40%]">
          <div className="flex flex-col items-center lg:flex-row bg-gray-300 w-full">
            <div className="lg:w-[45%] text-center p-2 lg:pl-14 lg:pt-6">
              <h3 className="text-[32px] font-extrabold">GET UP TO 60%</h3>
              <p className="text-[16px] font-normal">For the summer season</p>
            </div>
            <div className="w-[85%] lg:w-[55%]">
              <Image src={summerWoman} alt={""} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-y-3 bg-slate-950 w-full text-gray-50 py-7">
            <h3 className="text-[32px] font-extrabold">GET 30% Off</h3>
            <p className="text-[16px] font-normal">USE PROMO CODE</p>
            <h4 className="rounded-[6px] px-2  py-1 bg-slate-900 text-[18px] tracking-[8px]">
              ZEEMART2023
            </h4>
          </div>
        </div>
        <div className="flex gap-6 flex-col lg:flex-row lg:w-[60%]">
          <div className="flex flex-col items-center justify-center bg-emerald-100 w-full">
            <div className="pl-10 pt-6 w-full">
              <h3 className="text-[16px] font-light">Flex Sweatshirt</h3>
              <p className="text-[18px] font-semibold py-1">
                <span className="line-through">$100.00</span> $75.00
              </p>
            </div>
            <div className="lg:w-full w-[60%] flex justify-center ">
              <Image src={summerMan} alt={""} />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-orange-100 w-full">
            <div className="pl-10 pt-6 w-full">
              <h3 className="text-[16px] font-light">
                Flex Push Button Bomber
              </h3>
              <p className="text-[18px] font-semibold py-1">
                <span className="line-through">$225.00</span> $190.00
              </p>
            </div>
            <div className="lg:w-full w-[60%] flex justify-center">
              <Image src={winterMan} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
