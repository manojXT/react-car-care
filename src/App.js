import React, { useState } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sidebar & Header Section
import Header from './common/Header';
import Sidebar from './common/Sidebar';

// import Loginpage from './components/Loginpage';

import JobCard from './components/Jobcard';
import AddJobcard from './components/AddJobcard';
import Estimation from './components/Estimation';


function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };

  // const handleLogin = () => {
  //   setIsLoggedIn(true); 
  // };

  return (
    <Router>
      {/* <Routes>
        <Route path="/" element={<Loginpage onLogin={handleLogin} />} />
      </Routes> */}
      
      {/* {isLoggedIn && ( */}
        <div className="app">
          <Header />
          <div className="main-layout">
            <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
            <div className="content">
              <Routes>

                <Route path="/jobcard" element={<JobCard />} />
                <Route path="/addjobcard" element={<AddJobcard />} />
                <Route path="/estimation" element={<Estimation />} />
               
              </Routes>
            </div>
          </div>
        </div>
      {/* )} */}
    </Router>
  );
}

export default App;
