import React from 'react';
import './Workshop.css';
import Access from './Access';

const Workshop = () => {
  return (
    <div className="Workshop">
      <header className="workshop-header">
        

        <div className="contact-info">

        </div>
      </header>

      <Access />

      <div className="workshop-content">
        <button className="locate-me-btn">Locate Me</button>

        <form className="workshop-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name for Pickup/Delivery</label>
              <input type="text"  />
            </div>

            <div className="form-group">
              <label>City / Street</label>
              <input type="text"  />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>State</label>
              <input type="text"  />
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
              <label>Available Facilities</label>
              <input type="text"  />
            </div>

            <div className="form-group">
              <label>Selected Holidays (Days)</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Working Start Time</label>
              <input type="text"  />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>GSTIN</label>
              <input type="text"  />
            </div>

            <div className="form-group">
              <label>Insurance Tiers</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>SAC</label>
              <input type="text"  />
            </div>
          </div>
          <div className="workshop-profile-container">
            <div className="workshop-profile-grid">
              {/* Row 1: Selection Inputs */}
              <div className="form-group">
                <label>Select Oils Used</label>
                <select>
                  <option value="0">0 Selected</option>
                </select>
              </div>
              <div className="form-group">
                <label>Select Specialization</label>
                <select>
                  <option value="0">0 Specialization Selected</option>
                </select>
              </div>
              <div className="form-group">
                <label>Select Payment Mode</label>
                <select>
                  <option value="2">2 Payment Modes Selected</option>
                </select>
              </div>

              {/* Row 2: Text Areas */}
              <div className="form-group">
                <label>Caption in Invoice</label>
                <textarea placeholder="Enter caption..."></textarea>
              </div>
              <div className="form-group">
                <label>Punch Address</label>
                <textarea placeholder="Enter punch address..."></textarea>
              </div>
              <div className="form-group">
                <label>Invoice Header</label>
                <textarea placeholder="Enter invoice header..."></textarea>
              </div>

              {/* Row 3: Other Inputs */}
              <div className="form-group">
                <label>Default Service Duration (in Days)</label>
                <select>
                  <option>Select Duration</option>
                </select>
              </div>
              <div className="form-group">
                <label>GSTIN</label>
                <input type="text" placeholder="Enter GSTIN" />
              </div>
              <div className="form-group">
                <label>Dealer Code</label>
                <input type="text" placeholder="Enter Dealer Code" />
              </div>

              {/* Row 4: File Upload Inputs */}
              <div className="form-group">
                <label>Select Workshop Logo</label>
                <input type="file" />
              </div>
              <div className="form-group">
                <label>Additional Workshop Logo</label>
                <input type="file" />
              </div>
              <div className="form-group">
                <label>Select Workshop Images</label>
                <input type="file" />
              </div>
            </div>
            <button className="next-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Workshop;
