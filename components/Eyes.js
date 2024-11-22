"use client";

import React, { useEffect, useState } from "react";

const Eyes = () => {
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

  return (
    <>
      <div className="w-full h-screen ">
        <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.1"
            className="absolute mt-[10vw] left-[35%] flex gap-10 max-1400:mt-[15vw] max-xl:mt-[20vw]">
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
              <div className="EyeOne relative w-[10vw] flex items-center justify-center h-[10vw] rounded-full bg-[#212121]">
                <h1 className="text-[1.6vw] text-white uppercase font-[NM]">
                  PLay
                </h1>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line1 w-full h-9 flex items-center ">
                  <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
              <div className="relative  flex items-center justify-center  w-[10vw] h-[10vw] rounded-full bg-[#212121]">
                <h1 className="text-[1.6vw] text-white uppercase font-[NM]">
                  PLay
                </h1>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line1 w-full h-9 flex items-center ">
                  <div className=" w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
