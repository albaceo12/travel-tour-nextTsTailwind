"use client";

import React, { useEffect, useState } from "react";

// Icons
import { HiFilter } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [maxPrice, setMaxPrice] = useState(5000);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // from public
  const videoSrc = "/video1.mp4";

  return (
    <section className="home w-full relative flex items-center justify-center m-auto h-screen">
      {/* Video and Overlay */}
      <div className="overlay absolute h-full w-full bg-[#2f6a7f] top-0 bottom-0 z-10 mix-blend-hard-light"></div>

      <video
        src={videoSrc}
        muted
        loop
        autoPlay
        typeof="video/mp4"
        className="absolute h-full w-full top-0 bottom-0 object-cover"
      ></video>

      {/* Home Content */}
      <div className="homeContent container w-full h-max p-[8rem_1.5rem_3rem] flex flex-col items-stretch m-auto text-white z-[100] gap-12 sm:p-[8rem_4rem_3rem]">
        {/* Text Section */}
        <div className="textDiv p-4">
          <span
            data-aos="fade-up"
            className="smallText text-[13px] uppercase sm:text-[16px]"
          >
            Our Packages
          </span>
          <h1
            data-aos="fade-up"
            className="homeTitle relative text-[1.8rem] sm:text-[2.3rem] font-bold after:content-[''] after:absolute after:bg-secondary after:h-[5px] after:w-[165px] after:left-0 after:bottom-[5px] after:-z-10 after:hidden sm:after:block"
          >
            Search your Holidays
          </h1>
        </div>

        {/* Card Search Section */}
        <div
          data-aos="fade-up"
          className="cardDiv relative p-8 bg-white rounded-xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Destination Input */}
          <div className="destinationInput">
            <label
              htmlFor="city"
              className="block text-textColor pb-2 text-[13px] font-medium"
            >
              Search your destination:
            </label>
            <div className="input flex items-center h-10 px-4 bg-inputColor rounded-[3rem]">
              <input
                type="text"
                placeholder="Enter name here...."
                className="text-textColor bg-none border-none outline-none w-full text-[13px] font-medium placeholder:text-[13px]"
              />
              <GrLocation className="icon text-[18px] text-primary ml-2" />
            </div>
          </div>

          {/* Date Input */}
          <div className="dateInput">
            <label
              htmlFor="date"
              className="block text-textColor pb-2 text-[13px] font-medium"
            >
              Select your date:
            </label>
            <div className="input flex items-center h-10 px-4 bg-inputColor rounded-[3rem]">
              <input
                type="date"
                className="text-textColor bg-none border-none outline-none w-full text-[13px] font-medium"
              />
              <GrLocation className="icon text-[18px] text-primary ml-2" />
            </div>
          </div>

          {/* Price Input (Range Slider) */}
          <div className="priceInput">
            <div className="label_total flex justify-between items-center">
              <label
                htmlFor="price"
                className="text-textColor text-[13px] font-medium"
              >
                Max price:
              </label>
              <h3 className="total text-textColor text-[18px] pb-2">
                ${maxPrice}
              </h3>
            </div>
            <div className="input flex items-center h-10 px-4 bg-inputColor rounded-[3rem] p-0">
              {/* Range slider styling often requires vendor prefixes or custom Tailwind plugins, 
                but for simplicity, we use the default input type="range" here. */}
              <input
                type="range"
                max="5000"
                min="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1 appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Search Options Button */}
          <div className="searchOptions absolute bg-gradientColor w-max bottom-[-0.7rem] column-gap-3 p-[5px_1rem] rounded-[3rem] left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors lg:bottom-[-1rem] lg:p-2">
            <HiFilter className="icon text-[18px] text-white" />
            <span className="text-[13px] text-white lg:text-[17px]">
              MORE FILTERS
            </span>
          </div>
        </div>

        {/* Footer Icons Section */}
        <div
          data-aos="fade-up"
          className="homeFooterIcons flex w-full justify-between items-center"
        >
          <div className="rightIcons flex gap-1">
            <FiFacebook className="icon text-[20px] mx-1 text-white font-semibold hover:text-primary transition-colors" />
            <AiOutlineInstagram className="icon text-[20px] mx-1 text-white font-semibold hover:text-primary transition-colors" />
            <SiTripadvisor className="icon text-[20px] mx-1 text-white font-semibold hover:text-primary transition-colors" />
          </div>
          <div className="leftIcons flex gap-1">
            <BsListTask className="icon text-[20px] mx-1 text-white font-semibold hover:text-primary transition-colors" />
            <TbApps className="icon text-[20px] mx-1 text-white font-semibold hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
