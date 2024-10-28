import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  const [isCreditsDebitsOpen, setIsCreditsDebitsOpen] = useState(false);

  const toggleInventory = () => setIsInventoryOpen(prevState => !prevState);
  const toggleCustomer = () => setIsCustomerOpen(prevState => !prevState);
  const toggleCreditsDebits = () => setIsCreditsDebitsOpen(prevState => !prevState);

  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        
        <li onClick={toggleInventory} className="dropdown">
          <span style={{ cursor: 'pointer' }}>Stock & Parts ▼</span>
        </li>
        {isInventoryOpen && (
          <ul className="submenu">
            <li><NavLink to="/stock-parts">Stock Parts</NavLink></li>
            <li><NavLink to="/upload-stock">Upload Stock</NavLink></li>
          </ul>
        )}

        <li><NavLink to="/book-appointment">Book an Appointment</NavLink></li>
        <li><NavLink to="/jobcard">Jobcard</NavLink></li>

        <li onClick={toggleCustomer} className="dropdown">
          <span style={{ cursor: 'pointer' }}>PSF & Customer ▼</span>
        </li>
        {isCustomerOpen && (
          <ul className="submenu">
            <li><NavLink to="/psf-customer">PSF Customer</NavLink></li>
            <li><NavLink to="/reminder">Reminder</NavLink></li>
          </ul>
        )}

        <li onClick={toggleCreditsDebits} className="dropdown">
          <span style={{ cursor: 'pointer' }}>Credits & Debits ▼</span>
        </li>
        {isCreditsDebitsOpen && (
          <ul className="submenu">
            <li><NavLink to="/credits-debits-note">Credits & Debits Note</NavLink></li>
            <li><NavLink to="/transaction">Transaction</NavLink></li>
          </ul>
        )}

        <li><NavLink to="/reports">Reports</NavLink></li>
        <li><NavLink to="/tally">Tally</NavLink></li>
        <li><NavLink to="/loyalty-scheme">Loyalty Scheme</NavLink></li>
        <li><NavLink to="/time-tracker">Time Tracker</NavLink></li>
        <li><NavLink to="/profile">Workshop Profile</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
