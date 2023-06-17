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
        const _payableAmount = web3.utils.toWei(ticketDetails?.price, "ether");

        if (!!accounts) {
            const account = ethers.getAddress(accounts[0]);
            setAccount(account);

            // Refresh Account 
            window.ethereum.on('accountsChange', async () => {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = ethers.getAddress(accounts[0]);
                setAccount(account)
            })

            try {

                const uint256payableAmount = web3.eth.abi.encodeParameter('uint256', _payableAmount);
                const uint256eventId = web3.eth.abi.encodeParameter('uint256', 0);
                // Price before conversion
                console.log(`Event Id ===>`, uint256eventId);
                // Price after conversion
                console.log(`Price after conversion to uint256 ===>`, uint256payableAmount);
                console.log(contractInstance.methods)
                // contractInstance.methods.buyNewTicket(uint256payableAmount).send(
                //     {
                //         from: `${account}`,
                //         gas: `100000`,
                //         gasPrice: gasPrice,
                //     }
                // )
                //     .then((receipt) => {
                //         console.log(receipt)
                //         return receipt;
                //     });
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