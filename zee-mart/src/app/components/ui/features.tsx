import Image from "next/image";
import Link from "next/link";
import feature from "../../assets/images/feature.webp";

type Props = {};

export default function Features({}: Props) {
  return (
    <section className="lg:h-screen py-4 px-[4rem]">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <h1 className="text-[42px] lg:text-[52px] font-bold lg:w-[40%]">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-3">
          <div className="relative grid grid-cols-2 lg:gap-7 lg:w-[50%]">
            <div className="absolute top-0 text-[4rem] lg:text-[5.5rem] opacity-[0.07]  text-[#212121] font-bold z-[-1]">
            Different from others
            </div>
            <div >
              <h1 className="text-[22px] font-bold mb-4">Using Good Quality Materials</h1>
              <h3>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</h3>
            </div>
            <div>
              <h1 className="text-[22px] font-bold mb-4">100% Handmade Products</h1>
              <h3>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</h3>
            </div>
            <div>
              <h1 className="text-[22px] font-bold mb-4">Modern Fashion Design</h1>
              <h3>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</h3>
            </div>
            <div>
              <h1 className="text-[22px] font-bold mb-4">Discount for Bulk Orders</h1>
              <h3>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</h3>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:w-[50%]">
            <div className="lg:w-[50%]">
              <Image src={feature} width={280} height={280} alt={""} />
            </div>
            <div className="lg:w-[50%]">
              <p className="text-[18px] mb-4">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <Link href={"/products"} className="bg-slate-950 py-2 px-4 text-gray-50 font-bold text-[20px]">See All Product</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
