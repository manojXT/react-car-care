import React, { useState } from 'react';
import './Newappointment.css';
import Calendar from './Icons BK/Calendar.png';
import Car from './Icons BK/Car.png';
import CustomerNameIcon from './Icons BK/Customer name.png';
import EmailIcon from './Icons BK/Email.png';
import MobileNumberIcon from './Icons BK/Mobile number.png';
import ServiceIcon from './Icons BK/Service.png';
import ServiceAdvisorIcon from './Icons BK/ServiceAdvisor.png';
import BayIcon from './Icons BK/Bay.png';
import TimeIcon from './Icons BK/Time.png';

const Newappointment = ({ closeModal, onAppointmentBooked }) => {
  const [formData, setFormData] = useState({
    search: '',
    date: '',
    startTime: '',
    endTime: '',
    customerType: 'Individual',
    trNumber: false,
    registrationNo: '',
    vehicle: '',
    customerName: '',
    mobileNumber: '',
    email: '',
    service: '',
    serviceAdvisor: '',
    bay: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCustomerTypeChange = (type) => {
    setFormData((prev) => ({ ...prev, customerType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.example.com/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Appointment booked successfully!');
        onAppointmentBooked(data); // Pass booked appointment to parent
      } else {
        alert('Failed to book appointment. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please check your network and try again.');
    }
  };

  return (
    <div className="new-appointment-container">
      <h2 className="form-header">New Appointment</h2>
      <form onSubmit={handleSubmit} className="new-appointment-form">
        <input type="text" name="search" placeholder="Search Using Customer Name/Corporate Name/Mobile No./Email/Reg No./VIN"
          value={formData.search} onChange={handleChange} className="search-bar"/>
        <div className="form-row date-row">
          <label className="picture-icon" htmlFor="date">
            <img src={Calendar} alt="Calendar Icon" className="icon" /> Select Date <span className="required">*</span>
          </label>
          <input type="date" id="date" name="date" value={formData.date}
            onChange={handleChange} required/>
        </div>
        <div className="form-row date-row">
          <label className="picture-icon" htmlFor="startTime">
            <img src={TimeIcon} alt="Time Icon" className="icon" /> Start Time <span className="required">*</span>
          </label>
          <input type="time" id="startTime" name="startTime" value={formData.startTime}
            onChange={handleChange} required/>
        </div>
        <div className="form-row date-row">
          <label className="picture-icon" htmlFor="endTime">
            <img src={TimeIcon} alt="Time Icon" className="icon" /> End Time <span className="required">*</span>
          </label>
          <input type="time" id="endTime" name="endTime" value={formData.endTime}
            onChange={handleChange} required/>
        </div>
        <div className="form-row toggle-buttons">
          <button type="button" className={formData.customerType === 'Individual' ? 'active' : ''}
            onClick={() => handleCustomerTypeChange('Individual')}>
            Individual
          </button>
          <button type="button" className={formData.customerType === 'Corporate' ? 'active' : ''}
            onClick={() => handleCustomerTypeChange('Corporate')}>
            Corporate
          </button>
        </div>
        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" name="trNumber" checked={formData.trNumber} onChange={handleChange}/>{' '}
            T/R Number / Other Number
          </label>
        </div>
        <div className="form-row">
          <label className="label-icon" htmlFor="registrationNo">
            <img src={Car} alt="Car Icon" className="icon" /> Registration No{' '}
            <span className="required">*</span>
          </label>
          <input type="text" id="registrationNo" name="registrationNo" placeholder="TN" value={formData.registrationNo}
            onChange={handleChange} required/>
        </div>
        <div className="form-row">
          <label className="label-icon" htmlFor="vehicle">
            <img src={Car} alt="Car Icon" className="icon" /> Vehicle{' '}
            <span className="required">*</span>
          </label>
          <input type="text" id="vehicle" name="vehicle" placeholder="Find a vehicle"
            value={formData.vehicle} onChange={handleChange} required/>
        </div>
        <div className="form-row">
          <label className="label-icon" htmlFor="customerName">
            <img src={CustomerNameIcon} alt="Customer Icon" className="icon" />{' '}
            Customer Name <span className="required">*</span>
          </label>
          <input type="text" id="customerName" name="customerName" value={formData.customerName}
            onChange={handleChange} required/>
        </div>
        <div className="form-row">
          <label className="label-icon" htmlFor="mobileNumber">
            <img src={MobileNumberIcon} alt="Mobile Icon" className="icon" />{' '}
            Mobile Number <span className="required">*</span>
          </label>
          <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="+91" value={formData.mobileNumber}
            onChange={handleChange} pattern="[0-9]{10}" required/>
        </div>
        <div className="form-row">
          <label className="label-icon" htmlFor="email">
            <img src={EmailIcon} alt="Email Icon" className="icon" /> Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div className="form-row">
          <label className="label-icon" htmlFor="service">
            <img src={ServiceIcon} alt="Service Icon" className="icon" /> Service
          </label>
          <input type="text" id="service" name="service" value={formData.service} onChange={handleChange}/>
        </div>
        <div className="form-row">
          <label className="label-icon" htmlFor="serviceAdvisor">
            <img src={ServiceAdvisorIcon} alt="Service Advisor Icon" className="icon" /> Service Advisor
          </label>
          <input type="text" id="serviceAdvisor" name="serviceAdvisor" placeholder="Choose a service advisor"
            value={formData.serviceAdvisor} onChange={handleChange}/>
        </div>
        <div className="form-row">
          <label className="label-icon" htmlFor="bay">
            <img src={BayIcon} alt="Bay Icon" className="icon" /> Bay
          </label>
          <input type="text" id="bay" name="bay" value={formData.bay} onChange={handleChange}/>
        </div>
        <div className="form-row">
          <button type="submit" className="book-button">Book</button>
        </div>
      </form>
    </div>
  );
};

export default Newappointment;
