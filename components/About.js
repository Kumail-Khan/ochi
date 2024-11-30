"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  const btnArrow1 = useRef();
  const btnArrow2 = useRef();
  const btnArrow3 = useRef();
  const btnArrow4 = useRef();
  const btnArrow5 = useRef();

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
    gsap.to(btnArrow4.current, {
      scale: 0.95,
      duration: 0.9,
    });
    gsap.to(btnArrow5.current, {
      scale: 1.1,
      duration: 0.9,
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
    gsap.to(btnArrow4.current, {
      scale: 1,
      duration: 0.9,
    });
    gsap.to(btnArrow5.current, {
      scale: 1,
      duration: 0.9,
    });
  }

  return (
    <>
      {/* PC version */}
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className=" w-full pb-[5vw] bg-[#CDEA68] font-[NM] z-50 text-[#212121] rounded-tl-3xl rounded-tr-3xl max-md:hidden">
        <h1 className="text-[3.7vw] font-normal mr-[15vw] leading-none tracking-tight py-10 px-16 max-1400:text-[3.3vw] max-xl:px-5">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to
          <p className="underline inline-block ml-[.6vw]">raise funds</p>, sell
          prod­ucts,
          <p className="underline inline-block ml-[.6vw]">
            ex­plain com­plex ideas
          </p>
          , and hire great peo­ple.
        </h1>
        <div className="w-full border-[#8a8a8a] border-t-[1px] py-9 px-16 max-xl:px-5 mt-[2vw] flex justify-between text-[1.1vw] font-normal max-1400:text-[1.4vw] max-lg:text-[1.6vw] max-1400:px-10 max-lg:py-6">
          <div className="left w-[38%]">
            <h1 className="">What you can expect:</h1>
          </div>
          <div className="right flex justify-between w-[69%]">
            <div className="w-2/4 flex flex-col gap-9 pr-[3vw]">
              <p>
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
              </p>
              <p>
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
            <div className="w-2/4 pl-[8vw] flex flex-col justify-end max-xl:pl-[17vw] max-lg:pl-[20vw]">
              {["S:", "Instagram", "Behance", "Facebook", "Linkedin"].map(
                (items, index) => {
                  return (
                    <div key={index}>
                      <h1
                        className={`cursor-pointer w-fit h-fit ${
                          index === 0 && "mb-[1vw]"
                        }`}>
                        {items}
                      </h1>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="w-full border-[#8a8a8a] border-t-[1px] py-5  px-16 mt-[7vw] flex max-xl:px-5">
          <div className="w-1/2">
            <h1 className="text-[3.5vw] ">Our approach:</h1>
            <button
              onMouseEnter={() => BtnEnter()}
              onMouseLeave={() => BtnLeave()}
              ref={btnArrow1}
              className="relative mt-3 py-[1vw]  px-[1.5vw] max-lg:py-[1.4vw] max-lg:px-[2vw] pr-[4.5vw] max-lg:pr-[5.5vw] bg-[#212121] text-white text-[1.2vw] max-lg:text-[1.5vw] uppercase rounded-full flex gap-10 items-center justify-center">
              Read more
              <div
                ref={btnArrow2}
                className="absolute right-2 scale-[.2] w-[3vw] max-lg:w-[3.5vw] h-[3vw] max-lg:h-[3.5vw] overflow-hidden bg-[#f1f1f1] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                <div
                  ref={btnArrow3}
                  className=" text-black opacity-0 font-semibold">
                  <GoArrowUpRight />
                </div>
              </div>
            </button>
          </div>
          <div ref={btnArrow4} className="w-1/2 rounded-2xl  overflow-hidden">
            <img
              ref={btnArrow5}
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              className="w-full rounded-2xl "
            />
          </div>
        </div>
      </div>

      {/* mobile version  */}

      <div className=" md:hidden bg-[#004D43]">
        <div className=" w-full pb-[5vw] bg-[#CDEA68] font-[NM] z-50 text-[#212121] rounded-tl-3xl rounded-tr-3xl">
          <h1 className="text-[3.7vw] font-normal mr-[15vw] leading-none tracking-tight py-10 px-16 max-1400:text-[3.3vw] max-mob:text-[6vw] max-xl:px-5">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to
            <p className="underline inline-block ml-[.6vw]">raise funds</p>,
            sell prod­ucts,
            <p className="underline inline-block ml-[.6vw]">
              ex­plain com­plex ideas
            </p>
            , and hire great peo­ple.
          </h1>
          <div className="w-full border-[#8a8a8a] max-md:flex-col border-t-[1px] py-9 px-16 max-xl:px-5 mt-[2vw] flex justify-between text-[1.1vw] font-normal max-1400:text-[1.4vw] max-lg:text-[1.6vw] max-md:text-[2.5vw] max-mob:text-[3.5vw] max-1400:px-10 max-lg:py-6">
            <div className="left w-[38%]">
              <h1 className="mb-10">What you can expect:</h1>
            </div>
            <div className="right flex justify-between w-[69%] max-mob:w-[85%] max-md:flex-col">
              <div className="w-2/4 flex flex-col gap-9 pr-[3vw] max-lg:w-full  ">
                <p>
                  We create tailored presentations to help you persuade your
                  colleagues, clients, or investors. Whether it’s live or
                  digital, delivered for one or a hundred people.
                </p>
                <p className="mb-10">
                  We believe the mix of strategy and design (with a bit of
                  coffee) is what makes your message clear, convincing, and
                  captivating.
                </p>
              </div>
              <div className="w-2/4 pl-[8vw] flex flex-col justify-end max-xl:pl-[17vw] max-lg:pl-[20vw] max-md:justify-start max-md:pl-[0vw]">
                {["S:", "Instagram", "Behance", "Facebook", "Linkedin"].map(
                  (items, index) => {
                    return (
                      <div key={index}>
                        <h1
                          className={`cursor-pointer w-fit h-fit ${
                            index === 0 && "mb-[1vw]"
                          }`}>
                          {items}
                        </h1>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="w-full border-[#8a8a8a] border-t-[1px] py-5  px-16 mt-[7vw] flex max-xl:px-5 max-lg:flex-col  ">
            <div className="w-1/2 max-mob:w-full">
              <h1 className="text-[3.5vw] max-md:text-[5.5vw]  max-mob:text-[8vw]">
                Our approach:
              </h1>
              <button
                onMouseEnter={() => BtnEnter()}
                onMouseLeave={() => BtnLeave()}
                ref={btnArrow1}
                className="relative mt-3 py-[1vw]  px-[1.5vw] max-lg:py-[1.4vw] max-lg:px-[2vw] max-md:py-[2vw] max-md:px-[3vw] pr-[4.5vw] max-mob:py-[3vw] max-mob:px-[4vw] max-lg:pr-[5.5vw] max-md:pr-[10vw] max-mob:pr-[15vw] bg-[#212121] text-white text-[1.2vw] max-lg:text-[1.5vw] max-md:text-[2.2vw] max-mob:text-[3vw] mb-10 uppercase rounded-full flex gap-10 items-center justify-center">
                Read more
                <div
                  ref={btnArrow2}
                  className="absolute right-2 scale-[.2] w-[3vw] max-lg:w-[3.5vw] max-md:w-[4.3vw] max-mob:w-[6.3vw] h-[3vw] max-lg:h-[3.5vw] max-md:h-[4.3vw] max-mob:h-[6.3vw] overflow-hidden bg-[#f1f1f1] rounded-full font-light text-[1.6rem] flex items-center justify-center">
                  <div
                    ref={btnArrow3}
                    className=" text-black opacity-0 font-semibold">
                    <GoArrowUpRight />
                  </div>
                </div>
              </button>
            </div>
            <div
              ref={btnArrow4}
              className="w-1/2 rounded-2xl  overflow-hidden max-lg:w-full">
              <img
                ref={btnArrow5}
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                className="w-full rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
