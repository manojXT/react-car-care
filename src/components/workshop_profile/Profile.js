import React from 'react';
import './Profile.css';
import Access from './Access';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        
      </div>
      <Access />
      <div className="profile-form-container">
        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="workshopName">Workshop Name</label>
            <input type="text" id="workshopName" value="KG CAR CARE" readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="ownerName">Owner Name</label>
            <input type="text" id="ownerName" value="Manikandan" readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" value="kgcarcarecbe@gmail.com" readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="ownerMobile">Owner Mobile No.</label>
            <input type="tel" id="ownerMobile" value="+91 9384530403" readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="contactPerson">Contact Person</label>
            <input type="text" id="contactPerson" value="Manikandan" readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="tel" id="contactNumber" value="+91 9384530403" readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="landlineNo">Landline No.</label>
            <input type="tel" id="landlineNo" placeholder="Landline No." />
          </div>

          <div className="form-group">
            <label htmlFor="birthDate">Birth Date</label>
            <input type="date" id="birthDate" />
          </div>

          <div className="form-group">
            <label htmlFor="anniversaryDate">Anniversary Date</label>
            <input type="date" id="anniversaryDate" />
          </div>
        </form>
      </div>
      <div><button className="next-button">Next</button></div>
    </div>
  );
};

export default Profile;
