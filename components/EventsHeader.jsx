import Image from "next/image";
import React from "react";
import { EventBackgroundEnum } from "./Constants";

const EventsHeader = () => {
  return (
    <section
      className={`w-full p-5 px-20 gap-6 ${EventBackgroundEnum.WHITE}`}
    >
      {eventassets?.map((item, index) => (
        <div className="relative" key={index}>
          <Image
            className="absolute inset-0 rounded-2xl"
            src={item?.ImageData}
            alt="background image"
            fill
          />
          <div className="relative z-10 flex flex-col w-2/5 h-[266px] p-10">
            <div className="text-5xl text-gray-200 w-max">{item?.Title}</div>
            <div className="mt-4 text-white text-xl pb-4">
              {item?.Description}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EventsHeader;

const eventassets = [
  {
    Title: "Events",
    Description:
      "From Sporting Spectacles to Melodic Concerts, Adventurous Travels to Cultural Festivals - Find Your Perfect Event Journey Here",
    ImageData: "/assets/images/eventImage.jpg",
  },
];
