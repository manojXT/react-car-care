import React, { useState } from 'react';
import './AddJobcard.css';

const AddJobCard = () => {

  const [checked, setChecked] = useState(false);
  const [vehicleColor, setVehicleColor] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [serviceAdvisor, setServiceAdvisor] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [altMobileNumber, setAltMobileNumber] = useState('');
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const [concerns, setConcerns] = useState('');
  const [complaints, setComplaints] = useState([
    'BRAKES ARE NOT WORKING',
    'PMS',
    'GENERAL SERVICE',
    'OIL FILTER CHANGE',
    'ENGINE NOISE'
  ]);
  const [activeComplaints, setActiveComplaints] = useState([]);

  // Function to add a new complaint
  const handleAddComplaint = () => {
    if (concerns.trim()) {
      setComplaints([...complaints, concerns.trim()]);
      setConcerns(''); // Clear input after adding
    }
  };

  // Function to handle multiple button activation
  const handleComplaintClick = (complaint) => {
    setActiveComplaints((prevActiveComplaints) =>
      prevActiveComplaints.includes(complaint)
        ? prevActiveComplaints.filter((c) => c !== complaint)
        : [...prevActiveComplaints, complaint]
    );
  };

  //Date function for Delivery and Payment
  const handleDateChange = (e) => {
    setDeliveryDate(e.target.value);
  };

  const handlePaymentDateChange = (e) => {
    setPaymentDate(e.target.value);
  };

  return (
    <div className="mainContent">
      <p className='title'>Add Job Card</p>
      <div className="searchRow">
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
          <label>T/R Number / Other Number</label>
          <input type="text" placeholder="Search Using Registration No., Customer Name, etc." />
        </div>

        <div className="form">
          <div className="form-row">
            <input type="text" name='registration_no' placeholder="Registration No." />
            <input type="text" name='odometer_no' placeholder="Odometer In" />
            <input type="text" name='average_kms' placeholder="Avg KMS / Day" />


            <input type="text" name='vin' placeholder="VIN" />
            <input type="text" name='engine_no' placeholder="Engine No." />

            <input type="text" name='make' placeholder="Make" />
            <input type="text" name='model' placeholder="Model" />
            <input type="text" name='year' placeholder="Year" />
            <input type="text" name='variant' placeholder="Variant" />

            <div className="pickerWrapper">
              <select onChange={(e) => setVehicleColor(e.target.value)} value={vehicleColor} className="dropdownSelect">
                <option value="">Select Vehicle Color Type</option>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
              </select>
            </div>

            <div className="pickerWrapper">
              <select onChange={(e) => setFuelType(e.target.value)} value={fuelType} className="dropdownSelect">
                <option value="">Select Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="EV">Electric</option>
                <option value="LPG">LPG</option>
              </select>
            </div>

            <div className="pickerWrapper">
              <select onChange={(e) => setServiceType(e.target.value)} value={serviceType} className="dropdownSelect">
                <option value="">Service Type</option>
                <option value="general">General Service</option>
                <option value="oil_change">Oil Change</option>
              </select>
            </div>

            <div className="pickerWrapper">
              <select onChange={(e) => setServiceAdvisor(e.target.value)} value={serviceAdvisor} className="dropdownSelect">
                <option value="">Service Advisor</option>
                <option value="advisor_a">Advisor A</option>
                <option value="advisor_b">Advisor B</option>
              </select>
            </div>

            <input type="text" name='technician' placeholder="Technician" className="technicianInput" />
          </div>
    

        <div className="concernsSection">
          <textarea placeholder="Enter Customer Concerns / Complaints (e.g. A/C not working)" value={concerns}
          onChange={(e) => setConcerns(e.target.value)} className="concernsTextarea"/>
          <button className="addServiceButton" onClick={handleAddComplaint}> Add Service </button>

          <div className="complaintsContainer">
            {complaints.map((complaint, index) => (
              <button key={index} className={`complaintButton ${activeComplaints.includes(complaint) ? 'active' : ''}`}
              onClick={() => handleComplaintClick(complaint)} >{complaint}
              </button>
            ))}
          </div>
        </div>

        <div className="customerDetailsSection">
          <div className="detailsRow">
            {/* <input type="text" name='corporate' placeholder="Select Corporate / Fleet" className="detailsInput" />
            <button className="addButton">+</button> */}
            <input type="text" name='cust_name' placeholder="Customer Name *" className="detailsInput" />
            <button className="addButton">+</button>
            <input type="text" name='mobile_no' placeholder="Mobile Number (Preferably WhatsApp number) *" value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)} className="detailsInput"/>
          </div>

          <div className="detailsRow">
            <input type="text" name='alt_mobile_no' placeholder="Alternative Mobile No." value={altMobileNumber}
            onChange={(e) => setAltMobileNumber(e.target.value)} className="detailsInput"/>
            <input type="email" name='email' placeholder="Email ID" className="detailsInput" />
            <input type="date" name='delivery_date' placeholder="Est. Delivery Date *" value={deliveryDate} onChange={handleDateChange} className="detailsInput"/>
          </div>

          <div className="detailsRow">
            <select value={selectedInsurance} onChange={(e) => setSelectedInsurance(e.target.value)} className="detailsInput">
              <option value="">Select Insurance Company</option>
              <option value="insurance_a">Insurance A</option>
              <option value="insurance_b">Insurance B</option>
            </select>
            <button className="addButton">+</button>
            <button className="addContactButton" onClick={() => console.log('Add Contact / Driver Name')}>Add Contact / Driver Name</button>
          </div>
        </div>

        <div className="paymentSection">
          <h4>Advance Payment</h4>
          <div className="paymentRow">
            <input type="text" placeholder="Cash" className="paymentInput" />
            <select className="paymentInput">
              <option value="">Bank Name</option>
              <option value="bank_a">Bank A</option>
              <option value="bank_b">Bank B</option>
            </select>
            <input type="text" placeholder="Cheque No." className="paymentInput" />
            <input type="text" placeholder="Amount ₹" className="paymentInput" />
            <input type="date" value={paymentDate} onChange={handlePaymentDateChange} className="paymentInput" />
          </div>
        </div>
        </div>
      </div>
  );
};

export default AddJobCard;
