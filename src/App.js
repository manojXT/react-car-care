<<<<<<< HEAD
import React, { useState } from 'react';  // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sidebar & Header Section
import Header from './common/Header';
import Sidebar from './common/Sidebar';

// import Loginpage from './components/Loginpage';
import Dashboard from './components/Dashboard';
import Bookappointment from './components/Bookappointment';
import Newappointment from './components/Newappointment';
import Employee from './components/Employee';
import Addemployee from './components/Addemployee';
import Jobqueue from './components/Jobqueue';
// import ForgotPassword from './components/Forgotpassword';
=======
import React, { useState } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 9df4cb9051c744976b42ebae953da11c5b4c845d

// Sidebar & Header Section
import Header from './common/Header';
import Sidebar from './common/Sidebar';

<<<<<<< HEAD
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
        <Route path="/Forgotpassword" element={<ForgotPassword/>} />
      </Routes> */}
     
      {/* {isLoggedIn && ( */}
      <div className="app">
        <Header />
        <div className="main-layout">
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          <div className="content">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Bookappointment" element={<Bookappointment/>} />
              <Route path="/Newappointment" element={<Newappointment/>} />
              <Route path="/Employee" element={<Employee/>} />
              <Route path="/Addemployee" element={<Addemployee/>} />
              <Route path="/Jobqueue" element={<Jobqueue/>} />
            </Routes>
          </div>
        </div>
      </div>
=======
// import Loginpage from './components/Loginpage';

import JobCard from './components/Jobcard';
import AddJobcard from './components/AddJobcard';
import Estimation from './components/Estimation';
import NewBill from './components/NewBill';
import NewInvoice from './components/NewInvoice';


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
                <Route path="/newbill" element={<NewBill />} />
                <Route path="/newinvoice" element={<NewInvoice />} />
               
              </Routes>
            </div>
          </div>
        </div>
>>>>>>> 9df4cb9051c744976b42ebae953da11c5b4c845d
      {/* )} */}
    </Router>
  );
}

export default App;
