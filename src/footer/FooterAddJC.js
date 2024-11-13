import React from 'react';
// import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FooterAddJC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    window.history.back(); 
  };

  // const fileInputRef = useRef(null);

  // Handle file input change
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     console.log('File selected:', file.name);
  //   }
  // };

  // Handle file upload button click
  // const handleUpload = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  return (
    <div className="footer-container">
      <div className="footer-left">
      <button className="back-button" onClick={handleBackClick}>&larr; Back</button>
        <button className="footer-button" type="button">Give Estimation Later</button>
        <button className="footer-button" type="button" onClick={() => navigate('/estimation')}>
          Prepare Estimation Now
        </button>
        {/* <button className="footer-button" type="button" onClick={handleUpload}>
          <FaUpload />
        </button> */}

        {/* Hidden file input 
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />*/}
      </div>
      <div className="footer-right">
        <span>Powered by <br/> Xtown</span>
        <img src="/path/to/autox-logo.png" alt="AutoG" className="autox-logo" />
      </div>
    </div>
  );
};

export default FooterAddJC;
