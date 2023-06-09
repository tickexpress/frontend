"use client";
import React from "react";
import TrendingEventSection from "@components/TrendingEventSection";
import RecentlyAddedTickets from "@components/RecentlyAddedTickets";
import MoreEventSection from "@components/MoreEventSection";
import Footer from "@components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Home = () => {
  return (
    <section
      className={`top-0 absolute flex flex-col w-full max-w-7xl`}
    >
      <Slider {...settings} className="">
        {heroSlideData?.map((item, index) => (
          <div className="relative" key={index}>
            <Image
              className="absolute inset-0"
              src={item?.ImageData}
              alt="background image"
              fill
            />
            <div className="relative z-10 flex flex-col h-screen justify-center items-center">
              <div className="text-5xl font-bold text-white ">
                {item?.Title}
              </div>
              <div className="text-lg mt-4 text-white pb-4">
                {item?.SubTitle}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <TrendingEventSection />
      <RecentlyAddedTickets />
      <MoreEventSection />
      <Footer />
    </section>
  );
};

export default Home;

const settings = {
  customPaging: function () {
    return <></>;
  },
  dotsClass: "slick-dots slick-thumb",
  dots: false,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  arrows: false,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

const heroSlideData = [
  {
    Title: "Decentralized ticket services with Blockchain",
    SubTitle:
      "Discover, own, and trade tickets for sports, travels, games, concert and other events",
    ImageData: "/assets/images/slider1.jpg",
  },
  {
    Title: "Decentralized ticket services with Blockchain",
    SubTitle:
      "Discover, own, and trade tickets for sports, travels, games, concert and other events",
    ImageData: "/assets/images/slider2.jpg",
  },
  {
    Title: "Decentralized ticket services with Blockchain",
    SubTitle:
      "Discover, own, and trade tickets for sports, travels, games, concert and other events",
    ImageData: "/assets/images/slider3.jpg",
  },
  {
    Title: "Decentralized ticket services with Blockchain",
    SubTitle:
      "Discover, own, and trade tickets for sports, travels, games, concert and other events",
    ImageData: "/assets/images/slider4.jpg",
  },
  {
    Title: "Decentralized ticket services with Blockchain",
    SubTitle:
      "Discover, own, and trade tickets for sports, travels, games, concert and other events",
    ImageData: "/assets/images/slider5.jpg",
  },
];
