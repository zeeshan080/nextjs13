"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Quote,Star } from "lucide-react";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <section className="h-full w-full">
      <div className="w-full flex  flex-col justify-center items-center">
          <h1 className="font-bold text-[42px] text-[#3a3845]">Testimonials</h1>
          <span className="border-b-[2px] border-[#3a3845] w-[18%]"></span>
        </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: false,
        }}
        className="h-[80vh]"
      >
      <SwiperSlide >
          <div className="w-full h-full flex justify-center items-center  text-center">
            <div className="relative w-[50%] h-[70%] bg-white rounded-lg shadow-md p-8">
              <div className="absolute">
                <Quote className="w-28 h-28 text-gray-300/30" />
              </div>
              <div className="relative text-[28px] p-8 z-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </div>
              <div className="p-1 w-full">
                <ul className="flex justify-center items-center gap-2">
                  <li>
                    <Star className="w-5 h-5" stroke="0" fill="#FFDF00"/>
                  </li>
                  <li>
                    <Star className="w-5 h-5" stroke="0" fill="#FFDF00"/>
                  </li>
                  <li>
                    <Star className="w-5 h-5" stroke="0" fill="#FFDF00"/>
                  </li>
                  <li>
                    <Star className="w-5 h-5" stroke="0" fill="#FFDF00"/>
                  </li>
                  <li>
                    <Star className="w-5 h-5" stroke="0" fill="#FFDF00"/>
                  </li>
                </ul>
              </div>
              <div className="text-[18px] italic">
                ~ Kashif Malik
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
}
