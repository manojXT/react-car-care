import React from 'react';
import './Access.css';

const Access = () => {
  return (
    <div className="access-page">
      <div className="tabs">

        <nav className="profile-nav">
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/Workshop">Workshop</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/Settings">Settings</a></li>
            <li><a href="/Subscription">Subscription</a></li>
            <li><a href="/Terms and condition">Terms & Conditions</a></li>
            <li><a href="/Reminders">Reminders</a></li>
            <li><a href="/Associate">Associated Workshop</a></li>
            <li><a href="/Integrations">Integrations</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Access;
