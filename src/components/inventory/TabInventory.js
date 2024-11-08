import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Inward.css';

function TabInventory() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the routes for each tab
  const routes = [
    '/Stock',          // Tab 0
    '/Order',          // Tab 1
    '/Inward',         // Tab 2
    '/Issued',         // Tab 3
    '/Purchasereturn', // Tab 4
    // '/Stockalert'      // Tab 5
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
        Stock
      </div>
      <div className={`tab ${activeTab === 1 ? 'active-tab' : ''}`} onClick={() => handleTabClick(1)}>
        Order
      </div>
      <div className={`tab ${activeTab === 2 ? 'active-tab' : ''}`} onClick={() => handleTabClick(2)}>
        Inward
      </div>
      <div className={`tab ${activeTab === 3 ? 'active-tab' : ''}`} onClick={() => handleTabClick(3)}>
        Issued
      </div>
      <div className={`tab ${activeTab === 4 ? 'active-tab' : ''}`} onClick={() => handleTabClick(4)}>
        Purchase Return
      </div>
      {/* <div className={`tab ${activeTab === 5 ? 'active-tab' : ''}`} onClick={() => handleTabClick(5)}>
        Stock Alert
      </div> */}
    </div>
  );
}

export default TabInventory;
