import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Access.css';

function TabWorkshop() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the routes for each tab
  const routes = [
    '/Profile',        // Tab 0
    '/Users',          // Tab 1
    '/Workshop',       // Tab 2
    '/Settings',       // Tab 3
    '/Terms_and_condition', // Tab 4
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
        Profile
      </div>
      <div className={`tab ${activeTab === 1 ? 'active-tab' : ''}`} onClick={() => handleTabClick(1)}>
        Users
      </div>
      <div className={`tab ${activeTab === 2 ? 'active-tab' : ''}`} onClick={() => handleTabClick(2)}>
        Workshop
      </div>
      <div className={`tab ${activeTab === 3 ? 'active-tab' : ''}`} onClick={() => handleTabClick(3)}>
        Settings
      </div>
      <div className={`tab ${activeTab === 4 ? 'active-tab' : ''}`} onClick={() => handleTabClick(4)}>
        Terms and Conditions
      </div>
    </div>
  );
}

export default TabWorkshop;

