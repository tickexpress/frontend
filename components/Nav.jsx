'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import TicketExpressABI from "../abis/TicketExpress.json";
import { ContractAddressEnum } from "./Constants";


const Nav = () => {
  const [account, setAccount] = useState(null);

  const connectHandler = async () => {
    // Fetch Accounts
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.getAddress(accounts[0]);
    setAccount(account);

    // Refresh Account 
    window.ethereum.on('accountsChange', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.getAddress(accounts[0]);
      setAccount(account)
    })
  }

  useEffect(() => {
    connectHandler();
  }, [])

  return (
    <nav className="flex-between w-full pt-10 pb-10 z-10">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/ticketexpress.svg"
          alt="Ticket Express"
          width={235}
          height={50}
          className="object-contain"
        />
        <p className="logo_text"></p>
      </Link>
      {navlink?.map((item, index) => (
        <Link
          href={item?.url}
          key={index}
          className="flex flex-row justify-center items-center text-[16px] font-bold bg-gradient-to-r from-[#2472FF] to-[#7E51DB] bg-clip-text"
        >
          {item?.linktitle}
        </Link>
      ))}

      <div className="sm:flex hidden">
        {account ? (
          <button
            type="button"
            className="flex-row justify-center items-center w-[200px] p-[18px] text-white text-sm rounded-lg bg-gradient-to-r from-[#2472FF] to-[#7E51DB] inline-flex"
          >
            <Image
              src="/assets/images/solar_wallet-linear.svg"
              alt="Ticket Express"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="pl-4">{account.slice(0, 6) + '...' + account.slice(38, 42)}</span>
          </button>
        ) : (
          <button
            type="button"
            className="flex-row justify-center items-center w-[200px] p-[18px] text-white text-sm rounded-lg bg-gradient-to-r from-[#2472FF] to-[#7E51DB] inline-flex"
            onClick={connectHandler}
          >
            <Image
              src="/assets/images/solar_wallet-linear.svg"
              alt="Ticket Express"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="pl-4">Connect Wallet</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;

const navlink = [
  {
    linktitle: "Home",
    url: "/",
  },
  {
    linktitle: "Events",
    url: "/events",
  },
  {
    linktitle: "Collections",
    url: "/collections",
  },
];
