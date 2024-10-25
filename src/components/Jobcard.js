import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Jobcard.css'; // Import the CSS file

function VehicleForm() {
  const [checked, setChecked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fuelType, setFuelType] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [serviceType, setServiceType] = useState('');
  const [serviceAdvisor, setServiceAdvisor] = useState('');
  const [mobileNumber, setMobileNumber] = useState('+91');
  const [altMobileNumber, setAltMobileNumber] = useState('+91');
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [paymentDate, setPaymentDate] = useState(new Date());
  const [showPaidDatePicker, setPaidDatePicker] = useState(false);

  const colors = [
    { value: 'white', backgroundColor: '#ffffff' },
    { value: 'gray', backgroundColor: '#808080' },
    { value: 'darkgray', backgroundColor: '#A9A9A9' },
    { value: 'blue', backgroundColor: '#0000ff' },
    { value: 'maroon', backgroundColor: '#800000' },
    { value: 'silver', backgroundColor: '#C0C0C0' },
    { value: 'brown', backgroundColor: '#A52A2A' },
    { value: 'orange', backgroundColor: '#FFA500' },
    { value: 'red', backgroundColor: '#FF0000' },
    { value: 'black', backgroundColor: '#000000' },
  ];

  const fuelOptions = [
    { label: 'Petrol', value: 'P' },
    { label: 'Diesel', value: 'D' },
    { label: 'Electric', value: 'EV' },
    { label: 'LPG', value: 'L' },
  ];

  const onDateChange = (event) => {
    setDeliveryDate(event.target.value);
  };

  const onPaymentDateChange = (event) => {
    setPaymentDate(event.target.value);
  };

  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div className="vehicle-form-container">
      {/* Search Bar */}
      <div className="search-row">
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <span>T/R Number / Other Number</span>
        <FaSearch className="search-icon" />
        <input className="search-input" type="text" placeholder="Search Using Registration No. / Customer Name / Mobile No. / Email / Corporate Name / Vehicle / VIN" />
      </div>

      {/* Vehicle Details Form */}
      <div className="form">
        <div className="form-row">
          <input type="text" className="input" placeholder="Registration No." />
          <input type="text" className="input" placeholder="Odometer In" />
          <input type="text" className="input" placeholder="Avg KMS / Day" />
          <input type="text" className="input" placeholder="VIN" />
          <input type="text" className="input" placeholder="Engine No." />
        </div>

        <div>
          <div className="form-row">
            <input type="text" className="input" placeholder="Find Vehicle" />
            <input type="text" className="input" placeholder="Make" />
            <input type="text" className="input" placeholder="Model" />
            <input
              type="number"
              className="input"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)} /* Updates the year value */
              min="1900" /* Optional: restrict minimum year */
              max={new Date().getFullYear()} /* Optional: restrict to current year or earlier */
            />
            <input type="text" className="input" placeholder="Variant" />
          </div>
        </div>

        {/* Vehicle Color Picker */}
        <div className="color-picker-container">
          <span>Vehicle Colour</span>
          <div
            className="color-box"
            style={{ backgroundColor: selectedColor || '#ffffff' }}
            onClick={() => setIsModalVisible(true)}
          />
          {isModalVisible && (
            <div className="modal">
              <div className="modal-content">
                <h4>Select Vehicle Colour</h4>
                <div className="color-grid">
                  {colors.map((color) => (
                    <div
                      key={color.value}
                      className={`color-button ${selectedColor === color.value ? 'selected' : ''}`}
                      style={{ backgroundColor: color.backgroundColor }}
                      onClick={() => {
                        setSelectedColor(color.value);
                        setIsModalVisible(false);
                      }}
                    />
                  ))}
                </div>
                <button onClick={() => setIsModalVisible(false)}>Close</button>
              </div>
            </div>
          )}
          {/* Fuel Type Dropdown */}
          <div className="fuel-picker-wrapper">
            <span>Select Fuel Type</span>
            <div className="dropdown-box" onClick={() => setDropdownVisible(true)}>
              {fuelType ? fuelOptions.find((option) => option.value === fuelType)?.label : 'Select'}
            </div>
            {isDropdownVisible && (
              <div className="modal">
                <div className="modal-content">
                  <h4>Select Fuel Type</h4>
                  <div className="dropdown-items">
                    {fuelOptions.map((option) => (
                      <div
                        key={option.value}
                        className="dropdown-item"
                        onClick={() => {
                          setFuelType(option.value);
                          setDropdownVisible(false);
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setDropdownVisible(false)}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Service Type and Advisor */}
        <select
          className="input"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="">Service Type</option>
          <option value="general">General Service</option>
          <option value="oil_change">Oil Change</option>
        </select>

        <select
          className="input"
          value={serviceAdvisor}
          onChange={(e) => setServiceAdvisor(e.target.value)}
        >
          <option value="">Service Advisor</option>
          <option value="advisor_a">Advisor A</option>
          <option value="advisor_b">Advisor B</option>
        </select>
      </div>
      {/* Customer Concerns */}
      <textarea
        className="input"
        placeholder="Enter Customer Concerns / Complaints (e.g. A/C not working)"
        rows={2}
      />
      <button className="add-service-button" onClick={() => console.log('Add Service')}>Add Service</button>

      {/* Customer Details Section */}
      <div className="form-row">
        <input type="text" className="input" placeholder="Customer Name" />
        <input
          type="text"
          className="input"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>

      <div className="form-row">
        <input
          className="input half-input"
          placeholder="Alternative Mobile No."
          value={altMobileNumber}
          onChange={(e) => setAltMobileNumber(e.target.value)}
        />
        <input className="input half-input" placeholder="Email ID" />
      </div>

      <div className="form-row">
        <input
          className="input half-input"
          placeholder="Est. Delivery Date *"
          readOnly
          value={deliveryDate.toDateString()}
        />
        <button onClick={() => setShowDatePicker(true)} className="date-button">📅</button>
        {showDatePicker && (
          <input
            type="date"
            value={deliveryDate.toISOString().split('T')[0]}
            onChange={onDateChange}
          />
        )}
      </div>

      <div className="form-row">
        <select
          value={selectedInsurance}
          className="picker"
          onChange={(e) => setSelectedInsurance(e.target.value)}
        >
          <option value="">Select Insurance Company</option>
          <option value="insurance_a">Insurance A</option>
          <option value="insurance_b">Insurance B</option>
        </select>

        <button className="add-button">+</button>
        <button
          className="add-driver-button"
          onClick={() => console.log('Add Contact / Driver Name')}
        >
          Add Contact / Driver Name
        </button>
      </div>

      <div className="payment-section">
        <h4 className="section-title">Advance Payment</h4>

        <div className="payment-row">
          {/* Cash Input */}
          <input
            type="text"
            className="payment-input wide-input"
            placeholder="Cash"
          />

          {/* Bank Picker */}
          <select className="payment-input half-input">
            <option value="">Bank Name</option>
            <option value="bank_a">Bank A</option>
            <option value="bank_b">Bank B</option>
          </select>

          {/* Cheque No Input */}
          <input
            type="text"
            className="payment-input half-input"
            placeholder="Cheque No."
          />

          {/* Amount Input */}
          <input
            type="text"
            className="payment-input half-input"
            placeholder="Amount ₹"
          />

          {/* Date Picker */}
          <input
            type="text"
            className="payment-input half-input"
            placeholder="Date"
            readOnly
            value={paymentDate.toDateString()}
          />
          <button
            className="date-button"
            onClick={() => setPaidDatePicker(true)}
          >
            📅
          </button>

          {/* Show Date Picker if clicked */}
          {showPaidDatePicker && (
            <input
              type="date"
              value={paymentDate.toISOString().split('T')[0]}
              onChange={onPaymentDateChange}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <button>Give Estimation Later</button>
        <button>Prepare Estimation Now</button>
      </div>
    </div>
  );
}

export default VehicleForm;
