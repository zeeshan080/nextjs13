"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

type Props = {};

export default function HeroHeader({}: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  // DEFINE ANIMATION VARIANT

  let FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="absolute top-0 left-0 w-full  h-[80vh] overflow-clip blur-2xl">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
        -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
         opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        ></div>
        <div
          className="absolute top-0 right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
        translate-x-1/2 rotate-[220deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
         opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        ></div>
      </div>

      <div className="relative z-10 flex justify-center flex-col items-center text-center  text-slate-900  dark:text-gray-50 pt-16">
        <motion.h1
          className="text-[34px] lg:text-[64px] font-bold drop-shadow-md"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Web 3.0 Full Stack Developer
          <br /> Showcasing Innovation <br />& Seamless Experiences
        </motion.h1>
        <motion.div
          className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] hover:from-[#da5b90] hover:to-[#6f67df]  z-10 py-2 px-6 text-[20px] text-white mt-6 rounded-sm shadow-lg ease-out duration-300 cursor-pointer"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Link href={"/"}>Read More</Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
