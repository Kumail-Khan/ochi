"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const Eyes2 = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let moveX = e.clientX;
      let moveY = e.clientY;

      let deltaX = moveX - window.innerWidth / 2;
      let deltaY = moveY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

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

  const btnArrow4 = useRef();
  const btnArrow5 = useRef();
  const btnArrow6 = useRef();

  function BtnEnter2() {
    gsap.to(btnArrow4.current, {
      background: "#212121",
      color: "#f1f1f1",
      duration: 0.2,
    });
    gsap.to(btnArrow5.current, {
      background: "#f1f1f1",
      scale: 1,
      duration: 0.2,
    });
    gsap.to(btnArrow6.current, {
      opacity: 1,
      duration: 0.1,
    });
  }
  function BtnLeave2() {
    gsap.to(btnArrow4.current, {
      background: "#CDEA68",
      color: "#212121",
      duration: 0.2,
    });
    gsap.to(btnArrow5.current, {
      background: "#212121",
      scale: 0.2,
      duration: 0.2,
    });
    gsap.to(btnArrow6.current, {
      opacity: 0,
      duration: 0.1,
    });
  }

  return (
    <>
      {/* pc version */}
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".4"
        className="bg-[#CDEA68] w-full h-auto rounded-tl-3xl rounded-tr-3xl max-xl:h-[70vw] max-lg:h-[80vw] max-md:hidden">
        <div className="relative textstructure2 flex flex-col items-center justify-center w-full h-auto pt-[6vw] max-xl:pt-[10vw]">
          {["Ready", "to start", "the project?"].map((items, index) => {
            return (
              <div key={index} className="masker">
                <div>
                  <h1 className="font-[FG] cursor-default text-[16vw] tracking-tight uppercase text-[#212121] leading-[11vw]">
                    {items}
                  </h1>
                </div>
              </div>
            );
          })}
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.1"
            className="absolute left-[35%] mb-[25vw] flex gap-10 max-xl:mb-[15vw]">
            <div className="flex items-center justify-center w-[11vw] h-[11vw] max-lg:w-[13vw] max-lg:h-[13vw] rounded-full bg-zinc-100">
              <div className="relative w-[7vw] h-[7vw] max-lg:w-[8vw] max-lg:h-[8vw] rounded-full bg-[#212121]">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line1 w-full h-9 flex items-center ">
                  <div className="w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[11vw] h-[11vw] max-lg:w-[13vw] max-lg:h-[13vw] rounded-full bg-zinc-100">
              <div className="relative   w-[7vw] h-[7vw] max-lg:w-[8vw] max-lg:h-[8vw] rounded-full bg-[#212121]">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line1 w-full h-9 flex items-center ">
                  <div className=" w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
          <button
            onMouseEnter={() => BtnEnter()}
            onMouseLeave={() => BtnLeave()}
            ref={btnArrow1}
            className="relative py-[1.1vw] px-[1.5vw] pr-[4.5vw] max-lg:py-[1.4vw] max-lg:px-[2vw] max-lg:pr-[5.5vw] uppercase bg-[#212121] text-white text-[1vw] max-lg:text-[1.6vw] max-xl:text-[1.4vw] font-[NM] rounded-full flex gap-10 items-center justify-center mt-[4vw] max-lg:mt-[10vw]">
            Start the project
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
          <h1 className="text-[1.2vw] font-[NM] py-[.8vw] max-xl:text-[1.8vw]">
            OR
          </h1>
          <button
            onMouseEnter={() => BtnEnter2()}
            onMouseLeave={() => BtnLeave2()}
            ref={btnArrow4}
            className="relative mt-3 max-xl:mt-2 py-[1.1vw] px-[1.5vw] pr-[4.5vw] max-lg:py-[1.4vw] max-lg:px-[2vw] max-lg:pr-[5.5vw] uppercase bg-[#CDEA68] border-[1px] border-[#212121] text-[#212121] text-[1vw] max-lg:text-[1.6vw] max-xl:text-[1.4vw] font-[NM] rounded-full flex gap-10 items-center justify-center mb-[10vw]">
            hello@ochi.design
            <div
              ref={btnArrow5}
              className="absolute right-2 scale-[.2] w-[3vw] h-[3vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] overflow-hidden bg-[#212121] rounded-full font-light text-[1.6rem] flex items-center justify-center">
              <div
                ref={btnArrow6}
                className=" text-black opacity-0 font-semibold">
                <GoArrowUpRight />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* mobile version */}

      <div className="bg-[#CDEA68] w-full h-[100vw] max-mob:h-[150vw] rounded-tl-3xl rounded-tr-3xl  md:hidden">
        <div className="relative textstructure2 flex flex-col items-center justify-center w-full h-auto pt-[6vw] max-xl:pt-[10vw] max-mob:pt-[15vw]">
          {["Ready", "to start", "the project?"].map((items, index) => {
            return (
              <div key={index} className="masker">
                <div>
                  <h1 className="font-[FG] cursor-default text-[16vw] max-mob:text-[20vw] max-mob:leading-[15vw] tracking-tight uppercase text-[#212121] leading-[11vw]">
                    {items}
                  </h1>
                </div>
              </div>
            );
          })}
          <div className="absolute left-[25%] max-mob:left-[15%] flex gap-10 ">
            <div className="flex items-center justify-center w-[11vw] h-[11vw] max-lg:w-[20vw] max-lg:h-[20vw] max-mob:w-[30vw] max-mob:h-[30vw] rounded-full bg-zinc-100">
              <div className="relative w-[7vw] h-[7vw] max-lg:w-[14vw] max-lg:h-[14vw] max-mob:w-[20vw] max-mob:h-[20vw] rounded-full bg-[#212121]">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line1 w-full h-9 flex items-center ">
                  <div className="w-[2vw] h-[2vw] max-lg:h-[3vw] max-mob:w-[3vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[11vw] h-[11vw] max-lg:w-[20vw] max-lg:h-[20vw] max-mob:w-[30vw] max-mob:h-[30vw] rounded-full bg-zinc-100">
              <div className="relative   w-[7vw] h-[7vw] max-lg:w-[14vw] max-lg:h-[14vw] max-mob:w-[20vw] max-mob:h-[20vw] rounded-full bg-[#212121]">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line1 w-full h-9 flex items-center ">
                  <div className=" w-[2vw] h-[2vw] max-lg:h-[3vw] max-mob:w-[3vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
          <button
            onMouseEnter={() => BtnEnter()}
            onMouseLeave={() => BtnLeave()}
            ref={btnArrow1}
            className="relative py-[1.1vw] px-[1.5vw] pr-[4.5vw] max-mob:py-[3vw] max-mob:px-[4vw] max-mob:text-[3.5vw]  max-mob:pr-[15vw] max-lg:py-[1.6vw] max-lg:px-[2vw] max-lg:pr-[10vw] uppercase bg-[#212121] text-white text-[1vw] max-lg:text-[2.4vw] max-xl:text-[1.4vw] font-[NM] rounded-full flex gap-10 items-center justify-center mt-[30vw] max-mob:mt-[40vw]">
            Start the project
            <div
              ref={btnArrow2}
              className="absolute right-2 scale-[.2] w-[3vw] h-[3vw] max-mob:h-[6.3vw] max-mob:w-[6.3vw] max-lg:w-[4.4vw] max-lg:h-[4.4vw] overflow-hidden bg-[#f1f1f1] rounded-full font-light text-[1.6rem] flex items-center justify-center">
              <div
                ref={btnArrow3}
                className=" text-black opacity-0 font-semibold">
                <GoArrowUpRight />
              </div>
            </div>
          </button>
          <h1 className="text-[1.2vw] font-[NM] py-[.8vw] max-xl:text-[1.8vw]">
            OR
          </h1>
          <button
            onMouseEnter={() => BtnEnter2()}
            onMouseLeave={() => BtnLeave2()}
            ref={btnArrow4}
            className="relative mt-3 max-xl:mt-2 py-[1.1vw] px-[1.5vw] max-mob:py-[3vw] max-mob:px-[4vw] max-mob:text-[3.5vw] max-mob:pr-[15vw] pr-[4.5vw] max-lg:py-[1.6vw] max-lg:px-[2vw] max-lg:pr-[10vw] uppercase bg-[#CDEA68] border-[1px] border-[#212121] text-[#212121] text-[1vw] max-lg:text-[2.4vw] max-xl:text-[1.4vw] font-[NM] rounded-full flex gap-10 items-center justify-center mb-[10vw]">
            hello@ochi.design
            <div
              ref={btnArrow5}
              className="absolute right-2 scale-[.2] w-[3vw] h-[3vw] max-mob:h-[6.3vw] max-mob:w-[6.3vw] max-lg:w-[4.4vw] max-lg:h-[4.4vw] overflow-hidden bg-[#212121] rounded-full font-light text-[1.6rem] flex items-center justify-center">
              <div
                ref={btnArrow6}
                className=" text-black opacity-0 font-semibold">
                <GoArrowUpRight />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Eyes2;
