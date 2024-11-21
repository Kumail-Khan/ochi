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
    <div className="w-full  bg-[#f1f1f1] rounded-tl-3xl rounded-tr-3xl h-auto pb-96 font-[NM] text-[#212121]">
      <div className="w-full py-10 pt-28 border-[#a0a0a0] border-b-[1px]">
        <h1 className=" px-16 text-[3.5vw] tracking-tighter text-[#212121] font-light font-[NM]">
          Clients’ reviews
        </h1>
      </div>
      <div className="flex w-full px-16 pt-3">
        <div className="flex  w-1/2 text-[1.1vw]">
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
        <div className="flex justify-between w-1/2 text-[1.1vw]">
          <h1>William Barnes</h1>
          <h1 className="uppercase text-[#afafaf] font-medium">Read</h1>
        </div>
      </div>
      <div className="flex w-full px-16 pt-3">
        <div className="flex w-1/2 ">
          <div className="w-1/2"></div>
          <div className="w-auto flex flex-col mt-24">
            <div
              onMouseEnter={() => BtnEnter()}
              onMouseLeave={() => BtnLeave()}
              className="flex gap-2 rounded-full items-center justify-center mb-5 cursor-pointer">
              <button
                ref={btnArrow3}
                className=" py-[.3vw] px-[.8vw]  text-[#5b5b5b] uppercase text-[1vw] font-medium rounded-full border-[#5b5b5b] border-[1px] ">
                investors deck
              </button>
              <div
                ref={btnArrow4}
                className="relative opacity-0 w-10 h-10 overflow-hidden border-zinc-600 border-[1px] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                <div ref={btnArrow1} className="absolute z-10 text-[#5b5b5b]  ">
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
              className="flex rounded-full gap-2 mr-14 items-center justify-center cursor-pointer">
              <button
                ref={btnArrow7}
                className=" py-[.3vw] w-[7vw]  text-[#5b5b5b] uppercase text-[1vw] font-medium rounded-full border-[#5b5b5b] border-[1px] ">
                sales deck
              </button>
              <div
                ref={btnArrow8}
                className="relative opacity-0 w-10 h-10 overflow-hidden border-zinc-600 border-[1px] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                <div ref={btnArrow5} className="absolute z-10 text-[#5b5b5b]  ">
                  <GoArrowUpRight />
                </div>
                <div
                  ref={btnArrow6}
                  className="bg-[#212121] absolute w-10 rounded-full h-10 scale-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
            className="w-[8vw] rounded-2xl mt-24"
          />
          <p className="text-[1.1vw] font-normal pr-[14vw] mt-5">
            They were transparent about the time and the stages of the project.
            The end product is high quality, and I feel confident about how they
            were handholding the client through the process. I feel like I can
            introduce them to someone who needs to put a sales deck together
            from scratch, and they would be able to handhold the client
            experience from 0 to 100 very effectively from story to design. 5/5
          </p>
        </div>
      </div>
      <div className="more-reviews mt-20 text-[#383838]">
        <div className="border-t-[1px] border-[#979797] py-6">
          <div className="flex justify-between px-16  text-[1.1vw]">
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
            <div className="w-1/2 flex justify-between">
              <h1>Nina Walloch</h1>
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
        <div className="border-t-[1px] border-[#979797] py-6">
          <div className="flex justify-between px-16  text-[1.1vw]">
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
            <div className="w-1/2 flex justify-between">
              <h1>Tomer Levy</h1>
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
        <div className="border-t-[1px] border-[#979797] py-6">
          <div className="flex justify-between px-16  text-[1.1vw]">
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
            <div className="w-1/2 flex justify-between">
              <h1>Ellen Kim</h1>
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
        <div className="border-t-[1px] border-[#979797] py-6">
          <div className="flex justify-between px-16  text-[1.1vw]">
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
            <div className="w-1/2 flex justify-between">
              <h1>Brendan Goss</h1>
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
        <div className="border-t-[1px] border-[#979797] py-6">
          <div className="flex justify-between px-16  text-[1.1vw]">
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
            <div className="w-1/2 flex justify-between">
              <h1>Raff Labrie</h1>
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
        <div className="border-t-[1px] border-[#979797] py-6">
          <div className="flex justify-between px-16  text-[1.1vw]">
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
            <div className="w-1/2 flex justify-between">
              <h1>Stefan Strohmer</h1>
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
        <div className="border-t-[1px] border-[#979797] py-6">
          <div className="flex justify-between px-16  text-[1.1vw]">
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
            <div className="w-1/2 flex justify-between">
              <h1>Jaci Smith</h1>
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
        <div className="border-t-[1px] border-b-[1px] border-[#979797] py-6">
          <div className="flex justify-between px-16  text-[1.1vw]">
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
            <div className="w-1/2 flex justify-between">
              <h1>David Budde</h1>
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
      <div className=" flex  gap-6 w-full h-auto px-16 pt-32">
        <div className="bg-[#004D43] w-1/2 h-[25vw] rounded-2xl relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              className="w-[8vw]"
            />
          </div>
          <h1 className="absolute bottom-8 left-10 px-4 py-1 rounded-full border-[1px] text-[1vw] border-[#C2E166] text-[#C2E166]">
            ©️2019-2024
          </h1>
        </div>
        <div className="flex gap-6 w-1/2 h-[25vw] ">
          <div className="relative bg-[#212121] w-1/2 rounded-2xl cursor-pointer">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                className="w-[8vw]"
              />
            </div>
            <h1 className="absolute uppercase bottom-8 left-10 px-4 py-1 rounded-full border-[1px] text-[1vw] border-[#d2d2d2] text-[#cacaca] hover:bg-[#cacaca] hover:text-[#212121] duration-200 ease-in-out">
              Rating 5.0 on Clutch
            </h1>
          </div>
          <div className="relative bg-[#212121] w-1/2 rounded-2xl cursor-pointer">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                className="w-[6vw]"
              />
            </div>
            <h1 className="absolute uppercase bottom-8 left-10 px-4 py-1 rounded-full border-[1px] text-[1vw]  border-[#c6c6c6] text-[#cacaca] hover:bg-[#d2d2d2] hover:text-[#212121] duration-200 ease-in-out">
              Bussiness bootcamp alumni
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
