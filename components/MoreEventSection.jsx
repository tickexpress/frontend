import React, { useMemo, useState } from "react";
import { EventBackgroundEnum } from "./Constants";
import Image from "next/image";
import EventDetails from "./EventDetails";

const MoreEventSection = (props) => {
  const { title } = props;
  const [openModal, setOpenModal] = useState(false);
  const [ticketDetails, setTicketDetails] = useState(null);
  const trendingEvents = [
    {
      dataImage: "/assets/images/sampleImage.jpg",
      title: "Sport",
      description: "American Football",
      eventID: 1,
      price: 0.1,
    },
    {
      dataImage: "/assets/images/sampleImage2.jpg",
      title: "Concert",
      description: "Wizkid Made in Lagos Concert",
      eventID: 2,
      price: 0.1,
    },
    {
      dataImage: "/assets/images/sampleImage3.jpg",
      title: "Travels",
      description: "A trip to Greenland",
      eventID: 3,
      price: 0.1,
    },
    {
      dataImage: "/assets/images/sampleImage.jpg",
      title: "Sport",
      description: "American Football",
      eventID: 4,
      price: 0.1,
    },
    {
      dataImage: "/assets/images/sampleImage2.jpg",
      title: "Concert",
      description: "Wizkid Made in Lagos Concert",
      eventID: 5,
      price: 0.1,
    },
    {
      dataImage: "/assets/images/sampleImage3.jpg",
      title: "Travels",
      description: "A trip to Greenland",
      eventID: 6,
      price: 0.1,
    },
  ];

  return (
    <>
      {openModal && (
        <EventDetails
          title="Event Details"
          open={openModal}
          ticketDetails={ticketDetails}
          onClose={() => setOpenModal(false)}
        />
      )}
      <section
        className={`w-full p-5 pb-20 px-20 grid grid-cols-3 gap-6 min-h-[400px] ${EventBackgroundEnum.WHITE}`}
      >
        <div className="text-4xl text-black col-span-3">{title}</div>
        <div className="flex flex-row col-span-3 gap-2">
          {moreEventList?.map((item, index) => (
            <button
              key={index}
              className="text-xl text-white bg-slate-400 bg-opacity-100 px-6 py-2 w-max rounded-3xl"
            >
              {item?.value}
            </button>
          ))}
        </div>

        {trendingEvents?.map((item, index) => (
          <div className="relative" key={index} onClick={() => {
            setOpenModal(true);
            setTicketDetails(item);
          }}>
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
      </section></>

  );
};

export default MoreEventSection;

const moreEventList = [
  { value: "All" },
  { value: "Concert" },
  { value: "Travels" },
  { value: "Sport" },
  { value: "Art & Theatre" },
  { value: "Others" },
];
