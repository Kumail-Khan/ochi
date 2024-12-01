"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import { TbMenu } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const menuOpen = useRef();
  const closeLineOne = useRef();
  const closeLineTwo = useRef();
  const menuText = useRef();
  const menuTextTwo = useRef();

  function openMenu() {
    gsap.to(menuOpen.current, {
      top: 0,
      duration: 0.5,
    });
    gsap.from(closeLineOne.current, {
      rotate: "1deg",
      delay: 0.5,
      opacity: 0,
      duration: 0.3,
    });
    gsap.from(closeLineTwo.current, {
      rotate: "1deg",
      delay: 0.5,
      opacity: 0,
      duration: 0.3,
    });
    gsap.from(menuText.current, {
      delay: 0.4,
      opacity: 0,
      duration: 0.4,
    });
    gsap.from(menuTextTwo.current, {
      delay: 0.4,
      opacity: 0,
      duration: 0.4,
    });
  }
  function closeMenu() {
    gsap.to(menuOpen.current, {
      top: "-150%",
      duration: 0.5,
    });
  }
  return (
    <>
      <div
        id="nav-parent"
        className="relative py-3 px-16 w-full flex justify-between items-center max-xl:px-5 max-xl:py-2 max-lg:py-4">
        <div className="logo">
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
              fill="currentColor"></path>
            <path
              d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
              fill="currentColor"></path>
            <path
              d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
              fill="currentColor"></path>
            <path
              d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
              fill="currentColor"></path>
            <path
              d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
              fill="currentColor"></path>
          </svg>
        </div>
        <div className="links flex gap-3 max-xl:gap-1 max-lg:hidden">
          {["Services", "Our work", "About us", "Insights", "Contact us"].map(
            (items, index) => (
              <StyledWrapper key={index}>
                <button
                  className={`text-[21px] w-[105px] text-black opacity-90 font-normal max-1400:text-[1.3vw] max-xl:w-[80px]  ${
                    index === 4 &&
                    "ml-[17.3vw] max-1400:ml-[8vw] max-xl:ml-[15vw]"
                  } `}>
                  <div className="text justify-center ">
                    <span>{items}</span>
                  </div>
                  <div className="clone justify-center">
                    <span>{items}</span>
                  </div>
                </button>
              </StyledWrapper>
            )
          )}
        </div>
        <div
          onClick={() => {
            openMenu();
          }}
          className="flex text-xl w-fit h-fit cursor-pointer lg:hidden">
          <TbMenu />
          <TbMenu />
        </div>
      </div>
      {/* menu option */}
      <div
        ref={menuOpen}
        className="w-full h-screen bg-zinc-800 absolute -top-[150%]  z-[100] lg:hidden">
        <div className="w-full h-screen bg-[#212121] fixed">
          <div
            id="nav-parent"
            className="relative py-4 px-5 w-full flex justify-between items-center ">
            <div className="logo text-white">
              <svg
                width="72"
                height="30"
                viewBox="0 0 72 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                  fill="currentColor"></path>
                <path
                  d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
                  fill="currentColor"></path>
                <path
                  d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
                  fill="currentColor"></path>
                <path
                  d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
                  fill="currentColor"></path>
                <path
                  d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
                  fill="currentColor"></path>
              </svg>
            </div>
            <div
              onClick={() => {
                closeMenu();
              }}
              className="flex flex-col items-center justify-center cursor-pointer h-6">
              <div
                ref={closeLineOne}
                className="w-6 h-[1px] bg-[white] rotate-[45deg]"></div>
              <div
                ref={closeLineTwo}
                className="w-6 h-[1px] bg-[white] -rotate-[45deg]"></div>
            </div>
          </div>
          <div className="w-full h-full mt-16 border-t-[1px] border-t-[#7d7d7d] overflow-hidden ">
            <div ref={menuText} className="links flex flex-col px-5 py-2">
              {[
                "Services",
                "Our work",
                "About us",
                "Insights",
                "Contact us",
              ].map((items, index) => (
                <button key={index} className="cta">
                  <span className="hover-underline-animation text-[80px] uppercase text-[#FFFFFF] font-[FG] leading-[65px] tracking-tight  max-lg:after:h-[6px] max-lg:after:bg-[#FFFFFF] max-lg:after:w-[100%] max-lg:after:mb-[5px] max-lg:after:duration-[0.4s]">
                    {items}
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </button>
              ))}
            </div>
            <div
              ref={menuTextTwo}
              className=" w-full  h-auto  justify-between text-[#FFFFFF] px-5 mt-3">
              <div className=" mt-[1vw]">
                <h1 className="text-[22px] mb-5">S:</h1>
                <div className="flex flex-col justify-between text-[15px]">
                  <button className="cta">
                    <span className="hover-underline-animation tracking-tight capitalize max-lg:after:bg-[#FFFFFF]">
                      instagram
                    </span>
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"></path>
                  </button>
                  <button className="cta">
                    <span className="hover-underline-animation tracking-tight capitalize max-lg:after:bg-[#FFFFFF]">
                      Behance
                    </span>
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"></path>
                  </button>
                  <button className="cta">
                    <span className="hover-underline-animation tracking-tight capitalize max-lg:after:bg-[#FFFFFF]">
                      Facebook
                    </span>
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"></path>
                  </button>
                  <button className="cta">
                    <span className="hover-underline-animation tracking-tight capitalize max-lg:after:bg-[#FFFFFF]">
                      linkedin
                    </span>
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"></path>
                  </button>
                </div>
              </div>
              <div className=" mt-[1vw]">
                <h1 className="text-[22px] mb-5">Lx:</h1>
                <div className="flex  text-[15px]">
                  <button className="cta relative">
                    <span className="hover-underline-animation tracking-tightcapitalize max-lg:after:bg-[#FFFFFF]">
                      202-1965 W 4th Ave br
                    </span>
                    <br />
                    <span className="hover-underline-animation tracking-tight capitalize absolute -left-[18px]   max-lg:after:bg-[#FFFFFF]">
                      Vancouver, Canada
                    </span>
                    <br />
                    <br />
                    <span className="hover-underline-animation tracking-tight capitalize mt-10 absolute -left-[30px]  max-lg:after:bg-[#FFFFFF]">
                      30 Chukarina St
                    </span>
                    <br />
                    <span className="hover-underline-animation tracking-tight  capitalize absolute -left-[40px]  max-lg:after:bg-[#FFFFFF]">
                      Lviv, Ukraine
                    </span>
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"></path>
                  </button>
                </div>
              </div>
              <div className=" mt-[1vw]">
                <h1 className="text-[22px] mb-5">E:</h1>
                <div className="flex flex-col justify-between text-[15px]">
                  <button className="cta">
                    <span className="hover-underline-animation tracking-tight capitalize max-lg:after:bg-[#FFFFFF]">
                      hello@ochi.design
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
        </div>
      </div>
    </>
  );
};

const StyledWrapper = styled.div`
  button {
    height: 30px;
    overflow: hidden;
    border: none;
    color: black;
    background: none;
    position: relative;
    padding-bottom: 1.5em;
    cursor: pointer;
  }

  button > div,
  button > svg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    // justify-content: center;
  }

  button:before {
    content: "";
    position: absolute;
    height: 1px;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: bottom right;
    background: currentColor;
    transition: transform 0.55s ease-out;
  }

  button:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  button .clone > *,
  button .text > * {
    transition: 0.2s;
    margin-left: 1px;
  }

  button .clone > * {
    transform: translateY(60px);
  }

  button:hover .clone > * {
    transform: translateY(0px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  button:hover .text > * {
    transform: translateY(-60px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  button:hover .clone > :nth-child(1) {
    transition-delay: 0.15s;
  }

  button:hover .clone > :nth-child(2) {
    transition-delay: 0.2s;
  }

  button:hover .clone > :nth-child(3) {
    transition-delay: 0.25s;
  }

  button:hover .clone > :nth-child(4) {
    transition-delay: 0.3s;
  }
`;

export default Navbar;
