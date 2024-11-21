"use client";

import About from "@/components/About";
import Cards from "@/components/Cards";
import Eyes from "@/components/Eyes";
import Eyes2 from "@/components/Eyes2";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Marqiue from "@/components/Marqiue";
import Navbar from "@/components/Navbar";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";

const page = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full h-auto bg-[#f1f1f1] text-black overflow-x-hidden ">
        <Navbar />
        <Landing />
        <Marqiue />
        <About />
        <Eyes />
        <Cards />
        <Eyes2 />
        <Footer />
      </div>
    </>
  );
};

export default page;
