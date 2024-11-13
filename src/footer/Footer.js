import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleBackClick = () => {
    window.history.back(); 
  };

  return (
    <div className="footer-container">
      <div className="footer-left">
        <button className="back-button" onClick={handleBackClick}>&larr; Back</button>
      </div>
      <div className="footer-right">
        <span>Powered by <br/> Xtown </span>
        <img src="/path/to/autox-logo.png" alt="AutoX" className="autox-logo" />
      </div>
    </div>
  );
};

export default Footer;
