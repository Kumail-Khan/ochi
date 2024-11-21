"use client";

import { motion } from "framer-motion";
import React from "react";

const Marqiue = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.2"
        className="w-full bg-[#004D43] py-[5vw] rounded-tl-3xl rounded-tr-3xl  mt-[6vw]">
        <div className="py-[.2vw] flex overflow-hidden whitespace-nowrap border-t-[1px] border-b-[1px] border-[#c0c0c081]">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="text-[27vw] font-semibold font-[FG] text-white uppercase leading-none pr-14 -mt-[5.85vw] -mb-[3vw]">
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="text-[27vw] font-semibold font-[FG] text-white uppercase leading-none pr-14 -mt-[5.85vw] -mb-[3vw]">
            We are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marqiue;
