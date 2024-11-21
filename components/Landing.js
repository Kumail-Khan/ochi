"use client";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

const Landing = () => {
  const btnArrow1 = useRef();
  const btnArrow2 = useRef();
  const btnArrow3 = useRef();

  function BtnEnter() {
    gsap.to(btnArrow1.current, {
      color: "white",
      duration: 0.2,
    });
    gsap.to(btnArrow2.current, {
      scale: 1,
      duration: 0.2,
    });
    gsap.to(btnArrow3.current, {
      background: "#212121",
      color: "white",
      duration: 0.2,
    });
  }
  function BtnLeave() {
    gsap.to(btnArrow1.current, {
      color: "black",
      duration: 0.2,
    });
    gsap.to(btnArrow2.current, {
      scale: 0,
      duration: 0.2,
    });
    gsap.to(btnArrow3.current, {
      background: "#f1f1f1",
      color: "black",
      duration: 0.2,
    });
  }
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.5"
        className="  w-full h-screen py-1">
        <div className="textstructure mt-[6vw] relative">
          <div className="bg-[#E73C37] w-[170px] h-[60px] font-[NM] absolute -right-14 top-14 rotate-90">
            <div className="relative">
              <h1 className="text-3xl font-semiboldold text-white -rotate-90 absolute top-3 left-3 ">
                W.
              </h1>
            </div>
            <h3 className="text-white text-[14px] pl-3 rotate-180 pb-5">
              Site of the Day
            </h3>
          </div>
          {["We create", "eye-Opening", "presentations"].map((items, index) => {
            return (
              <div key={index} className="masker">
                <div className="flex items-end ">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="w-[9vw] mr-[1vw] rounded-md h-[5.7vw] relative left-[3.5vw] overflow-hidden">
                      <img
                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                        className="w-full h-full object-cover "
                      />
                    </motion.div>
                  )}
                  <h1 className="text-[9vw] text-[#212121] font-medium font-[FG] w-fit leading-[6.5vw] tracking-[-0.015em] px-16 uppercase">
                    {items}
                  </h1>
                </div>
              </div>
            );
          })}
          <div className="w-full border-t-[1px] font-[NM]  border-zinc-400 text-[black] mt-[7vw] flex justify-between items-center py-4 px-16">
            {[
              "For public and private companies",
              "From the first pitch to IPO",
            ].map((items, index) => {
              return (
                <p
                  key={index}
                  className={`text-[21px] font-normal text-[#212121] ${
                    index === 1 && "ml-[11vw]"
                  }`}>
                  {items}
                </p>
              );
            })}
            <div
              onMouseEnter={() => BtnEnter()}
              onMouseLeave={() => BtnLeave()}
              className="flex cursor-pointer gap-2">
              <div
                ref={btnArrow3}
                className="landingBtn text-[1.10rem] font-normal uppercase px-4 py-[4px]  border-[1px] rounded-3xl border-zinc-600 flex items-center justify-center bg-[#f1f1f1]">
                Start the project
              </div>
              <div className="relative w-10 h-10 overflow-hidden border-zinc-600 border-[1px] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                <div ref={btnArrow1} className="absolute z-10 text-black  ">
                  <GoArrowUpRight />
                </div>
                <div
                  ref={btnArrow2}
                  className="bg-[#212121] absolute w-10 rounded-full h-10 scale-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
