import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./EarningDetails.css";

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
        <li>Image</li>
        <li className="active">Earnings</li>
      </ul>
      <div className="popup-box">
        <h3>Other Event</h3>
        <p>Checkout More Ticket to explore and trade</p>
        <button>Explore Tickets</button>
      </div>
    </div>
  );
};

const EarningDetailsPage = () => {
  return (
    <div className="earning-details-pages">
      <NavBar />

      <div className="content-wrapper">
        <LeftSidebar />
        <div className="earning-details-page">
          <div className="right-section">
            <h1>Earning Details</h1>
            <p>
              Collection owners can collect creator earnings when a user
              re-sells an item they created. Contact the collection owner to
              change the collection earnings percentage or the payout address.
            </p>
            <br />
            <div className="details-container">
              <input type="text" placeholder="Wallet Address" />
              <input type="number" placeholder="%" />
              <button>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <a href="#">+ Add address</a>
            <button className="upload-button">Upload File</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningDetailsPage;
