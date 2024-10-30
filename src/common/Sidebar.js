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
    workshopProfile: false,
    reports: false,
  });

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleExpand = (item) => {
    setExpandedSubmenu((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        <FaBars />
      </button>

      <div className="sidebar-item" onClick={() => { toggleExpand('dashboard'); navigation('/dashboard'); }}>
        <img src={dashboardIcon} alt="Dashboard" className="icon" />
        {isExpanded && <span className="label">Dashboard</span>}
      </div>

      <div className="sidebar-item" onClick={() => { toggleExpand('appointment'); navigation(''); }}>
        <img src={appointmentIcon} alt="Book Appointment" className="icon" />
        {isExpanded && <span className="label">Book Appointment</span>}
      </div>

      <div className="sidebar-item" onClick={() => { toggleExpand('jobCards'); navigation('/jobcard'); }}>
        <img src={jobcardIcon} alt="Job Cards" className="icon" />
        {isExpanded && <span className="label">Job Cards</span>}
      </div>

      <div className="sidebar-item" onClick={() => { toggleExpand('inventory'); navigation(''); }}>
        <img src={inventoryIcon} alt="Inventory" className="icon" />
        {isExpanded && <span className="label">Inventory</span>}
      </div>
      {isExpanded && expandedSubmenu.inventory && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => navigation('')}>Order</div>
          <div className="sub-item" onClick={() => navigation('')}>Inward</div>
          <div className="sub-item" onClick={() => navigation('')}>Issue</div>
          <div className="sub-item" onClick={() => navigation('')}>Purchase Return</div>
          <div className="sub-item" onClick={() => navigation('')}>Stock Transfer</div>
          <div className="sub-item" onClick={() => navigation('')}>Stock Alert</div>
          <div className="sub-item" onClick={() => navigation('')}>Upload Stock</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => { toggleExpand('billing'); navigation(''); }}>
        <img src={billingIcon} alt="Billing" className="icon" />
        {isExpanded && <span className="label">Billing</span>}
      </div>
      {isExpanded && expandedSubmenu.billing && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => navigation('')}>Invoice</div>
          <div className="sub-item" onClick={() => navigation('')}>New Bill</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => { toggleExpand('customer'); navigation(''); }}>
        <img src={customerIcon} alt="Customer" className="icon" />
        {isExpanded && <span className="label">Customer</span>}
      </div>
      {isExpanded && expandedSubmenu.customer && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => navigation('')}>Manage</div>
          <div className="sub-item" onClick={() => navigation('')}>PSF</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => { toggleExpand('workshopProfile'); navigation(''); }}>
        <img src={workshopIcon} alt="Workshop Profile" className="icon" />
        {isExpanded && <span className="label">Workshop Profile</span>}
      </div>

      <div className="sidebar-item" onClick={() => { toggleExpand('reports'); navigation(''); }}>
        <img src={reportsIcon} alt="Reports" className="icon" />
        {isExpanded && <span className="label">Reports</span>}
      </div>
    </div>
  );
};

export default Sidebar;
