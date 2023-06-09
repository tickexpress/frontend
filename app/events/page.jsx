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
    // <section className={`flex flex-col w-full max-w-7xl`}>
    <section className={`top-0 absolute flex flex-col w-full max-w-7xl mt-36`}>
      <EventsHeader />
      <MoreEventSection title={"Discover more events"} isTicketResale={false} />
      <Footer />
    </section>
  );
};

export default Events;
