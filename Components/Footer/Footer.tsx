"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

// Animations
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer w-full relative p-8 flex items-center justify-center m-auto md:p-[5rem_0]">
      {/* Video Background Section */}
      <div className="videoDiv absolute h-full w-full top-0 left-0 z-0">
        <video
          src="/video2.mp4"
          muted
          loop
          autoPlay
          className="h-full w-full object-cover"
        ></video>
        {/* Overlay with mix-blend-mode */}
        <div className="overlay absolute top-0 bottom-0 right-0 left-0 bg-[rgba(10,84,107,0.307)] mix-blend-multiply"></div>
      </div>

      {/* Main Content */}
      <div className="secContent container w-full h-max p-8 flex flex-col items-center justify-center m-auto gap-8 z-[100] relative">
        {/* Contact Section */}
        <div className="contactDiv flex flex-col justify-between w-full gap-4 md:flex-row">
          <div data-aos="fade-up" className="text">
            <small className="text-[13px] font-[400] text-white">
              KEEP IN TOUCH
            </small>
            <h2 className="text-white text-[1.8rem]">Travel with us</h2>
          </div>

          <div className="inputDiv flex flex-col gap-4 w-full md:flex-row md:justify-start md:w-max">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
              className="w-full p-2 px-3 rounded-[3rem] border text-center border-white outline-none bg-transparent text-white placeholder:text-white placeholder:opacity-50 md:w-[60%]"
            />
            <button
              data-aos="fade-up"
              className="btn flex justify-center text-white font-medium gap-2 items-center w-full md:w-max"
              type="submit"
            >
              SEND <FiSend className="icon text-[18px]" />
            </button>
          </div>
        </div>

        {/* Footer Card */}
        <div className="footerCard relative p-[1rem_1rem_4rem] gap-8 rounded-[1rem] bg-bodyColor w-full flex flex-col items-start justify-center overflow-hidden md:flex-row md:p-[3rem_1rem]">
          {/* Intro & Socials */}
          <div className="footerIntro flex flex-col basis-1/2 justify-center items-start gap-2">
            <div className="logoDiv">
              <Link
                href="#"
                className="logo flex text-blackColor font-[600] items-center"
              >
                <MdOutlineTravelExplore className="icon text-[25px] text-primary mr-[10px] translate-y-[5px]" />
                Travel.
              </Link>
            </div>

            <div
              data-aos="fade-up"
              className="footerParagraph text-[13px] text-textColor lg:text-[15px]"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium velit suscipit eveniet at vero consectetur illo fugiat
              nihil magni nostrum ipsam autem aliquam quis, voluptatem sed
              sequi? Earum eaque exercitationem enim maxime maiores laudantium,
              corrupti, eligendi iure reprehenderit magnam fuga!
            </div>

            <div data-aos="fade-up" className="footerSocials flex gap-2">
              <AiOutlineTwitter className="icon text-[20px] text-blackColor hover:text-primary transition-colors lg:text-[25px]" />
              <AiFillYoutube className="icon text-[20px] text-blackColor hover:text-primary transition-colors lg:text-[25px]" />
              <AiFillInstagram className="icon text-[20px] text-blackColor hover:text-primary transition-colors lg:text-[25px]" />
              <FaTripadvisor className="icon text-[20px] text-blackColor hover:text-primary transition-colors lg:text-[25px]" />
            </div>
          </div>

          {/* Links Section */}
          <div className="footerLinks w-full grid grid-cols-2 gap-4 justify-between basis-1/2 sm:grid-cols-3">
            {/* Link Group 1 */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle block font-[600] text-blackColor mb-[0.5rem]">
                OUR AGENCY
              </span>
              {["Services", "Insurance", "Agency", "Tourism", "Payment"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="footerList flex items-center text-[15px] text-textColor transition-all duration-300 hover:text-primary hover:translate-x-[7px] group cursor-pointer lg:text-[16px] py-1"
                  >
                    <FiChevronRight className="icon text-[15px] text-greyText group-hover:text-secondary" />
                    {item}
                  </li>
                )
              )}
            </div>

            {/* Link Group 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle block font-[600] text-blackColor mb-[0.5rem]">
                PARTNERS
              </span>
              {[
                "Bookings",
                "Rentcars",
                "HostelWorld",
                "Trivago",
                "TripAdvisor",
              ].map((item, index) => (
                <li
                  key={index}
                  className="footerList flex items-center text-[15px] text-textColor transition-all duration-300 hover:text-primary hover:translate-x-[7px] group cursor-pointer lg:text-[16px] py-1"
                >
                  <FiChevronRight className="icon text-[15px] text-greyText group-hover:text-secondary" />
                  {item}
                </li>
              ))}
            </div>

            {/* Link Group 3 */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle block font-[600] text-blackColor mb-[0.5rem]">
                LAST MINUTE
              </span>
              {["London", "California", "Indonesia", "Europe", "Oceania"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="footerList flex items-center text-[15px] text-textColor transition-all duration-300 hover:text-primary hover:translate-x-[7px] group cursor-pointer lg:text-[16px] py-1"
                  >
                    <FiChevronRight className="icon text-[15px] text-greyText group-hover:text-secondary" />
                    {item}
                  </li>
                )
              )}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="footerDiv flex flex-col absolute bottom-0 left-0 right-0 bg-secondary p-[0.5rem_2rem] sm:flex-row sm:justify-between">
            <small className="text-[10px] text-white font-[500] sm:text-[14px]">
              BEST TRAVEL WEBSITE THEME
            </small>
            <small className="text-[10px] text-white font-[500] sm:text-[14px]">
              COPYRIGHTS RESERVED - ALLBALOU 2023
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
