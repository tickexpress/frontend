"use client";
import React from "react";
import TrendingEventSection from "@components/TrendingEventSection";
import RecentlyAddedTickets from "@components/RecentlyAddedTickets";
import MoreEventSection from "@components/MoreEventSection";
import Footer from "@components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventsHeader from "@components/EventsHeader";

const Collections = () => {
  return (
    // <section className={`flex flex-col w-full max-w-7xl`}>
    <section className={`top-0 absolute flex flex-col w-full max-w-7xl mt-36`}>
      <MoreEventSection title={"My Collections"} isTicketResale={true}/>
      <Footer />
    </section>
  );
};

export default Collections;
