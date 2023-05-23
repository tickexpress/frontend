import React from "react";
import { EventBackgroundEnum } from "./Constants";
import Image from "next/image";

const TrendingEventSection = (props) => {
  const { sectionBgColor } = props;
  return (
    <section
      className={`w-full p-5 pb-10 px-20 grid grid-cols-3 gap-6 min-h-[400px] ${EventBackgroundEnum.WHITE}`}
    >
      <div className="text-4xl text-black col-span-3">Trending Events</div>
      {trendingEvents?.map((item, index) => (
        <div className="relative" key={index}>
          <Image
            className="absolute inset-0 rounded-2xl"
            src={item?.dataImage}
            alt="background image"
            fill
          />
          <div className="relative z-10 flex flex-col w-72 h-[266px] p-6">
            <button className="text-xl font-bold text-gray-200 bg-slate-400 bg-opacity-75 px-6 py-2 w-max">
              {item?.title}
            </button>
            <div className="mt-4 text-white bottom-0 absolute text-2xl pb-4">
              {item?.description}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TrendingEventSection;

const trendingEvents = [
  {
    dataImage: "/assets/images/sampleImage.jpg",
    title: "Sport",
    description: "American Football",
  },
  {
    dataImage: "/assets/images/sampleImage2.jpg",
    title: "Concert",
    description: "Wizkid Made in Lagos Concert",
  },
  {
    dataImage: "/assets/images/sampleImage3.jpg",
    title: "Travels",
    description: "A trip to Greenland",
  },
];
