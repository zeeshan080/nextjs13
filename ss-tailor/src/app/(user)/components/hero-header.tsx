"use client";
import Image from "next/image";
import hero1 from "@/app/assets/images/hero-1.jpg";
import hero2 from "@/app/assets/images/hero-2.jpg";
import hero3 from "@/app/assets/images/hero-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {};

export default function HeroHeader({}: Props) {

  
  return (
    <section>
      <div className="h-[87vh] overflow-y-hidden">
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
          className="h-[87vh]"
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="w-100">
            <Image
              src={hero1}
              alt={""}
            />
          </SwiperSlide>
          <SwiperSlide className="w-100">
            <Image
              src={hero2}
              alt={""}
            />
          </SwiperSlide>
          <SwiperSlide className="w-100">
            <Image
              src={hero3}
              alt={""}
            />
          </SwiperSlide>
     </Swiper>
      </div>
    </section>
  );
}
