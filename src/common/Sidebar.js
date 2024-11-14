import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

// Import images with alt attributes added
import dashboardIcon from './dashboardicons/Appointment.png';
import appointmentIcon from './dashboardicons/Appointment.png';
import jobcardIcon from './dashboardicons/Jobcard.png';
import billingIcon from './dashboardicons/Transactioins.png';
import inventoryIcon from './dashboardicons/Inventory.png';
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
    users: false,
    workshopProfile: false,
    reports: false,
  });

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
    <div
      className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setIsExpanded(true)}  // Expand sidebar on hover
      onMouseLeave={() => setIsExpanded(false)} // Collapse sidebar when mouse leaves
    >
      {/* <button onClick={() => setIsExpanded(!isExpanded)} className="toggle-button">
        <FaBars />
      </button> */}

      <div className="sidebar-item" onClick={() => handleMenuClick('dashboard', '/dashboard')}>
        <img src={dashboardIcon} alt="Dashboard" className="icon" />
        {isExpanded && <span className="label">Dashboard</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('appointment', '/Bookappointment')}>
        <img src={appointmentIcon} alt="Book Appointment" className="icon" />
        {isExpanded && <span className="label">Book Appointment</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('jobCards', '/jobcard')}>
        <img src={jobcardIcon} alt="Job Cards" className="icon" />
        {isExpanded && <span className="label">Job Cards</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('inventory', '/Stock')}>
        <img src={inventoryIcon} alt="Inventory" className="icon" />
        {isExpanded && <span className="label">Inventory</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('billing', '/Bill')}>
        <img src={billingIcon} alt="Billing" className="icon" />
        {isExpanded && <span className="label">Billing</span>}
      </div>
      {isExpanded && expandedSubmenu.billing && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => handleMenuClick('billing', '/Invoice')}>Invoice</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => handleMenuClick('users', '/Employee')}>
        <img src={userIcon} alt="Users" className="icon" />
        {isExpanded && <span className="label">Users</span>}
      </div>
      {isExpanded && expandedSubmenu.users && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => handleMenuClick('users', '/Jobqueue')}>Job Queue</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => handleMenuClick('workshopProfile', '/profile')}>
        <img src={workshopIcon} alt="Workshop Profile" className="icon" />
        {isExpanded && <span className="label">Workshop Profile</span>}
      </div>

      <div className="sidebar-item" onClick={() => handleMenuClick('reports', '/Reportsemployee')}>
        <img src={reportsIcon} alt="Reports" className="icon" />
        {isExpanded && <span className="label">Reports</span>}
      </div>
    </div>
  );
};

export default Sidebar;
