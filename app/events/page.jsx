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
import EventsHeader from "@components/EventsHeader";

const Events = () => {
  return (
    <section className={`flex flex-col w-full max-w-7xl`}>
      <EventsHeader />
      <MoreEventSection />
      <Footer />
    </section>
  );
};

export default Events;
