import React from "react";
import "./admin.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="company-name">Ticketexpress</div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>Admin Panel</li>
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
        <li className="active">+ Add Ticket</li>
      </ul>
      <div className="popup-box">
        <h3>Other Event</h3>
        <p>Checkout More Ticket to explore and trade</p>
        <button>Explore Tickets</button>
      </div>
    </div>
  );
};

const TicketDetails = () => {
  return (
    <div className="ticket-details-page">
      <NavBar />
      <div className="content-wrapper">
        <LeftSidebar />
        <div className="right-section">
          <h1>Add Ticket</h1>
          <div className="input-row">
            <div>
              <h2>Ticket Name</h2>
              <input
                type="text"
                className="name-input"
                placeholder="Type here"
              />
            </div>
            <div>
              <h2>Ticket Prize</h2>
              <input
                type="text"
                className="name-input"
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="input-row">
            <div>
              <h2>No. of Tickets on Sale</h2>
              <input
                type="text"
                className="name-input"
                placeholder="Number of tickets"
              />
            </div>
            <div>
              <h2>Ticket Category</h2>
              <select>
                <option value="">Number of tickets</option>
              </select>
            </div>
          </div>
          <div>
            <h2>Description</h2>
            <textarea
              className="description-input"
              placeholder="Brief detail about the ticket"
            ></textarea>
          </div>
          <div className="input-row">
            <button className="next-button">Upload Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
