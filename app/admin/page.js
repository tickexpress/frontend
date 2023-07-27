"use client"

// Import necessary modules
import React, { useState } from "react"
import Web3 from "web3"
import { ethers } from "ethers"
import { ContractAddressEnum, TicketExpressAbi } from "@components/Constants"
import Spinner from "@components/spinner"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import "./admin.css"

// Component for the Navbar
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
  )
}

// Component for the left sidebar
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
  )
}

// Component for Ticket Details
const TicketDetails = () => {
  // State variables to store form data
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState(null)
  const [ticketName, setTicketName] = useState(null)
  const [ticketPrice, setTicketprice] = useState(null)
  const [totalTickets, setTotalTickets] = useState(null)
  const [eventDate, setEventDate] = useState(null)

  // Event handlers for form input fields
  const handleTicketName = (e) => {
    setTicketName(e.target.value)
  }

  const handleTicketPrice = (e) => {
    setTicketprice(e.target.value)
  }

  const handleTotalTickets = (e) => {
    setTotalTickets(e.target.value)
  }

  const handleEventDate = (e) => {
    setEventDate(e.target.value)
  }

  // Initialize Web3 and the contract instance
  const web3 = new Web3(typeof window !== "undefined" && window.ethereum)
  const contractInstance = new web3.eth.Contract(
    TicketExpressAbi,
    ContractAddressEnum.CONTRACTADDRESS
  )

  // Event handler to create a new event
  const createEventHandler = async () => {
    // Fetch Accounts using Ethereum provider
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    const gasPrice = await web3.eth.getGasPrice()

    if (!!accounts) {
      setLoading(true)
      toast.info("creating event", {
        position: toast.POSITION.TOP_CENTER,
        toastId: 0,
      })
      const from = ethers.getAddress(accounts[0])
      setAccount(from)

      // Refresh Account when account changes
      window.ethereum.on("accountsChange", async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        const from = ethers.getAddress(accounts[0])
        setAccount(from)
      })
      // Send a transaction to create the event
      contractInstance.methods
        .createEvent(ticketName, ticketPrice, totalTickets, 1690562080)
        .send({
          to: ContractAddressEnum.CONTRACTADDRESS,
          from: `${from}`,
          gas: `10000000`,
        })
        .once("error", (err) => {
          toast.error("failed to create event", {
            position: toast.POSITION.TOP_CENTER,
            toastId: 0,
          })
          setLoading(false)
        })
        .then(() => {
          toast.success("event created successfully", {
            position: toast.POSITION.TOP_CENTER,
            toastId: 0,
          })
          setLoading(false)
        })
    } else {
      console.log("Connect your wallet")
      setLoading(false)
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="ticket-details-page">
        {/* <NavBar /> */}
        <div className="content-wrapper">
          {/* Render the LeftSidebar component */}
          <LeftSidebar />
          <div className="right-section">
            <h1>Add Ticket</h1>
            <div className="input-row">
              <div>
                <h2>Ticket Name</h2>
                <input
                  onChange={handleTicketName}
                  type="text"
                  className="name-input"
                  placeholder="Type here"
                />
              </div>
              <div>
                <h2>Ticket Price</h2>
                <input
                  onChange={handleTicketPrice}
                  type="number"
                  min={0}
                  className="name-input"
                  placeholder="Enter ticket price"
                />
              </div>
            </div>
            <div className="input-row">
              <div>
                <h2>No. of Tickets on Sale</h2>
                <input
                  onChange={handleTotalTickets}
                  type="number"
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
              <button
                className="next-button"
                onClick={() => createEventHandler()}
              >
                {/* {loading ? (
                  <Spinner size={20} color={"white"} />
                ) : (
                  <span>Upload Ticket</span>
                )} */}

          
                Upload Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketDetails
