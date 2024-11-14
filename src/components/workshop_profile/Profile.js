import React, { useState } from 'react';
import './Profile.css';
import Access from './Access';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    workshopName: '',
    ownerName: '',
    email: '',
    ownerMobile: '',
    landlineNo: '',
    address: '',
    creationDate: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", profileData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <p className="title">Profile</p>
      <Access />

      <div className="profile-form-container">
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="workshopName">Workshop Name</label>
            <input 
              type="text" 
              id="workshopName" 
              value={profileData.workshopName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input 
              type="text" 
              id="ownerName" 
              value={profileData.ownerName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input 
              type="email" 
              id="email" 
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ownerMobile">Owner Mobile No.</label>
            <input 
              type="tel" 
              id="ownerMobile" 
              value={profileData.ownerMobile}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="landlineNo">Landline No.</label>
            <input 
              type="tel" 
              id="landlineNo" 
              placeholder="Landline No." 
              value={profileData.landlineNo}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input 
              type="text" 
              id="address" 
              placeholder="Address" 
              value={profileData.address}
              onChange={handleInputChange}
            />
          </div>
        </form>

        {/* Submit button aligned to the left, outside form grid */}
        <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Profile;
