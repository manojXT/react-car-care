import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

// Import images with alt attributes added
import dashboardIcon from './dashboardicons/Appointment.png';
import appointmentIcon from './dashboardicons/Appointment.png';
import jobcardIcon from './dashboardicons/Jobcard.png';
import billingIcon from './dashboardicons/Transactioins.png';
import inventoryIcon from './dashboardicons/Inventory.png';
import customerIcon from './dashboardicons/Customer.png';
import userIcon from './dashboardicons/Employees.png';
import workshopIcon from './dashboardicons/Workshop profile.png';
import reportsIcon from './dashboardicons/Reports.png';

const Sidebar = () => {
  const navigation = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState({
    dashboard: false,
    appointment: false,
    jobCards: false,
    inventory: false,
    billing: false,
    customer: false,
    users: false,
    workshopProfile: false,
    reports: false,
  });

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleExpand = (item) => {
    setExpandedSubmenu((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleMenuClick = (item, path) => {
    toggleExpand(item);
    if (path) {
      navigation(path);
    }
    // Collapse the sidebar after clicking a menu item
    setIsExpanded(false);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        <FaBars />
      </button>

      <div className="sidebar-item" onClick={() => handleMenuClick('dashboard', '/dashboard')}>
        <img src={dashboardIcon} alt="Dashboard" className="icon" />
        {isExpanded && <span className="label">Dashboard</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('appointment', '')}>
        <img src={appointmentIcon} alt="Book Appointment" className="icon" />
        {isExpanded && <span className="label">Book Appointment</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('jobCards', '/jobcard')}>
        <img src={jobcardIcon} alt="Job Cards" className="icon" />
        {isExpanded && <span className="label">Job Cards</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('inventory', '')}>
        <img src={inventoryIcon} alt="Inventory" className="icon" />
        {isExpanded && <span className="label">Inventory</span>}
      </div>
      {isExpanded && expandedSubmenu.inventory && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => handleMenuClick('inventory', '')}>Order</div>
          <div className="sub-item" onClick={() => handleMenuClick('inventory', '')}>Inward</div>
          <div className="sub-item" onClick={() => handleMenuClick('inventory', '')}>Issue</div>
          <div className="sub-item" onClick={() => handleMenuClick('inventory', '')}>Purchase Return</div>
          <div className="sub-item" onClick={() => handleMenuClick('inventory', '')}>Stock Transfer</div>
          <div className="sub-item" onClick={() => handleMenuClick('inventory', '')}>Stock Alert</div>
          <div className="sub-item" onClick={() => handleMenuClick('inventory', '')}>Upload Stock</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => handleMenuClick('billing', '')}>
        <img src={billingIcon} alt="Billing" className="icon" />
        {isExpanded && <span className="label">Billing</span>}
      </div>
      {isExpanded && expandedSubmenu.billing && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => handleMenuClick('billing', '')}>Invoice</div>
          <div className="sub-item" onClick={() => handleMenuClick('billing', '/newbill')}>New Bill</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => handleMenuClick('customer', '')}>
        <img src={customerIcon} alt="Customer" className="icon" />
        {isExpanded && <span className="label">Customer</span>}
      </div>
      {isExpanded && expandedSubmenu.customer && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => handleMenuClick('customer', '')}>Manage</div>
          <div className="sub-item" onClick={() => handleMenuClick('customer', '')}>PSF</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => handleMenuClick('users', '')}>
        <img src={userIcon} alt="users" className="icon" />
        {isExpanded && <span className="label">Users</span>}
      </div>
      {isExpanded && expandedSubmenu.users && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => handleMenuClick('users', '')}>Employee</div>
          <div className="sub-item" onClick={() => handleMenuClick('users', '')}>Job Queue</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => handleMenuClick('workshopProfile', '')}>
        <img src={workshopIcon} alt="Workshop Profile" className="icon" />
        {isExpanded && <span className="label">Workshop Profile</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('reports', '')}>
        <img src={reportsIcon} alt="Reports" className="icon" />
        {isExpanded && <span className="label">Reports</span>}
      </div>
    </div>
  );
};

export default Sidebar;
