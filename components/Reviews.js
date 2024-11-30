"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const Reviews = () => {
  const btnArrow1 = useRef();
  const btnArrow2 = useRef();
  const btnArrow3 = useRef();
  const btnArrow4 = useRef();

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
    gsap.to(btnArrow4.current, {
      opacity: 1,
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
    gsap.to(btnArrow4.current, {
      opacity: 0,
      duration: 0.2,
    });
  }

  const btnArrow5 = useRef();
  const btnArrow6 = useRef();
  const btnArrow7 = useRef();
  const btnArrow8 = useRef();

  function BtnEnter2() {
    gsap.to(btnArrow5.current, {
      color: "white",
      duration: 0.2,
    });
    gsap.to(btnArrow6.current, {
      scale: 1,
      duration: 0.2,
    });
    gsap.to(btnArrow7.current, {
      background: "#212121",
      color: "white",
      duration: 0.2,
    });
    gsap.to(btnArrow8.current, {
      opacity: 1,
      duration: 0.2,
    });
  }
  function BtnLeave2() {
    gsap.to(btnArrow5.current, {
      color: "black",
      duration: 0.2,
    });
    gsap.to(btnArrow6.current, {
      scale: 0,
      duration: 0.2,
    });
    gsap.to(btnArrow7.current, {
      background: "#f1f1f1",
      color: "black",
      duration: 0.2,
    });
    gsap.to(btnArrow8.current, {
      opacity: 0,
      duration: 0.2,
    });
  }

  return (
    <>
      {/* pc version */}

      <div className="w-full  bg-[#f1f1f1] rounded-tl-3xl rounded-tr-3xl h-auto pb-96 font-[NM] text-[#212121] max-md:hidden">
        <div className="w-full py-10 pt-28 border-[#a0a0a0] border-b-[1px]">
          <h1 className=" px-16 text-[3.5vw] max-lg:text-[4vw] tracking-tighter max-lg:tracking-tight text-[#212121] font-light font-[NM] max-xl:px-5">
            Clients’ reviews
          </h1>
        </div>
        <div className="flex w-full px-16 pt-3 max-xl:px-5">
          <div className="flex max-lg:flex-col max-lg:gap-9  w-1/2 text-[1.1vw] max-lg:text-[1.7vw] max-1400:text-[1.4vw]">
            <h1 className="w-1/2">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Karman Ventures
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
            </h1>
            <h1 className="w-1/2">Services:</h1>
          </div>
          <div className="flex justify-between max-lg:justify-end w-1/2 text-[1.1vw] max-lg:text-[1.7vw] max-1400:text-[1.4vw]">
            <h1 className="max-lg:hidden">William Barnes</h1>
            <h1 className="uppercase text-[#afafaf] font-medium">Read</h1>
          </div>
        </div>
        <div className="flex max-lg:flex-col w-full px-16 pt-3 max-lg:px-5">
          <div className="flex w-1/2 max-lg:w-full">
            <div className="w-1/2 max-lg:hidden"></div>
            <div className="w-auto flex flex-col max-lg:flex-row max-lg:gap-4 mt-24 max-lg:mt-4">
              <div
                onMouseEnter={() => BtnEnter()}
                onMouseLeave={() => BtnLeave()}
                className="flex gap-2 rounded-full items-center justify-center mb-5 max-lg:mb-0 cursor-pointer">
                <button
                  ref={btnArrow3}
                  className=" py-[.3vw] px-[.8vw]   text-[#5b5b5b] uppercase text-[1vw] max-lg:text-[1.4vw] font-medium rounded-full border-[#5b5b5b] border-[1px] max-1400:w-[11vw] max-lg:w-[15vw]  max-1400:text-[1.1vw] max-1400:py-[.5vw]">
                  investors deck
                </button>
                <div
                  ref={btnArrow4}
                  className="relative opacity-0 w-10 h-10 max-lg:w-[3.3vw] max-lg:hidden overflow-hidden border-zinc-600 border-[1px] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                  <div
                    ref={btnArrow1}
                    className="absolute z-10 text-[#5b5b5b]  ">
                    <GoArrowUpRight />
                  </div>
                  <div
                    ref={btnArrow2}
                    className="bg-[#212121] absolute w-10 rounded-full h-10 scale-0"></div>
                </div>
              </div>
              <div
                onMouseEnter={() => BtnEnter2()}
                onMouseLeave={() => BtnLeave2()}
                className="flex rounded-full gap-2 mr-14 items-center justify-center cursor-pointer max-1400:mr-5">
                <button
                  ref={btnArrow7}
                  className=" py-[.3vw] w-[7vw]  text-[#5b5b5b] uppercase text-[1vw] max-lg:text-[1.4vw] font-medium rounded-full border-[#5b5b5b] border-[1px] max-1400:w-[9vw] max-lg:w-[11vw] max-1400:text-[1.1vw] max-1400:py-[.5vw]">
                  sales deck
                </button>
                <div
                  ref={btnArrow8}
                  className="relative opacity-0 w-10 h-10 max-lg:w-[3.3vw] max-lg:hidden overflow-hidden border-zinc-600 border-[1px] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                  <div
                    ref={btnArrow5}
                    className="absolute z-10 text-[#5b5b5b]  ">
                    <GoArrowUpRight />
                  </div>
                  <div
                    ref={btnArrow6}
                    className="bg-[#212121] absolute w-10 rounded-full h-10 scale-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 max-lg:full">
            <img
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              className="w-[8vw] rounded-2xl mt-24 max-lg:mt-5 max-1400:w-[9vw] max-lg:w-[10.5vw]"
            />
            <p className="text-[1.1vw] max-1400:text-[1.2vw] max-lg:text-[1.6vw] font-normal pr-[14vw] max-lg:pr-[0vw] mt-5">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
        {/* more reviews */}
        <div className="more-reviews mt-20 text-[#383838]">
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[1.8vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Planetly
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Nina Walloch</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[1.8vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Workiz Easy
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Tomer Levy</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[1.8vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Premium Blend
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Ellen Kim</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[1.8vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Hypercare Systems
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Brendan Goss</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[1.8vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Officevibe
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Raff Labrie</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[1.8vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Orderlion
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Stefan Strohmer</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[1.8vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Black Book
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Jaci Smith</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-b-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[1.8vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Trawa Energy
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">David Budde</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase ">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* revies section end */}
        <div className=" flex max-lg:flex-col gap-6 w-full h-auto px-16 pt-32 max-xl:px-5">
          <div className="bg-[#004D43] w-1/2 max-lg:w-full h-[25vw] rounded-2xl relative max-xl:w-[35%] max-xl:h-[30vw] max-lg:h-[40vw]">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                className="w-[8vw] max-lg:w-[14vw]"
              />
            </div>
            <h1 className="absolute bottom-8 left-10 px-4 py-1 rounded-full border-[1px] text-[1vw] max-lg:text-[1.6vw] border-[#C2E166] text-[#C2E166]">
              ©️2019-2024
            </h1>
          </div>
          <div className="flex gap-6 w-1/2 max-lg:w-full h-[25vw] max-xl:w-[65%] max-xl:h-[30vw] max-lg:h-[40vw]">
            <div className="relative bg-[#212121] w-1/2 rounded-2xl cursor-pointer">
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                  className="w-[8vw] max-lg:w-[14vw]"
                />
              </div>
              <h1 className="absolute uppercase bottom-8 left-10 px-4 py-1 rounded-full border-[1px] text-[1vw] max-lg:text-[1.6vw] border-[#d2d2d2] text-[#cacaca] hover:bg-[#cacaca] hover:text-[#212121] duration-200 ease-in-out">
                Rating 5.0 on Clutch
              </h1>
            </div>
            <div className="relative bg-[#212121] w-1/2 rounded-2xl cursor-pointer">
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                  className="w-[6vw] max-lg:w-[10vw]"
                />
              </div>
              <h1 className="absolute uppercase bottom-8 left-10 px-4 py-1 rounded-full border-[1px] text-[1vw] max-lg:text-[1.6vw]  border-[#c6c6c6] text-[#cacaca] hover:bg-[#d2d2d2] hover:text-[#212121] duration-200 ease-in-out">
                Bussiness bootcamp alumni
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* mobile version */}

      <div className="w-full  bg-[#f1f1f1] rounded-tl-3xl rounded-tr-3xl h-auto font-[NM] text-[#212121] md:hidden">
        <div className="w-full py-10 pt-28 border-[#a0a0a0] border-b-[1px]">
          <h1 className=" px-16 text-[5vw]  tracking-tighter max-lg:tracking-tight text-[#212121] font-light font-[NM] max-xl:px-5">
            Clients’ reviews
          </h1>
        </div>
        <div className="flex w-full px-16 pt-3 max-xl:px-5">
          <div className="flex max-lg:flex-col max-lg:gap-9  w-1/2 text-[2.4vw] max-mob:text-[3.5vw]">
            <h1 className="w-1/2 max-mob:w-[60%]">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Karman Ventures
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
            </h1>
            <h1 className="w-1/2 max-mob:w-[40%]">Services:</h1>
          </div>
          <div className="flex justify-between max-lg:justify-end w-1/2 text-[2.4vw] max-mob:text-[3.5vw]">
            <h1 className="max-lg:hidden">William Barnes</h1>
            <h1 className="uppercase text-[#afafaf] font-medium">Read</h1>
          </div>
        </div>
        <div className="flex max-lg:flex-col w-full px-16 pt-3 max-lg:px-5">
          <div className="flex w-1/2 max-lg:w-full">
            <div className="w-1/2 max-lg:hidden"></div>
            <div className="w-auto flex flex-col max-lg:flex-row max-lg:gap-4 mt-24 max-lg:mt-4">
              <div
                onMouseEnter={() => BtnEnter()}
                onMouseLeave={() => BtnLeave()}
                className="flex gap-2 rounded-full items-center justify-center mb-5 max-lg:mb-0 cursor-pointer">
                <button
                  ref={btnArrow3}
                  className=" py-[.3vw] px-[1.2vw] max-mob:px-[2vw]  text-[#5b5b5b] uppercase text-[2vw] max-mob:text-[3.2vw] font-medium rounded-full border-[#5b5b5b] border-[1px]   max-1400:py-[.5vw]">
                  investors deck
                </button>
                <div
                  ref={btnArrow4}
                  className="relative opacity-0 w-10 h-10 max-lg:w-[3.3vw] max-lg:hidden overflow-hidden border-zinc-600 border-[1px] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                  <div
                    ref={btnArrow1}
                    className="absolute z-10 text-[#5b5b5b]  ">
                    <GoArrowUpRight />
                  </div>
                  <div
                    ref={btnArrow2}
                    className="bg-[#212121] absolute w-10 rounded-full h-10 scale-0"></div>
                </div>
              </div>
              <div
                onMouseEnter={() => BtnEnter2()}
                onMouseLeave={() => BtnLeave2()}
                className="flex rounded-full gap-2 mr-14 items-center justify-center cursor-pointer max-1400:mr-5">
                <button
                  ref={btnArrow7}
                  className=" py-[.3vw] px-[1.2vw] max-mob:px-[2vw]  text-[#5b5b5b] uppercase text-[2vw] max-mob:text-[3.2vw] font-medium rounded-full border-[#5b5b5b] border-[1px]   max-1400:py-[.5vw]">
                  sales deck
                </button>
                <div
                  ref={btnArrow8}
                  className="relative opacity-0 w-10 h-10 max-lg:w-[3.3vw] max-lg:hidden overflow-hidden border-zinc-600 border-[1px] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                  <div
                    ref={btnArrow5}
                    className="absolute z-10 text-[#5b5b5b]  ">
                    <GoArrowUpRight />
                  </div>
                  <div
                    ref={btnArrow6}
                    className="bg-[#212121] absolute w-10 rounded-full h-10 scale-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <h1 className="text-[2.4vw] max-mob:text-[3.5vw] mt-5">
              {" "}
              William Barnes
            </h1>
            <img
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              className="w-[8vw] rounded-2xl mt-24 max-lg:mt-5 max-1400:w-[9vw] max-lg:w-[10.5vw] max-mob:w-[20vw]"
            />
            <p className="text-[2.4vw] max-mob:text-[3.5vw]  font-normal  mt-5">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
        {/* more reviews */}
        <div className="more-reviews mt-20 text-[#383838]">
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[2.4vw] max-mob:text-[3.5vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Planetly
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Nina Walloch</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[2.4vw] max-mob:text-[3.5vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Workiz Easy
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Tomer Levy</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[2.4vw] max-mob:text-[3.5vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Premium Blend
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Ellen Kim</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[2.4vw] max-mob:text-[3.5vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Hypercare Systems
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Brendan Goss</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[2.4vw] max-mob:text-[3.5vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Officevibe
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Raff Labrie</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[2.4vw] max-mob:text-[3.5vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Orderlion
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Stefan Strohmer</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[2.4vw] max-mob:text-[3.5vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Black Book
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">Jaci Smith</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-b-[1px] border-[#979797] py-6 max-lg:py-3">
            <div className="flex justify-between px-16  text-[1.1vw] max-lg:text-[2.4vw] max-mob:text-[3.5vw] max-1400:text-[1.3vw] max-xl:px-5">
              <button className="cta">
                <span className="hover-underline-animation capitalize">
                  Trawa Energy
                </span>
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"></path>
              </button>
              <div className="w-1/2 flex justify-between max-lg:justify-end">
                <h1 className="max-lg:hidden">David Budde</h1>
                <button className="cta">
                  <span className="hover-underline-animation uppercase ">
                    Read
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* revies section end */}
        <div className=" flex max-lg:flex-col gap-6 w-full h-auto px-16 pt-32 max-xl:px-5">
          <div className="relative bg-[#004D43] w-1/2 max-lg:w-full h-[25vw] rounded-2xl  max-lg:h-[40vw] max-mob:h-[70vw]">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                className="w-[8vw] max-lg:w-[20vw]"
              />
            </div>
            <h1 className="absolute bottom-8 left-10 max-mob:left-5 px-4 py-1 rounded-full border-[1px] text-[1vw] max-lg:text-[2.4vw] max-mob:text-[3vw] border-[#C2E166] text-[#C2E166]">
              ©️2019-2024
            </h1>
          </div>
          <div className="flex flex-col gap-6 w-full h-auto  ">
            <div className="relative bg-[#212121] w-full h-[40vw] max-mob:h-[70vw] rounded-2xl cursor-pointer">
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                  className="w-[8vw] max-lg:w-[20vw]"
                />
              </div>
              <h1 className="absolute uppercase bottom-8 left-10 max-mob:left-5 px-4 py-1 rounded-full border-[1px] text-[1vw] max-lg:text-[2vw] max-mob:text-[3vw] border-[#d2d2d2] text-[#cacaca] hover:bg-[#cacaca] hover:text-[#212121] duration-200 ease-in-out">
                Rating 5.0 on Clutch
              </h1>
            </div>
            <div className="relative bg-[#212121] w-full h-[40vw] max-mob:h-[70vw] rounded-2xl cursor-pointer">
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                  className="w-[6vw] max-lg:w-[18vw]"
                />
              </div>
              <h1 className="absolute uppercase bottom-8 left-10 max-mob:left-5 px-4 py-1 rounded-full border-[1px] text-[1vw] max-lg:text-[2vw] max-mob:text-[3vw] border-[#c6c6c6] text-[#cacaca] hover:bg-[#d2d2d2] hover:text-[#212121] duration-200 ease-in-out">
                Bussiness bootcamp alumni
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
