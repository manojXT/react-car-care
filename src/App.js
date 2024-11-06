import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sidebar & Header Section
import Header from './common/Header';
import Sidebar from './common/Sidebar';

// import Loginpage from './components/Loginpage';
// import ForgotPassword from './components/Forgotpassword';
import Dashboard from './components/Dashboard';
import Bookappointment from './components/Bookappointment';
import Newappointment from './components/Newappointment';
import Employee from './components/Employee';
import Addemployee from './components/Addemployee';
import Jobqueue from './components/Jobqueue';
import JobCard from './components/Jobcard';
import AddJobcard from './components/AddJobcard';
import Estimation from './components/Estimation';
import NewBill from './components/NewBill';
import NewInvoice from './components/NewInvoice';


import Stock from './components/inventory/Stock';
import Order from './components/inventory/Order';
import TabInventory from './components/inventory/TabInventory';
import Inward from './components/inventory/Inward';
import Issued from './components/inventory/Issue';
import Stockalert from './components/inventory/Stockalert';
import Addorder from './components/inventory/Addorder';
import Addinward from './components/inventory/Addinward';
import Addissue from './components/inventory/Addissue';
import Addreturn from './components/inventory/Addreturn';
import Addstock from './components/inventory/Addstock';
import Addtransfer from './components/inventory/Addtransfer';

// Workshop Profile Section
import Access from './components/workshop_profile/Access';
import Profile from './components/workshop_profile/Profile';
import Workshop from './components/workshop_profile/Workshop';
import SettingsPage from './components/workshop_profile/Settings';
import SubscriptionTable from './components/workshop_profile/Subscription';
import Termsandcondition from './components/workshop_profile/Terms and condition';
import Reminders from './components/workshop_profile/Reminder';
import Associate from './components/workshop_profile/Associate';
import Integrations from './components/workshop_profile/Integrations';
import Users from './components/workshop_profile/Users';
import Purchasereturn from './components/workshop_profile/Purchasereturn';
import Reportsnavbar from './components/workshop_profile/Reportsnavbar';
import Jobcardupdate from './components/workshop_profile/Jobcardupdate';


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

                <Route path="/jobcard" element={<JobCard />} />
                <Route path="/addjobcard" element={<AddJobcard />} />
                <Route path="/estimation" element={<Estimation />} />
                <Route path="/newbill" element={<NewBill />} />
                <Route path="/newinvoice" element={<NewInvoice />} />
               
                

                <Route path="/Access" element={<Access />} />
                <Route path="/TabInventory" element={<TabInventory />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Workshop" element={<Workshop />} />
                <Route path="/Settings" element={<SettingsPage />} />
                <Route path="/Subscription" element={<SubscriptionTable />} />
                <Route path="/Terms and condition" element={<Termsandcondition />} />
                <Route path="/Reminders" element={<Reminders />} />
                <Route path="/Associate" element={<Associate />} />
                <Route path="/Integrations" element={<Integrations />} />
                <Route path="/Stock" element={<Stock />} />
                <Route path="/Order" element={<Order />} />
                <Route path="/Inward" element={<Inward />} />
                <Route path="/Issued" element={<Issued />} />
                <Route path="/Purchasereturn" element={<Purchasereturn />} />
                <Route path="/Stockalert" element={<Stockalert />} />
                <Route path="/Addorder" element={<Addorder />} />
                <Route path="/Addinward" element={<Addinward />} />
                <Route path="/Addissue" element={<Addissue />} />
                <Route path="/Addreturn" element={<Addreturn />} />
                <Route path="/Addstock" element={<Addstock />} />
                <Route path="/Addtransfer" element={<Addtransfer />} />
                <Route path="/Reportsnavnbar" element={<Reportsnavbar />} />
                <Route path="/Jobcardupdate" element={<Jobcardupdate />} />
              </Routes>
            </div>
          </div>
        </div>
      {/* )} */}
    </Router>
  );
}

export default App;
