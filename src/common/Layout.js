import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header'; 
import './Layout.css';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggles the sidebar visibility
  const toggleSidebar = () => setShowSidebar(prevState => !prevState);

  const username = "John Doe"; 
  const onLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="layout">
      <Header username={username} onLogout={onLogout} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} /> {/* Pass props */}
      <div className={`main-content ${showSidebar ? 'shifted' : ''}`}> 
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
