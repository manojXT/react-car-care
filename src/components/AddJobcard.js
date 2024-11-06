import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios'; 
import './AddJobcard.css';
import { useNavigate } from 'react-router-dom';

function AddJobcard() {
  const navigation = useNavigate();
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
  const [deliveryDate, setDeliveryDate] = useState(new Date().toISOString().split('T')[0]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [showPaidDatePicker, setPaidDatePicker] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [serviceInput, setServiceInput] = useState('');
  const [serviceDetails, setServiceDetails] = useState([]);
  const [vehicles, setVehicles] = useState([]); // For fetching vehicles

  const colors = [
    // Color options
  ];

  const fuelOptions = [
    // Fuel options
  ];

  // Fetch vehicle details from API
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('/api/vehicles'); // Replace with your API endpoint
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleAddService = async () => {
    if (serviceInput.trim()) {
      try {
        // API call to add service
        await axios.post('/api/services', { service: serviceInput }); // Replace with your API endpoint
        setServiceDetails([...serviceDetails, serviceInput]);
        setServiceInput(''); 
      } catch (error) {
        console.error('Error adding service:', error);
      }
    }
  };

  const handleSubmitCustomerDetails = async () => {
    try {
      const response = await axios.post('/api/customers', {
        name: mobileNumber,
        altMobile: altMobileNumber,
        // Add more fields as necessary
      }); // Replace with your API endpoint

      console.log('Customer details submitted:', response.data);
      navigation('/'); 
    } catch (error) {
      console.error('Error submitting customer details:', error);
    }
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/payments', {
        amount: paymentDate, 
        paymentMethod: 'Cash', 
        // Add more fields as necessary
      }); // Replace with your API endpoint

      console.log('Payment processed:', response.data);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="search-row">
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <span>T/R Number / Other Number</span>
        <FaSearch className="search-icon" />
        <input className="search-input" type="text" placeholder="Search Using Registration No. / Customer Name / Mobile No. / Email / Corporate Name / Vehicle / VIN" />
      </div>

      <div className="vehicle-form-container">
        {/* Vehicle Details Form */}
        <div className="form">
          {/* First Row */}
          <div className="form-row">
            <input type="text" className="input" placeholder="Registration No." />
            <input type="text" className="input" placeholder="Odometer In" />
            <input type="text" className="input" placeholder="Avg KMS / Day" />
            <input type="text" className="input" placeholder="VIN" />
            <input type="text" className="input" placeholder="Engine No." />
          </div>

          {/* Second Row */}
          <div className="form-row">
            <input type="text" className="input" placeholder="Find Vehicle" />
            <input type="text" className="input" placeholder="Make" />
            <input type="text" className="input" placeholder="Model" />
            <input type="number" className="input" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} min="1900" max={new Date().getFullYear()} />
            <input type="text" className="input" placeholder="Variant" />
          </div>

          <div className="color-form-container">
            {/* Vehicle Colour Selection */}
            <span>Vehicle Colour</span>
            <div className="color-box" style={{ backgroundColor: selectedColor || '#ffffff' }} onClick={() => setIsModalVisible(true)} />
            {isModalVisible && (
              <div className="modal">
                <div className="modal-content">
                  <h4>Select Vehicle Colour</h4>
                  <div className="color-grid">
                    {colors.map((color) => (
                      <div key={color.value} className={`color-button ${selectedColor === color.value ? 'selected' : ''}`}
                        style={{ backgroundColor: color.backgroundColor }} onClick={() => {setSelectedColor(color.value); setIsModalVisible(false);}}/>
                    ))}
                  </div>
                  <button onClick={() => setIsModalVisible(false)}>Close</button>
                </div>
              </div>
            )}

            {/* Fuel Type Dropdown */}
            <span>Select Fuel Type</span>
            <div className="fuel-picker-wrapper">
              <div className="dropdown-box" onClick={() => setDropdownVisible(true)}>
                {fuelType ? fuelOptions.find((option) => option.value === fuelType)?.label : 'Select'}
              </div>
              {isDropdownVisible && (
                <div className="modal">
                  <div className="modal-content">
                    <h4>Select Fuel Type</h4>
                    <div className="dropdown-items">
                      {fuelOptions.map((option) => (
                        <div key={option.value} className="dropdown-item"
                          onClick={() => { setFuelType(option.value); setDropdownVisible(false); }}>
                          {option.label}
                        </div>))}
                    </div>
                    <button onClick={() => setDropdownVisible(false)}>Close</button>
                  </div>
                </div>
              )}
            </div>

            {/* Service Type and Advisor */}
            <select className="input" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
              <option value="">Service Type</option>
              <option value="general">General Service</option>
              <option value="oil_change">Oil Change</option>
            </select>

            <select className="input" value={serviceAdvisor} onChange={(e) => setServiceAdvisor(e.target.value)}>
              <option value="">Service Advisor</option>
              <option value="advisor_a">Advisor A</option>
              <option value="advisor_b">Advisor B</option>
            </select>
          </div>
        </div>
      </div>

      <div className="Service-container">
        <div className="customer-section">
          {/* Customer Concerns */}
          <textarea className="input" placeholder="Enter Customer Concerns / Complaints (e.g. A/C not working)"
            rows={1} value={serviceInput} onChange={(e) => setServiceInput(e.target.value)} />
          <button className="add-service-button" onClick={handleAddService}>Add Service</button>
          {/* Display added services below input field */}
          <div className="service-details-list">
            {serviceDetails.map((detail, index) => (
              <div key={index} className="service-detail-item">
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Customer-container">
        {/* Customer Details Section */}
        <div className="form-row">
          <input type="text" className="input" placeholder="Customer Name" />
          <button className="add-button">+</button>
          <input type="text" className="input" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </div>

        <div className="form-row">
          <input className="input half-input" placeholder="Alternative Mobile No." value={altMobileNumber} onChange={(e) => setAltMobileNumber(e.target.value)} />
          <input className="input half-input" placeholder="Email ID" />
        </div>

        <div className="form-row">
          <input className="input half-input" placeholder="Est. Delivery Date *" readOnly value={deliveryDate} />
          <button onClick={() => setShowDatePicker(true)} className="date-button">📅</button>
          {showDatePicker && (
            <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />)}
        </div>

        <div className="form-row">
          <select value={selectedInsurance} className="picker" onChange={(e) => setSelectedInsurance(e.target.value)}>
            <option value="">Select Insurance Company</option>
            <option value="insurance_a">Insurance A</option>
            <option value="insurance_b">Insurance B</option>
          </select>
          <button className="add-button">+</button>
          <button className="add-driver-button" onClick={() => console.log('Add Contact / Driver Name')}>Add Contact / Driver Name</button>
        </div>
      </div>

      <div className="payment-section-container">
        <h4 className="section-title">Advance Payment</h4>
        <div className="payment-row">
          {/* Cash Input */}
          <input type="text" className="payment-input wide-input" placeholder="Cash" />

          {/* Bank Picker */}
          <select className="payment-input half-input">
            <option value="">Bank Name</option>
            <option value="bank_a">Bank A</option>
            <option value="bank_b">Bank B</option>
          </select>

          {/* Cheque No Input */}
          <input type="text" className="payment-input half-input" placeholder="Cheque No." />

          {/* Amount Input */}
          <input type="text" className="payment-input half-input" placeholder="Amount ₹" />

          {/* Date Picker */}
          <input type="text" className="payment-input half-input" placeholder="Date" readOnly value={paymentDate} />
          <button className="date-button" onClick={() => setPaidDatePicker(true)}>📅</button>

          {/* Show Date Picker if clicked */}
          {showPaidDatePicker && (
            <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />)}

          {/* Payment Process Button */}
          <button onClick={handlePayment} className="payment-button">Process Payment</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <button >Give Estimation Later</button>
        <button onClick={() => navigation('/estimation')}>Prepare Estimation Now</button>
      </div>
    </div>
  );
}

export default AddJobcard;
