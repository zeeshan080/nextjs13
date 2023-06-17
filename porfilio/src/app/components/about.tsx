"use client";
import { motion} from "framer-motion";
import React from "react";
import Image from "next/image";
import zeeshan from "@/app/assets/zeeshan.jpg";

type Props = {};

export default function About({}: Props) {
  // DEFINE ANIMATION VARIANT

  let FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  // DEFINE ANIMATION VARIANT

  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };

  const text = "  ABOUT ME  ";
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100); // Speed of typing effect, 200ms between each character

    // Cleanup function
    return () => {
      clearInterval(typingEffect);
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  // USE ANIMATION VARIANT
  return (
    <motion.section
      className="w-full h-[100vh] p-3 mt-10"
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
      <div className="flex justify-center w-full">
        <motion.div
          className="bg-white rounded-md shadow-lg w-[80%] pb-6"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="pt-6 flex justify-center w-full">
            <div className="w-[25%]">
              <motion.h1 className="text-[38px] font-bold text-center text-[#171717]">
                {displayedText}
              </motion.h1>
              <motion.hr className="border-b-[1px] mb-6 mx-6" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-40">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={MULTIDIRECTION_SLIDE_VARIANTS}
              transition={{ duration: 2 }}
              className="m-2 rounded-full w-[200px] h-[200px] lg:w-[330px] lg:h-[330px]  overflow-clip"
            >
              <Image src={zeeshan} alt={"@zeeshan080"} className="" />
            </motion.div>
            <motion.div
              initial="right"
              animate="visible"
              variants={MULTIDIRECTION_SLIDE_VARIANTS}
              transition={{ duration: 2 }}
              className="m-5"
            >
              <ul className="text-center lg:text-right text-[28px] text-[#171717]">
                <li>PIAIC STUDENT IT</li>
                <li> MANAGER AT AIMS</li>
                <li>FREELANCING</li>
                <li>BSE IN SOFTWARE ENGINEERING </li>
                <li>FSC PRE-ENGINEERING</li>
                <li>MATRICULATION IN SCIENCE</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
