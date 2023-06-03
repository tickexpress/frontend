import React from "react";
import "./EventDetails.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="company-name">Ticketexpress</div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>Sales</li>
        </ul>
      </div>
      <div className="wallet-address">Wallet Address</div>
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <ul className="sidebar-links">
        <li className="active">Details</li>
        <li>Image</li>
        <li>Earnings</li>
      </ul>
      <div className="popup-box">
        <h3>Other Event</h3>
        <p>Checkout More Ticket to explore and trade</p>
        <button>Explore Tickets</button>
      </div>
    </div>
  );
};

const EventDetailsPage = () => {
  return (
    <div className="event-details-page">
      <NavBar />
      <div className="content-wrapper">
        <LeftSidebar />
        <div className="right-section">
          <h1>Event Details</h1>
          <h2>Name</h2>
          <input
            type="text"
            className="name-input"
            placeholder="Type the name of event here"
          />
          <h2>Description</h2>
          <textarea
            className="description-input"
            placeholder="Share details about the event"
          ></textarea>
        </div>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default EventDetailsPage;
