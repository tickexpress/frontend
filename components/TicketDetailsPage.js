import React from "react";
import "./TicketDetailsPage.css";

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
        <li>Details</li>
        <li className="active">Image</li>
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

const TicketDetailsPage = () => {
  return (
    <div className="ticket-details-page">
      <NavBar />
      <div className="content-wrapper">
        <LeftSidebar />
        <div className="right-section">
          <h1>Ticket Details</h1>
          <h2>Event Photo</h2>
          <div className="upload-photo-box">
            <p>Recommended size: 350 x 350</p>
            <input type="file" accept="image/*" />
          </div>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsPage;
