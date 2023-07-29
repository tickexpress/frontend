"use client"
// Import necessary modules
import React, { useState } from "react"
import Web3 from "web3"
import { ethers } from "ethers"
import { ContractAddressEnum, TicketExpressAbi } from "@components/Constants"
import Spinner from "@components/spinner" // Assuming this component shows a loading spinner
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
    <div className="left-sidebar flex flex-col items-center h-screen p-44 pb-1185 bg-white shadow-md">
      <ul className="sidebar-links">
        <li className="flex items-center px-4 py-1 gap-32 text-blue-500">
          + Add Ticket
        </li>
        <li className="flex items-center w-300 px-4 py-1 gap-32">
          View Tickets
        </li>
      </ul>
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
  const [eventStartDate, setEventStartDate] = useState(null)
  const [eventEndDate, setEventEndDate] = useState(null)

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

  const handleEventStartDate = (e) => {
    setEventStartDate(e.target.value)
  }

  const handleEventEndDate = (e) => {
    setEventEndDate(e.target.value)
  }

  // Initialize Web3 and the contract instance
  const web3 = new Web3(typeof window !== "undefined" && window.ethereum)
  const contractInstance = new web3.eth.Contract(
    TicketExpressAbi,
    ContractAddressEnum.CONTRACTADDRESS
  )

  // Event handler to create a new event
  const createEventHandler = async () => {
    const startDate = Date.parse(eventStartDate) / 1000
    const endDate = Date.parse(eventStartDate) / 10000
    // Fetch Accounts using Ethereum provider
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    const gasPrice = await web3.eth.getGasPrice()

    if (!!accounts) {
      setLoading(true)

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

      try {
        setLoading(true)

        // send a transaction to create event
        await contractInstance.methods
          .createEvent(ticketName, ticketPrice, totalTickets, startDate)
          .send({
            to: ContractAddressEnum.CONTRACTADDRESS,
            from: `${from}`,
            gas: `10000000`,
          })

          .then(() => {
            toast.success("event created successfully", {
              position: toast.POSITION.TOP_CENTER,
              toastId: 0,
            })
            setLoading(false)
          })
      } catch (error) {
        // handle errors
        console.error("error=>", error.message)
        toast.error("error: failed to create event", {
          position: toast.POSITION.TOP_CENTER,
          toastId: 0,
        })
        setLoading(false)
      }
    } else {
      console.log("Connect your wallet")
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createEventHandler()
  }

  return (
    <>
      <ToastContainer />
      <div className="ticket-details-page">
        {/* <NavBar /> */}
        <div className="content-wrapper flex">
          {/* Render the LeftSidebar component */}
          <LeftSidebar />
          <div
            // onSubmit={handleSubmit}
            className="right-section flex-grow p-4"
          >
            <div className="text-gray-800 font-bold text-2xl font-sans text-left">
              Add Ticket
            </div>
            <p className="text-gray-600 font-normal text-base font-sans text-left">
              Create a new event ticket providing the required information
            </p>
            <div className="w-611 h-1 bg-gray-500 my-4"></div>

            <div className="text-gray-700 font-medium text-base font-sans text-left">
              <div className="input-row flex gap-4 mb-4">
                <div className="text-gray-700 font-medium text-base font-sans text-left">
                  <h2>Ticket Name</h2>
                  <input
                    onChange={handleTicketName}
                    style={{ width: "480px", height: "60px" }}
                    className="h-15 flex-shrink-0 name-input border border-gray-300 rounded-md p-2 mr-4"
                    type="text"
                    placeholder="Type here"
                    required
                  />
                </div>
                <div className="text-gray-700 font-medium text-base font-sans text-left">
                  <h2>Category</h2>
                  <select
                    style={{ width: "480px", height: "60px" }}
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Select Category</option>
                  </select>
                </div>
              </div>
              <div className="text-gray-700 font-medium text-base font-sans text-left">
                <h2>Description</h2>
                <textarea
                  style={{ width: "1000px", height: "150px" }}
                  className="h-15 flex-shrink-0 name-input border border-gray-300 rounded-md p-2 mr-4 description-input"
                  placeholder="Add a brief description here"
                ></textarea>
              </div>
            </div>

            <div className="input-row flex gap-4 mb-4">
              <div className="text-gray-700 font-medium text-base font-sans text-left">
                <h2>Price</h2>
                <input
                  onChange={handleTicketPrice}
                  type="number"
                  min={0}
                  style={{ width: "480px", height: "60px" }}
                  className="h-15 flex-shrink-0 name-input border border-gray-300 rounded-md p-2 text-left mr-4"
                  placeholder="0.00"
                  required
                />
              </div>
              <div className="text-gray-700 font-medium text-base font-sans text-left">
                <h2>Quantity Available</h2>
                <input
                  style={{ width: "480px", height: "60px" }}
                  className="border border-gray-300 rounded-md p-2"
                  onChange={handleTotalTickets}
                  type="number"
                  placeholder="Number of tickets"
                  required
                />
              </div>
            </div>

            <div className="input-row flex gap-4 mb-4">
              <div className="text-gray-700 font-medium text-base font-sans text-left">
                <h2>Start Date</h2>
                <input
                  onChange={handleEventStartDate}
                  style={{ width: "480px", height: "60px" }}
                  type="datetime-local"
                  id="myDateField"
                  className="h-15 flex-shrink-0 border border-gray-300 rounded-md p-2 text-left mr-4"
                  required
                />
              </div>
              <div className="text-gray-700 font-medium text-base font-sans text-left">
                <h2>End Date</h2>
                <input
                  onChange={handleEventEndDate}
                  style={{ width: "480px", height: "60px" }}
                  type="datetime-local"
                  id="myDateField"
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div className="text-gray-700 font-medium text-base font-sans text-left">
              <h2>Upload banner image</h2>
              <div
                style={{ width: "1000px", height: "100px" }}
                className="upload-photo-box border border-gray-300 rounded-md p-4 mt-4 flex-shrink-0"
              >
                <p className="text-blue-900 font-medium text-base font-sans text-center">
                  Drag and drop or Choose file to upload
                </p>
                <p className="text-blue-400 font-medium text-base font-sans text-center">
                  {" "}
                  Image should be at least 344px by 200px and must be under 2MB.
                </p>
                <div className="text-center">
                  <input className="text-center" type="file" accept="image/*" />
                </div>
              </div>
            </div>

            <div className="flex items-center my-2">
              <input
                className="w-4 h-4 mr-2"
                style={{ minWidth: "20px", minHeight: "20px" }}
                type="checkbox"
              />
              <label htmlFor="Checkbox" className="ml-1">
                Allow ticket resale
              </label>
            </div>

            <div className="input-row text-left">
              <button
                onClick={createEventHandler}
                style={{ width: "1000px", height: "50px" }}
                className="next-button bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md px-4 py-2"
              >
                {/* Show spinner while loading, or else show the "Upload Ticket" text */}
                {loading ? (
                  <Spinner size={20} color={"white"} />
                ) : (
                  <span>Upload Ticket</span>
                )}
      
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketDetails
