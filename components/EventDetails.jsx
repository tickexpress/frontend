import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import BuySellTicketButton from './BuySellTicketButton';

const EventDetails = (props) => {
  const { title, open, onClose, ticketDetails, isTicketResale } = props;
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Event Category: {ticketDetails?.title}</DialogTitle>
      <DialogContent className="">
        <div className='flex flex-row gap-6'>
          <Image
            className="inset-0 rounded-lg"
            src={ticketDetails?.dataImage}
            alt="background image"
            width={240}
            height={240}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 py-4 justify-between">
            <span>Ticket Details:</span> {ticketDetails?.description}
            <span>Ticket Price:</span> {ticketDetails?.price + ' Matic'}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={onClose}>
          Cancel
        </Button>
        <BuySellTicketButton isTicketResale={isTicketResale} ticketDetails={ticketDetails} />
      </DialogActions>
    </Dialog>
  )
}

export default EventDetails