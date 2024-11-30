"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Marqiue = () => {
  // const loading1 = useRef();
  // useGSAP(() => {
  //   gsap.from(loading1.current, {
  //     marginTop: "200px",
  //     duration: 2,
  //     delay: 3,
  //   });
  // });
  return (
    <>
      {/* PC version */}
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.2"
        className="w-full bg-[#004D43] py-[5vw] rounded-tl-3xl rounded-tr-3xl  mt-[6vw] max-md:hidden">
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

      {/* mobile version */}

      <div className="w-full bg-[#004D43] py-[5vw] max-mob:py-[12vw] rounded-tl-3xl rounded-tr-3xl  mt-[6vw] max-md:mt-[7vw] md:hidden">
        <div className="py-[.2vw] flex overflow-hidden whitespace-nowrap border-t-[1px] border-b-[1px] border-[#c0c0c081]">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="text-[27vw] max-mob:text-[35vw] font-semibold font-[FG] text-white uppercase leading-none pr-14 -mt-[5.85vw] -mb-[3vw]">
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="text-[27vw] max-mob:text-[35vw] font-semibold font-[FG] text-white uppercase leading-none pr-14 -mt-[5.85vw] -mb-[3vw]">
            We are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marqiue;
