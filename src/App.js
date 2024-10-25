import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Inward from './components/Inward';
import Login from './components/Loginpage';
import Jobcard from './components/Jobcard';
import Trail from './components/Trail';
import Newjobcard from './components/Newjobcard';
import './App.css';

function App() {
  const isLoggedIn = true; // Replace with real authentication logic (e.g., from context or state)

  return (
    <Router>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes: Accessible only after login */}
        {isLoggedIn && (
          <Route
            path="/*"
            element={
              <div className="app">
                <Sidebar />
                <div className="main-layout">
                  <Header />
                  <div className="content">
                    <Routes>
                      <Route path="/Inward" element={<Inward />} />
                      <Route path="/Jobcard" element={<Jobcard />} />
                      <Route path="/Trail" element={<Trail />} />
                      <Route path="/Newjobcard" element={<Newjobcard />} />
                    </Routes>
                  </div>
                </div>
              </div>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
