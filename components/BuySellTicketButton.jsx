import { Button } from '@mui/material';
import { ethers } from 'ethers';
import React, { useState } from 'react';
import Web3 from 'web3';
import { ContractAddressEnum, TicketExpressAbi } from './Constants';

const BuySellTicketButton = (props) => {
    const { isTicketResale, ticketDetails } = props;
    const [account, setAccount] = useState(null);

    const web3 = new Web3(window.ethereum);

    const contractInstance = new web3.eth.Contract(TicketExpressAbi, ContractAddressEnum.CONTRACTADDRESS);

    const buySellTicketHandler = async () => {
        // Fetch Accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const gasPrice = await web3.eth.getGasPrice();
        const _payableAmount = web3.utils.toWei(0.01, "ether");

        if (!!accounts) {
            const from = ethers.getAddress(accounts[0]);
            setAccount(from);

            // Refresh Account 
            window.ethereum.on('accountsChange', async () => {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const from = ethers.getAddress(accounts[0]);
                setAccount(from)
            });

            try {
                contractInstance.methods.buyNewTicket("MadeInLagos", { value: _payableAmount }).send(
                    {
                        from: `${from}`,
                        gas: `10000000`,
                        gasPrice: gasPrice,
                        value: _payableAmount,
                    }
                )
                    .then((receipt) => {
                        console.log(receipt)
                        return receipt;
                    });
            } catch (error) {
                console.log(`Error ==>`, error);
            }
        } else {
            console.log("Connect your wallet")
        }

    }

    return (
        <>
            {!isTicketResale ? <Button
                className="flex-row justify-center items-center w-[200px] p-[18px] text-white text-sm rounded-lg bg-gradient-to-r from-[#2472FF] to-[#7E51DB] inline-flex"
                onClick={() => {
                    buySellTicketHandler();
                }}>
                <span className='text-white'> Buy Ticket</span>
            </Button> : <Button disabled={true} className="flex-row justify-center items-center w-[200px] p-[18px] text-white text-sm rounded-lg bg-gradient-to-r from-[#7E51DB] to-[#2472FF] inline-flex">
                <span className='text-white'> Resell Ticket</span>
            </Button>}
        </>
    )
}

export default BuySellTicketButton