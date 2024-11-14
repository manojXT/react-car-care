import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Reports.css';

function TabInventory() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the routes for each tab
  const routes = [
    '/Reportsemployee',          // Tab 0
    '/Reportsbill',          // Tab 1
    '/Reportsinvoice',         // Tab 2
  ];

  // Determine the active tab based on the current route
  const activeTab = routes.findIndex(route => location.pathname.startsWith(route));

  // Function to handle tab click and navigation
  const handleTabClick = (index) => {
    navigate(routes[index]);
  };

  return (
    <div className="tab-navigation">
      <div className={`tab ${activeTab === 0 ? 'active-tab' : ''}`} onClick={() => handleTabClick(0)}>
        Employee
      </div>
      <div className={`tab ${activeTab === 1 ? 'active-tab' : ''}`} onClick={() => handleTabClick(1)}>
        Bill
      </div>
      <div className={`tab ${activeTab === 2 ? 'active-tab' : ''}`} onClick={() => handleTabClick(2)}>
        Invoice
      </div>
    </div>
  );
}

export default TabInventory;
