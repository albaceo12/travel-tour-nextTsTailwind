"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showNav = () => {
    setActive(true);
  };

  const removeNav = () => {
    setActive(false);
  };
  const navmenuitems = [
    "Home",
    "Packages",
    "Shop",
    "About",
    "Pages",
    "News",
    "Contact",
  ];
  return (
    <section className="navBarSection">
      <header className="header fixed flex items-center justify-between bg-white w-full p-4 z-[1000] shadow-md md:px-8 laptop:px-[8.5rem]">
        {/* Logo Section */}
        <div className="logoDiv">
          <Link
            href="/"
            className="logo flex items-center cursor-pointer text-blackColor font-semibold"
          >
            <MdOutlineTravelExplore className="icon text-primary mr-1" />
            <h1 className="font-bold">Travel.</h1>
          </Link>
        </div>

        {/* Navbar Menu */}
        <div
          className={`navBar ${
            active ? "activeNavbar top-[7rem]" : "top-[-30rem]"
          } absolute bg-whiteColorDeam w-[88%] rounded-2xl left-1/2 -translate-x-1/2 p-4 z-[2000] shadow-lg transition-all duration-500 ease-in-out md:static md:w-auto md:bg-transparent md:translate-x-0 md:shadow-none md:p-0 md:flex md:items-center`}
        >
          <ul className="navLists flex flex-col justify-center items-center w-full m-auto py-2 gap-4 md:flex-row md:gap-[12px] laptop:gap-8">
            {navmenuitems.map((item, index) => (
              <li className="navItem" key={index}>
                <Link
                  href="#"
                  className="navLink text-textColor text-[0.9rem] font-semibold hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
            {/* Button inside menu for mobile/desktop */}
            <button className="btn mt-4 md:mt-0 md:ml-4">
              <Link href="#">BOOK NOW</Link>
            </button>
          </ul>

          {/* Close Icon (Mobile Only) */}
          <div
            onClick={removeNav}
            className="closeNavbar absolute top-4 right-6 text-primary hover:text-secondary cursor-pointer md:hidden"
          >
            <AiFillCloseCircle className="icon text-[2rem]" />
          </div>
        </div>

        {/* Toggle Icon (Mobile Only) */}
        <div onClick={showNav} className="toggleNavbar pr-4 md:hidden">
          <TbGridDots className="icon text-primary text-[25px] cursor-pointer hover:text-secondary" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
