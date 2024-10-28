import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState({
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
      {/* Toggle button (logo) */}
      <button onClick={toggleSidebar} className="toggle-button">
        <FaBars />
      </button>

      {/* Sidebar items */}
      <div className="sidebar-item" onClick={() => toggleExpand('appointment')}>
        <span className="icon">📅</span>
        {isExpanded && <span className="label">Book Appointment</span>}
      </div>

      <div className="sidebar-item" onClick={() => toggleExpand('jobCards')}>
        <span className="icon">📝</span>
        {isExpanded && <span className="label">Job Cards</span>}
      </div>

      <div className="sidebar-item" onClick={() => toggleExpand('inventory')}>
        <span className="icon">👕</span>
        {isExpanded && <span className="label">Inventory</span>}
      </div>
      {/* Inventory Submenu */}
      {isExpanded && expandedSubmenu.inventory && (
        <div className="sub-menu">
          <div className="sub-item">Order</div>
          <div className="sub-item">Inward</div>
          <div className="sub-item">Issue</div>
          <div className="sub-item">Purchase Return</div>
          <div className="sub-item">Stock Transfer</div>
          <div className="sub-item">Stock Alert</div>
          <div className="sub-item">Upload Stock</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => toggleExpand('billing')}>
        <span className="icon">💰</span>
        {isExpanded && <span className="label">Billing</span>}
      </div>
      {/* Billing Submenu */}
      {isExpanded && expandedSubmenu.billing && (
        <div className="sub-menu">
          <div className="sub-item">Invoice</div>
          <div className="sub-item">New Bill</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => toggleExpand('customer')}>
        <span className="icon">👤</span>
        {isExpanded && <span className="label">Customer</span>}
      </div>
      {/* Customer Submenu */}
      {isExpanded && expandedSubmenu.customer && (
        <div className="sub-menu">
          <div className="sub-item">Manage</div>
          <div className="sub-item">PSF</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => toggleExpand('workshopProfile')}>
        <span className="icon">🚗</span>
        {isExpanded && <span className="label">Workshop Profile</span>}
      </div>

      <div className="sidebar-item" onClick={() => toggleExpand('reports')}>
        <span className="icon">📊</span>
        {isExpanded && <span className="label">Reports</span>}
      </div>
    </div>
  );
};

export default Sidebar;
