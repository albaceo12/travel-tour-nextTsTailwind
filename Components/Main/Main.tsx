"use client";

import React, { useEffect } from "react";
import { DestinationsData } from "@/data/destinations";
import Image from "next/image"; // images in Next.js

// Icons
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="main container section p-8 pt-12">
      {/* Section Title */}
      <div className="secTitle mb-4">
        <h3
          data-aos="fade-right"
          className="title relative w-max text-textColor my-4 z-10 text-xl font-semibold sm:text-2xl 
                     after:content-[''] after:absolute after:bg-secondary after:h-[5px] after:w-[125px]
                     after:right-0 after:bottom-[5px] after:-z-10 sm:after:w-[151px] "
        >
          Most viseted destinations
        </h3>
      </div>

      {/* Section Content - Destination Cards */}
      <div className="secContent grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
        {DestinationsData.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => (
            <div
              data-aos="fade-up"
              key={id}
              className="singleDestination h-full flex flex-col rounded-xl items-center bg-cardBG shadow-md overflow-hidden transition duration-300 hover:bg-cardHover hover:shadow-lg"
            >
              {/* Image Div */}
              <div className="imageDiv h-[180px] w-full overflow-hidden">
                {/* Use Image Next.js component for optimization */}
                <Image
                  src={imgSrc}
                  alt={desTitle}
                  width={400}
                  height={180}
                  className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-110 block"
                />
              </div>

              {/* Card Information */}
              <div className="cardInfo p-4 w-full">
                <h4 className="destTitle text-blackColor text-xl font-bold">
                  {desTitle}
                </h4>

                {/* Location */}
                <span className="continent flex items-center gap-2 mt-1">
                  <HiOutlineLocationMarker className="icon text-lg text-primary" />
                  <span className="name text-textColor font-normal text-sm">
                    {location}
                  </span>
                </span>

                {/* Fees and Grade */}
                <div className="fees flex w-full justify-between items-center py-4 my-4 border-t-2 border-b-2 border-greyText">
                  <div className="grade flex items-center justify-center max-w-[100px] text-textColor leading-tight">
                    <span className="text-sm">
                      {grade}
                      <small className="text-center bg-gradientColor rounded-full text-white px-2 py-0.5 text-xs ml-1">
                        +1
                      </small>
                    </span>
                  </div>

                  <div className="price text-2xl text-blackColor font-bold">
                    <h5>{fees}</h5>
                  </div>
                </div>

                {/* Description */}
                <div className="desc text-[13.5px] text-textColor font-medium mb-3">
                  <p>{description}</p>
                </div>

                {/* Details Button */}
                <Link
                  href="#"
                  className="btn flex w-full justify-between items-center text-white font-semibold gap-2 mt-4 transition-colors duration-300 hover:bg-secondary"
                >
                  DETAILS{" "}
                  <HiOutlineClipboardCheck className="icon self-center text-lg" />
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Main;
