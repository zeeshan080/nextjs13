'use client'
import { motion } from "framer-motion";
import React from "react";

type Props = {
  svg: JSX.Element;
  titleValue: string;
  titleHead: string;
};

export default function ExperienceCard({ svg, titleValue, titleHead }: Props) {
  // DEFINE ANIMATION VARIANT

  let FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      className="p-4 md:w-1/4 sm:w-1/2 w-full"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 1,
          },
        },
      }}
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          {svg}

          <h2 className="title-font font-medium text-3xl text-gray-900">
            {titleValue}+
          </h2>
          <p className="leading-relaxed text-[#171717] text-[18px]">
            {titleHead}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
