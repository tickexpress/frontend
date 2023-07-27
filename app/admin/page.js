"use client"

import React, { useState } from "react"
import Web3 from "web3"
import { ethers } from "ethers"
import { ContractAddressEnum, TicketExpressAbi } from "@components/Constants"
import "./admin.css"

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

const TicketDetails = () => {
  const [account, setAccount] = useState(null)
  const [ticketName, setTicketName] = useState(null)
  const [ticketPrice, setTicketprice] = useState(null)
  const [totalTickets, setTotalTickets] = useState(null)
  const [eventDate, setEventDate] = useState(null)

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

  const web3 = new Web3(typeof window !== "undefined" && window.ethereum)
  const contractInstance = new web3.eth.Contract(
    TicketExpressAbi,
    ContractAddressEnum.CONTRACTADDRESS
  )

  const createEventHandler = async () => {
    // Fetch Accounts
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    const gasPrice = await web3.eth.getGasPrice()
    // const _payableAmount = web3.utils.toWei(0.01, "ether")

    if (!!accounts) {
      const from = ethers.getAddress(accounts[0])
      setAccount(from)

      // Refresh Account
      window.ethereum.on("accountsChange", async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        const from = ethers.getAddress(accounts[0])
        setAccount(from)

       
      })

      try {
        //  console.log("acc", from)
        contractInstance.methods
          .createEvent(ticketName, ticketPrice, totalTickets, 1690562080)
          .send({
            to: ContractAddressEnum.CONTRACTADDRESS,
            from: `${from}`,
            gas: `10000000`,
          })
          .then((res) => {
            console.log(res)
            return res
          })
      } catch (error) {
        console.error(`Error ==>`, error)
      }
    } else {
      console.log("Connect your wallet")
    }
  }
  return (
    <div className="ticket-details-page">
      {/* <NavBar /> */}
      <div className="content-wrapper">
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
              Upload Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketDetails
