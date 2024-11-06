import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import './Stock.css';
import { useNavigate } from 'react-router-dom';

function TabInventory() {
  // State to manage active tab
  const [tabValue, setTabValue] = React.useState(0);

  const navigate = useNavigate();

  // Array of routes corresponding to each tab
  const routes = [
    '/Stock',   // Tabvalue 0     
    '/Order',   // Tabvalue 1        
    '/Inward',  // Tabvalue 2           
    '/issued',  // Tabvalue 3           
    '/Purchasereturn', // Tabvalue 4
    '/Stockalert'  // Tabvalue 5     
  ];

  // Function to handle tab change and navigation
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    navigate(routes[newValue]); 
  };

  return (
    <Box className="tabs">
      <Tabs
        value={tabValue} // Controlled tab value
        onChange={handleTabChange} // Handle tab change and navigation
        variant="scrollable"
        scrollButtons="auto"
        aria-label="stock tabs"
      >
        <Tab label="Stock" className={`tabButton ${tabValue === 0 ? 'activeTab' : ''}`} />
        <Tab label="Order" className={`tabButton ${tabValue === 1 ? 'activeTab' : ''}`} />
        <Tab label="Inward" className={`tabButton ${tabValue === 2 ? 'activeTab' : ''}`} />
        <Tab label="Issued" className={`tabButton ${tabValue === 3 ? 'activeTab' : ''}`} />
        <Tab label="Purchase Return" className={`tabButton ${tabValue === 4 ? 'activeTab' : ''}`} />
        <Tab label="Stock Alert" className={`tabButton ${tabValue === 5 ? 'activeTab' : ''}`} />
      </Tabs>
    </Box>
  );
}

export default TabInventory;
