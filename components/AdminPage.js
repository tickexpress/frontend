import React from "react";
import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar bg-white text-gray-800 flex justify-between items-center p-4 shadow">
        <div className="company-name font-bold text-2xl">Ticketexpress</div>
        <div className="nav-links">
        <ul className="flex">
        <li className="mr-4">Admin Panel</li>
        </ul>
        </div>
        <div className="wallet-address border-2 border-gray-700 rounded-full px-4 py-1 text-gray-700 text-sm">
        Wallet Address
        </div>
        </div>
    );
    };

const LeftSidebar = () => {
    return (
        <div className="left-sidebar flex flex-col items-center h-screen p-44 pb-1185 bg-white shadow-md">
            <ul className="sidebar-links">
                <li className="flex items-center px-4 py-1 gap-32 text-blue-500">+ Add Ticket</li>
                <li className="flex items-center w-300 px-4 py-1 gap-32">View Tickets</li>
            </ul>
        </div>
    );
    };

const TicketDetailsPage = () => {
    return (
        <div className="ticket-details-page">
        <NavBar />
        <div className="content-wrapper flex">
        <LeftSidebar />
        <div className="right-section flex-grow p-4">
        <div className="text-gray-800 font-bold text-2xl font-sans text-left">Add Ticket</div>
        <p className="text-gray-600 font-normal text-base font-sans text-left">Create a new event ticket providing the required information</p>
        <div className="w-611 h-1 bg-gray-500 my-4"></div>
        
        <div className="text-gray-700 font-medium text-base font-sans text-left">
        
        <div className="input-row flex gap-4 mb-4">
            <div className="text-gray-700 font-medium text-base font-sans text-left">
            <h2>Ticket Name</h2>
                <input style={{ width: '480px', height: '60px' }} className="h-15 flex-shrink-0 name-input border border-gray-300 rounded-md p-2 mr-4" type="text" placeholder="Type here" />
            </div>
            <div className="text-gray-700 font-medium text-base font-sans text-left">
                <h2>Category</h2>
                <select style={{ width: '480px', height: '60px' }} className="border border-gray-300 rounded-md p-2">
                <option value="">Select Category</option>
                </select>
            </div>
        </div>
        <div className="text-gray-700 font-medium text-base font-sans text-left">
        <h2 >Description</h2>
        <textarea style={{ width: '1000px', height: '150px' }} className="h-15 flex-shrink-0 name-input border border-gray-300 rounded-md p-2 mr-4 description-input"
          placeholder="Add a brief description here"
        ></textarea>
      </div>
      </div>


      <div className="input-row flex gap-4 mb-4">
        <div className="text-gray-700 font-medium text-base font-sans text-left">
          <h2>Price</h2>
          <input style={{ width: '480px', height: '60px' }}
            type="text"
            className="h-15 flex-shrink-0 name-input border border-gray-300 rounded-md p-2 text-left mr-4"
            placeholder="0.00"
          />
        </div>
        <div className="text-gray-700 font-medium text-base font-sans text-left">
          <h2>Quantity Available</h2>
          <select style={{ width: '480px', height: '60px' }} className="border border-gray-300 rounded-md p-2">
            <option value="">Number of tickets</option>
          </select>
        </div>
      </div>

      <div className="input-row flex gap-4 mb-4">
        <div className="text-gray-700 font-medium text-base font-sans text-left">
            <h2>Start Date</h2>
            <input style={{ width: '480px', height: '60px' }} type="date" id="myDateField" className="h-15 flex-shrink-0 border border-gray-300 rounded-md p-2 text-left mr-4" />
        </div>
        <div className="text-gray-700 font-medium text-base font-sans text-left">
          <h2>End Date</h2>
          <input style={{ width: '480px', height: '60px' }} type="date" id="myDateField" className="border border-gray-300 rounded-md p-2" />
        </div>
        </div>

        <div className="input-row flex gap-4 mb-4">
        <div className="text-gray-700 font-medium text-base font-sans text-left">
        <h2>Enter Time</h2>
          <input style={{ width: '480px', height: '60px' }} type="time" id="myDateField" className="border border-gray-300 rounded-md p-2" />
        </div>
        </div>
        
      <div className="text-gray-700 font-medium text-base font-sans text-left">
        <h2>Upload banner image</h2>
        <div style={{ width: '1000px', height: '100px' }} className="upload-photo-box border border-gray-300 rounded-md p-4 mt-4 flex-shrink-0">
        <p className="text-blue-900 font-medium text-base font-sans text-center">Drag and drop or Choose file to upload</p>
        <p className="text-blue-400 font-medium text-base font-sans text-center"> Image should be at least 344px by 200px and must be under 2MB.</p>
        <div className="text-center">
            <input className="text-center" type="file" accept="image/*" />
        </div>        
        </div>
      </div>

      <div className="flex items-center my-2">
        <input className="w-4 h-4 mr-2" style={{ minWidth: '20px', minHeight: '20px' }} type="checkbox" />
        <label htmlFor="Checkbox" className="ml-1">Allow ticket resale</label>
      </div>

      <div className="input-row text-left">
        <button style={{ width: '1000px', height: '50px' }} className="next-button bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md px-4 py-2">
          Upload Ticket
        </button>
      </div>
    </div>
  </div>
</div>
);
};

export default TicketDetailsPage;
