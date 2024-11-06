    import React from 'react';
    import { FaUserCircle } from 'react-icons/fa';
    import './Header.css';

    const Header = ({ username, onLogout }) => {
      return (
        <header className="header">
          {/* Center label moved to the right end */}
          {/* <label className="header-title">KG CAR CARE, COIMBATORE</label> */}

          {/* Right-side profile section */}
          <div className="profile-section">
            <span className="profile-name">{username}</span>
            <div className="profile-dropdown">
              <FaUserCircle className="profile-icon" />
              <span className="username">{username}</span>
              <div className="dropdown-content">
                <button onClick={onLogout} className="logout-button">Logout</button>
              </div>
            </div>
          </div>
        </header>
      );
    };

    export default Header;
