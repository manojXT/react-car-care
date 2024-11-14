import React from 'react';
import './Workshop.css';
import Access from './Access';

const Workshop = () => {
  return (
    <div className="Workshop">
      <p className='title'>Workshop</p>
      <Access />
      <div className="workshop-content">
        <button className="locate-me-btn">Locate Me</button>
        <form className="workshop-form">
          <div className="form-row">
            <div className="form-group">
              <label>Workshop Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>City / Street</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>State</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Pincode</label>
              <input type="text" />
            </div>
          </div>

                   

          <div className="form-row">
           <div className="form-group">
              <label>Select Workshop Logo</label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label>Select Workshop Images</label>
              <input type="file" />
            </div>
          </div>
          <button className="next-button">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Workshop;
