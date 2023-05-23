import React from "react";
import { EventBackgroundEnum } from "./Constants";
import Image from "next/image";

const RecentlyAddedTickets = (props) => {
  const { sectionBgColor } = props;
  return (
    <section
      className={`w-full p-5 pb-10 px-20 grid grid-cols-3 gap-6 min-h-[400px] ${EventBackgroundEnum.BLACK}`}
    >
      <div className="text-4xl text-white col-span-3">
        Recently Added Tickets
      </div>
      {recentlyAddedTickets?.map((item, index) => (
        <div className="relative" key={index}>
          <Image
            className="absolute inset-0 rounded-2xl"
            src={item?.dataImage}
            alt="background image"
            fill
          />
          <div className="relative z-10 flex flex-col w-72 h-[266px] p-6">
            <button className="text-xl font-bold text-gray-200 bg-slate-400 bg-opacity-75 px-6 py-2 w-max absolute right-0">
              {item?.price}
            </button>
            <div className="mt-4 text-white bottom-0 absolute  pb-4">
              <div className="text-2xl shadow-lg">{item?.title}</div>
              <div className="text-sm shadow-lg">
                {item?.description.slice(0, 40)}...
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-row col-span-3">
        <div className="flex-1" />
        <button className="text-sm text-white bg-gray-800 bg-opacity-100 px-8 py-3 w-max rounded-lg inline-flex items-center">
          <span className="pr-4">See More</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default RecentlyAddedTickets;

const recentlyAddedTickets = [
  {
    dataImage: "/assets/images/littlemermaid.png",
    price: "$500",
    title: "Little Mermaid",
    description: "The Hunger Games: The Ballad of Songbirds and Snakes",
  },
  {
    dataImage: "/assets/images/screamvi.png",
    price: "$600",
    title: "Scream VI",
    description:
      "Four survivors of the Ghostface murders leave Woodsboro behind for a fresh start in New York City",
  },
  {
    dataImage: "/assets/images/shazam.png",
    price: "$750",
    title: "Shazam!",
    description:
      "Bestowed with the powers of the gods, Billy Batson and his fellow foster kids are still learning how to juggle teenage life with their adult superhero alter egos. ",
  },
];
