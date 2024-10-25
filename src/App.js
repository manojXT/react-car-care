import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Access from './components/Access';
import Profile from './components/Profile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WorkshopProfile from './components/Workshop';
import SettingsPage from './components/Settings';
import SubscriptionTable from './components/Subscription';
import Termsandcondition from './components/Terms and condition';
import Reminders from './components/Reminder';
import Associate from './components/Associate';
import Integrations from './components/Integrations';
import Users from './components/Users';
import Stock  from './components/Stock';
import Order from './components/Order';
import TabInventory from './components/TabInventory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inward from './components/Inward';
import Issued from './components/Issue';
import Purchasereturn from './components/Purchasereturn';
import Stockalert from './components/Stockalert';
import Appointment from './components/Appointment';
import Addorder from './components/Addorder';
import Addinward from './components/Addinward';
import Addissue from './components/Addissue';
import Addreturn from './components/Addreturn';




function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/Access" element={<Access />} />
              <Route path="/TabInventory" element={<TabInventory />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Workshop" element={<WorkshopProfile />} />
              <Route path="/Settings" element={<SettingsPage />} />
              <Route path="/Subscription" element={<SubscriptionTable />} />
              <Route path="/Terms and condition" element={<Termsandcondition />} />
              <Route path="/Reminders" element={<Reminders />} />
              <Route path="/Associate" element={<Associate />} />
              <Route path="/Integrations" element={<Integrations />} />
              <Route path="/Stock" element={<Stock/>} />
              <Route path="/Order" element={<Order />} />
              <Route path="/Inward" element={<Inward />} />
              <Route path="/Issued" element={<Issued />} />
              <Route path="/Purchasereturn" element={<Purchasereturn />} />
              <Route path="/Stockalert" element={<Stockalert />} />
              <Route path="/Appointment" element={<Appointment />} />
              <Route path="/Addorder" element={<Addorder />} />
              <Route path="/Addinward" element={<Addinward />} />
              <Route path="/Addissue" element={<Addissue />} />
              <Route path="/Addreturn" element={<Addreturn />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
