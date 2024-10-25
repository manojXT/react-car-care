import React, { useState } from 'react';
import './Trail.css';

const ServiceForm = () => {
  const [customerConcern, setCustomerConcern] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [insurance, setInsurance] = useState('');

  const handleServiceClick = () => {
    alert('Service Added!');
  };

  return (
    <div className="form-container">
      <h2>Select Service</h2>
      <div className="form-row">
        <select>
          <option>Select</option>
        </select>
      </div>

      <div className="form-row">
        <textarea
          placeholder="Enter Customer Concerns / Complaints (e.g. A/C not working)"
          value={customerConcern}
          onChange={(e) => setCustomerConcern(e.target.value)}
        />
        <button className="add-service-btn" onClick={handleServiceClick}>
          Add Service
        </button>
      </div>

      <div className="form-row">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="+91"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-row">
        <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
      </div>

      <div className="form-row">
        <select
          value={insurance}
          onChange={(e) => setInsurance(e.target.value)}
        >
          <option>Select Insurance Company</option>
          {/* Add more options here */}
        </select>
      </div>

      <h3>Advance Payment</h3>
      <div className="form-row">
        <input type="text" placeholder="Cash" />
        <select>
          <option>Bank Name</option>
          {/* Add more options */}
        </select>
        <input type="text" placeholder="Cheque No." />
        <input type="number" placeholder="Amount ₹" />
        <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
      </div>
    </div>
  );
};

export default ServiceForm;
