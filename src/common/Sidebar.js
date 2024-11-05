import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';



const Sidebar = () => {

  const navigate = useNavigate();

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
      <div className="sidebar-item" onClick={() => {toggleExpand('appointment');navigate("")}}>
        <span className="icon">📅</span>
        {isExpanded && <span className="label">Book Appointment</span>}
      </div>

      <div className="sidebar-item" onClick={() => {toggleExpand('jobCards');navigate("/Access")}}>
        <span className="icon">📝</span>
        {isExpanded && <span className="label">Job Cards</span>}
      </div>

      <div className="sidebar-item" onClick={() => {toggleExpand('inventory');navigate("/Stockalert")}}>
        <span className="icon">👕</span>
        {isExpanded && <span className="label">Inventory</span>}
      </div>
      {/* Inventory Submenu */}
      {isExpanded && expandedSubmenu.inventory && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => navigate("/Addorder")} >Order</div>
          <div className="sub-item" onClick={() => navigate("/Addinward")}>Inward</div>
          <div className="sub-item" onClick={() => navigate("/Addissue")}>Issue</div>
          <div className="sub-item" onClick={() => navigate("/Addreturn")}>Purchase Return</div>
          <div className="sub-item" onClick={() => navigate("/Addtransfer")}>Stock Transfer</div>
          <div className="sub-item" onClick={() => navigate("/Stockalert")}>Stock Alert</div>
          <div className="sub-item" onClick={() => navigate("/Addstock")}>Upload Stock</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => {toggleExpand('billing');navigate("/Access")}}>
        <span className="icon">💰</span>
        {isExpanded && <span className="label">Billing</span>}
      </div>
      {/* Billing Submenu */}
      {isExpanded && expandedSubmenu.billing && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => navigate("/Access")}>Invoice</div>
          <div className="sub-item" onClick={() => navigate("/Access")}>New Bill</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => {toggleExpand('customer');navigate("/Access")}}>
        <span className="icon">👤</span>
        {isExpanded && <span className="label">Customer</span>}
      </div>
      {/* Customer Submenu */}
      {isExpanded && expandedSubmenu.customer && (
        <div className="sub-menu">
          <div className="sub-item" onClick={() => navigate("/Access")}>Manage</div>
          <div className="sub-item" onClick={() => navigate("/Access")}>PSF</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => {toggleExpand('workshopProfile');navigate("/profile")}}>
        <span className="icon">🚗</span>
        {isExpanded && <span className="label">Workshop Profile</span>}
      </div>

      <div className="sidebar-item" onClick={() => {toggleExpand('reports');navigate("/Reportsnavnbar")}}>
        <span className="icon">📊</span>
        {isExpanded && <span className="label">Reports</span>}
      </div>
     </div>
  );
};

export default Sidebar;
