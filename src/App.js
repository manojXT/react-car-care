import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sidebar & Header Section
import Header from './common/Header';
import Sidebar from './common/Sidebar';

// Components
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

// Inventory Components
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
import Purchasereturn from './components/inventory/Purchasereturn';

// Workshop Profile Components
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

// Footer components
import Footer from './footer/Footer';
import FooterAddJC from './footer/FooterAddJC';
import FooterEstimation from './footer/FooterEstimation';
import FooterStock from './footer/FooterStock';
import FooterOrder from './footer/FooterOrder';
import FooterInward from './footer/FooterInward';
import FooterIssue from './footer/FooterIssue';
import FooterReturn from './footer/FooterReturn';
import ReqEstimation from './components/dashboardtable/ReqEstimation';
import EstimationTable from './components/dashboardtable/EstimationTable';
import EstReject from './components/dashboardtable/EstReject';
import Approval from './components/dashboardtable/Approval';
import WorkProgress from './components/dashboardtable/WorkProgress';
import Readydelivery from './components/dashboardtable/Readydelivery';
import InWorkshop from './components/dashboardtable/InWorkshop';
import Delivered from './components/dashboardtable/Delivered';
import SparePending from './components/dashboardtable/SparePending';
import InvoiceTable from './components/dashboardtable/InvoiceTable';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-layout">
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          <div className="content">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Bookappointment" element={<Bookappointment />} />
              <Route path="/Newappointment" element={<Newappointment />} />
              <Route path="/Employee" element={<Employee />} />
              <Route path="/Addemployee" element={<Addemployee />} />
              <Route path="/Jobqueue" element={<Jobqueue />} />
              <Route path="/Jobcard" element={<JobCard />} />
              <Route path="/AddJobcard" element={<AddJobcard />} />
              <Route path="/Estimation" element={<Estimation />} />
              <Route path="/NewBill" element={<NewBill />} />
              <Route path="/NewInvoice" element={<NewInvoice />} />

              {/* Inventory Section */}
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

              {/* Workshop Profile Section */}
              <Route path="/Access" element={<Access />} />
              <Route path="/TabInventory" element={<TabInventory />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Workshop" element={<Workshop />} />
              <Route path="/Settings" element={<SettingsPage />} />
              <Route path="/Subscription" element={<SubscriptionTable />} />
              <Route path="/Terms_and_condition" element={<Termsandcondition />} />
              <Route path="/Reminders" element={<Reminders />} />
              <Route path="/Associate" element={<Associate />} />
              <Route path="/Integrations" element={<Integrations />} />

              <Route path="/ReqEstimation" element={<ReqEstimation />} />
              <Route path="/EstimationTable" element={<EstimationTable />} />
              <Route path="/EstReject" element={<EstReject />} />
              <Route path="/Approval" element={<Approval />} />
              <Route path="/WorkProgress" element={<WorkProgress />} />
              <Route path="/Readydelivery" element={<Readydelivery />} />
              <Route path="/InWorkshop" element={<InWorkshop />} />
              <Route path="/Delivered" element={<Delivered />} />
              <Route path="/SparePending" element={<SparePending />} />
              <Route path="/InvoiceTable" element={<InvoiceTable/>} /> 
            </Routes>
          </div>
        </div>

        {/* Footer Logic */}
        <Routes>
          <Route path="/AddJobcard" element={<FooterAddJC />} />
          <Route path="/Estimation" element={<FooterEstimation />} />

          {/* Inventory section Footer */}
          <Route path="/Addstock" element={<FooterStock />} />
          <Route path="/Addorder" element={<FooterOrder />} />
          <Route path="/Addinward" element={<FooterInward />} />
          <Route path="/Addissue" element={<FooterIssue />} />
          <Route path="/Addreturn" element={<FooterReturn />} />

          <Route path="*" element={<Footer />} /> {/* Default footer for all pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
