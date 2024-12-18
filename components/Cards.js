"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useRef } from "react";
import Reviews from "./Reviews";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const Cards = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  const btnArrow1 = useRef();
  const btnArrow2 = useRef();
  const btnArrow3 = useRef();

  function BtnEnter() {
    gsap.to(btnArrow1.current, {
      background: "black",
      duration: 0.2,
    });
    gsap.to(btnArrow2.current, {
      scale: 1,
      duration: 0.2,
    });
    gsap.to(btnArrow3.current, {
      opacity: 1,
      duration: 0.1,
    });
  }
  function BtnLeave() {
    gsap.to(btnArrow1.current, {
      background: "#212121",
      duration: 0.2,
    });
    gsap.to(btnArrow2.current, {
      scale: 0.2,
      duration: 0.2,
    });
    gsap.to(btnArrow3.current, {
      opacity: 0,
      duration: 0.1,
    });
  }

  return (
    <>
      {/* // pc version */}
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.6"
        className=" w-full h-auto flex flex-col bg-[#f1f1f1] rounded-tl-3xl rounded-tr-3xl mt-[25vw] items-center pb-32 max-xl:mt-[35vw] max-md:hidden">
        <div className="w-full py-10  border-[#a0a0a0] border-b-[1px]">
          <h1 className=" px-16 text-[4vw] tracking-tighter text-[#212121] font-normal font-[NM] max-xl:px-5">
            Featured projects
          </h1>
        </div>
        <div className="cards   flex gap-6 px-16 pb-12 pt-24 max-xl:px-5">
          <div className="cardcontainer relative  w-[50%] h-[40vw]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight ">
                Cardboard Spaceship
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="card w-full h-full rounded-2xl  ">
              <h1 className="absolute  text-[9vw] font-bold font-[FG] leading-[6vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-50 left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
                {"Cardboard spacship".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>
            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["branded template", "sales deck", "social media templates"].map(
                (items, index) => {
                  return (
                    <div key={index}>
                      <button className="button type1 py-[.2vw] px-[.9vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                        <span className="btn-txt font-[NM] text-[1vw] max-lg:text-[1.4vw] tracking-tight uppercase font-medium">
                          {items}
                        </span>
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="cardcontainer relative w-[50%] h-[40vw]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight">
                AH2 & Matt Horn
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                {"AH2 & Matt Horn".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>
            <div className="card-btn flex gap-[1vw] mt-4">
              {["pitch deck"].map((items, index) => {
                return (
                  <div key={index}>
                    <button className="button type1 py-[.2vw] px-[.9vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                      <span className="btn-txt font-[NM] text-[1vw] max-lg:text-[1.4vw] tracking-tight uppercase font-medium">
                        {items}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="cards   flex gap-6 px-16 pb-12 pt-24 max-xl:px-5">
          <div className="cardcontainer relative  w-[50%] h-[40vw]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight ">
                Fyde
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
                {"FYDE".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>
            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["audit", "copywriting", "sales deck", "slides design"].map(
                (items, index) => {
                  return (
                    <div key={index}>
                      <button className="button type1 py-[.2vw] px-[.9vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                        <span className="btn-txt font-[NM] text-[1vw] max-lg:text-[1.4vw] tracking-tight uppercase font-medium">
                          {items}
                        </span>
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="cardcontainer relative w-[50%] h-[40vw]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight">
                Vise
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                {"Vise".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>

            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["agency", "company presentation"].map((items, index) => {
                return (
                  <div key={index}>
                    <button className="button type1 py-[.2vw] px-[.9vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                      <span className="btn-txt font-[NM] text-[1vw] max-lg:text-[1.4vw] tracking-tight uppercase font-medium">
                        {items}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="cards   flex gap-6 px-16 pb-32 pt-24 max-xl:px-5">
          <div className="cardcontainer relative  w-[50%] h-[40vw]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight ">
                Trawa
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(4)}
              onHoverEnd={() => handleHoverEnd(4)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
                {"Trawa".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[4]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>

            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["brand identity", "design research", "investor deck"].map(
                (items, index) => {
                  return (
                    <div key={index}>
                      <button className="button type1 py-[.2vw] px-[.9vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                        <span className="btn-txt font-[NM] text-[1vw] max-lg:text-[1.4vw] tracking-tight uppercase font-medium">
                          {items}
                        </span>
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="cardcontainer relative w-[50%] h-[40vw]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight">
                Premium Blend
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(5)}
              onHoverEnd={() => handleHoverEnd(5)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                {"Premium Blend".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[5]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>

            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["branded template"].map((items, index) => {
                return (
                  <div key={index}>
                    <button className="button type1 py-[.2vw] px-[.9vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                      <span className="btn-txt font-[NM] text-[1vw] max-lg:text-[1.4vw] tracking-tight uppercase font-medium">
                        {items}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onMouseEnter={() => BtnEnter()}
          onMouseLeave={() => BtnLeave()}
          ref={btnArrow1}
          className="relative mt-3 py-[1vw] px-[1.5vw] pr-[4.5vw] max-lg:py-[1.4vw] max-lg:px-[2vw] max-lg:pr-[6vw]  bg-[#212121]  text-white text-[1.2vw] max-lg:text-[1.5vw] uppercase max-xl:text-[1.5vw] rounded-full flex gap-10 items-center justify-center">
          View all case studies
          <div
            ref={btnArrow2}
            className="absolute right-2 scale-[.2] w-[3vw] h-[3vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] overflow-hidden bg-[#f1f1f1] rounded-full font-light text-[1.6rem] flex items-center justify-center">
            <div
              ref={btnArrow3}
              className=" text-black opacity-0 font-semibold">
              <GoArrowUpRight />
            </div>
          </div>
        </button>
        <Reviews />
      </div>

      {/* // mobile version */}

      <div className=" w-full h-auto flex flex-col bg-[#f1f1f1] rounded-tl-3xl rounded-tr-3xl items-center pb-32  md:hidden">
        <div className="w-full py-10  border-[#a0a0a0] border-b-[1px]">
          <h1 className=" px-16 text-[6vw] tracking-tighter text-[#212121] font-normal font-[NM] max-xl:px-5">
            Featured projects
          </h1>
        </div>
        <div className="cards w-full h-full  flex flex-col gap-7 px-16 pt-7 max-xl:px-5">
          <div className="cardcontainer relative  w-[100%]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight ">
                Cardboard Spaceship
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="card w-full h-full rounded-2xl  ">
              <h1 className="absolute  text-[9vw] font-bold font-[FG] leading-[6vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                {"Cardboard spacship".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>
            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["branded template", "sales deck", "social media templates"].map(
                (items, index) => {
                  return (
                    <div key={index}>
                      <button className="button type1 py-[.2vw] px-[1.3vw]  max-mob:px-[2vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                        <span className="btn-txt font-[NM] text-[2vw] max-mob:text-[14px]  tracking-tight uppercase font-medium">
                          {items}
                        </span>
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="cardcontainer relative w-[100%]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight">
                AH2 & Matt Horn
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2">
                {"AH2 & Matt Horn".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>
            <div className="card-btn flex gap-[1vw] mt-4">
              {["pitch deck"].map((items, index) => {
                return (
                  <div key={index}>
                    <button className="button type1 py-[.2vw] px-[1.3vw] max-mob:px-[2vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                      <span className="btn-txt font-[NM] text-[2vw] max-mob:text-[14px] tracking-tight uppercase font-medium">
                        {items}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="cards w-full h-full  flex flex-col  gap-7 px-16 pt-7 max-xl:px-5">
          <div className="cardcontainer relative  w-[100%]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight ">
                Fyde
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                {"FYDE".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>
            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["audit", "copywriting", "sales deck", "slides design"].map(
                (items, index) => {
                  return (
                    <div key={index}>
                      <button className="button type1 py-[.2vw] px-[1.3vw] max-mob:px-[2vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                        <span className="btn-txt font-[NM] text-[2vw] max-mob:text-[14px]  tracking-tight uppercase font-medium">
                          {items}
                        </span>
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="cardcontainer relative w-full">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight">
                Vise
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2">
                {"Vise".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>

            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["agency", "company presentation"].map((items, index) => {
                return (
                  <div key={index}>
                    <button className="button type1 py-[.2vw] px-[1.3vw] max-mob:px-[2vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                      <span className="btn-txt font-[NM] text-[2vw] max-mob:text-[14px] tracking-tight uppercase font-medium">
                        {items}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="cards w-full h-full  flex flex-col gap-7 px-16 pt-7 max-xl:px-5">
          <div className="cardcontainer relative  w-[100%]">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight ">
                Trawa
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(4)}
              onHoverEnd={() => handleHoverEnd(4)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                {"Trawa".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[4]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>

            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["brand identity", "design research", "investor deck"].map(
                (items, index) => {
                  return (
                    <div key={index}>
                      <button className="button type1 py-[.2vw] px-[1.3vw] max-mob:px-[2vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                        <span className="btn-txt font-[NM] text-[2vw] max-mob:text-[14px] tracking-tight uppercase font-medium">
                          {items}
                        </span>
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="cardcontainer relative w-full">
            <div className="title flex gap-4 items-center pb-5 ">
              <div className="w-3 h-3  rounded-full bg-[#212121]"></div>
              <h3 className="text-[#616060] text-xl uppercase font-medium tracking-tight">
                Premium Blend
              </h3>
            </div>
            <motion.div
              onHoverStart={() => handleHover(5)}
              onHoverEnd={() => handleHoverEnd(5)}
              className="card w-full h-full rounded-2xl">
              <h1 className="absolute text-[9vw] font-bold font-[FG] leading-[7vw] overflow-hidden text-[#CDEA68] tracking-none uppercase whitespace-nowrap z-10 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2">
                {"Premium Blend".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[5]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.025,
                    }}
                    className="inline-block"
                    key={index}>
                    {items}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-2xl overflow-hidden z-10 hover:scale-95 ease-in-out duration-500">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  className="w-full h-full hover:scale-110 rounded-2xl ease-in-out duration-500 delay-50"
                />
              </div>
            </motion.div>

            <div className="card-btn flex max-lg:flex-wrap gap-[1vw] mt-4">
              {["branded template"].map((items, index) => {
                return (
                  <div key={index}>
                    <button className="button type1 py-[.2vw] px-[1.3vw] max-mob:px-[2vw] border-[1px] border-[#212121] rounded-full hover:bg-[#212121] hover:text-white ease-in-out duration-300">
                      <span className="btn-txt font-[NM] text-[2vw] max-mob:text-[14px] tracking-tight uppercase font-medium">
                        {items}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onMouseEnter={() => BtnEnter()}
          onMouseLeave={() => BtnLeave()}
          ref={btnArrow1}
          className="relative mt-3 max-mob:mt-10 py-[2vw] px-[2.8vw] pr-[10vw] max-mob:py-[3vw] max-mob:px-[4vw]  max-mob:pr-[15vw] max-mob:text-[3.5vw]  bg-[#212121]  text-white text-[2vw] uppercase  rounded-full flex gap-10 items-center justify-center">
          View all case studies
          <div
            ref={btnArrow2}
            className="absolute right-2 scale-[.2] w-[4.3vw] h-[4.3vw]  max-mob:h-[6.3vw] max-mob:w-[6.3vw] overflow-hidden bg-[#f1f1f1] rounded-full font-light text-[1.6rem] flex items-center justify-center">
            <div
              ref={btnArrow3}
              className=" text-black opacity-0 font-semibold">
              <GoArrowUpRight />
            </div>
          </div>
        </button>
        <Reviews />
      </div>
    </>
  );
};

export default Cards;
