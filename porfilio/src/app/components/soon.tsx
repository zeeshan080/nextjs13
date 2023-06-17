'use client'
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function Soon({}: Props) {
  const variants1 = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="p-6 bg-white text-[#171717] m-8">
      <motion.h1
        initial="visible"
        animate={{ opacity: [1,0.5, 0,0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        variants={variants1}
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] text-[#171717]s"
      >
        ADDING MORE CONTACT SOON...
      </motion.h1>
    </div>
  );
}
