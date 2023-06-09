import { Button } from '@mui/material';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import TicketExpressABI from '../abis/TicketExpress.json';
import { ContractAddressEnum } from './Constants';

const BuySellTicketButton = (props) => {
    const { isTicketResale, ticketDetails } = props;
    const [account, setAccount] = useState(null);

    const web3 = new Web3(Web3.givenProvider);
    const abi = TicketExpressABI;
    const contract = new web3.eth.Contract(abi, ContractAddressEnum.CONTRACTADDRESS);

    // console.log(contract?._functions);
    // console.log(web3, abi?.[13]?.name);



    const buySellTicketHandler = async (ticketDetails) => {
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

        const buyNewTicket = await contract?._functions.buyNewTicket?.call(ticketDetails?.eventID);
        // const balance = await contract.getBalance.call(address);

        console.log(contract, buyNewTicket, ticketDetails?.eventID);
    }

    return (
        <>
            {!isTicketResale ? <Button
                className="flex-row justify-center items-center w-[200px] p-[18px] text-white text-sm rounded-lg bg-gradient-to-r from-[#2472FF] to-[#7E51DB] inline-flex"
                onClick={() => {
                    buySellTicketHandler(ticketDetails);
                }}>
                <span className='text-white'> Buy Ticket</span>
            </Button> : <Button disabled={true} className="flex-row justify-center items-center w-[200px] p-[18px] text-white text-sm rounded-lg bg-gradient-to-r from-[#7E51DB] to-[#2472FF] inline-flex">
                <span className='text-white'> Resell Ticket</span>
            </Button>}
        </>
    )
}

export default BuySellTicketButton