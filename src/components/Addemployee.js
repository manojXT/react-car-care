import React, { useState } from 'react';
import axios from 'axios';
import './Addemployee.css';

const countryStateCityData = {
  India: {
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  },
  USA: {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    NewYork: ["New York City", "Buffalo", "Rochester"],
  },
};

const Addemployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    mobileNo: '',
    email: '',
    image: null,
    country: '',
    state: '',
    city: '',
    address: '',
    branch: '',
    employeeId: '',
    designation: '',
    userid: '',
  });

  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else if (name === 'country') {
      const states = Object.keys(countryStateCityData[value] || {});
      setFormData({ ...formData, country: value, state: '', city: '' });
      setStateOptions(states);
      setCityOptions([]);
    } else if (name === 'state') {
      const cities = countryStateCityData[formData.country][value] || [];
      setFormData({ ...formData, state: value, city: '' });
      setCityOptions(cities);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/employee', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Employee added successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to add employee. Please try again.');
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      password: '',
      confirmPassword: '',
      mobileNo: '',
      email: '',
      image: null,
      country: '',
      state: '',
      city: '',
      address: '',
      branch: '',
      employeeId: '',
      designation: '',
      userid: '',
    });
    setStateOptions([]);
    setCityOptions([]);
  };

  return (
    <div className="add-employee-container">
      <h2 className="form-header">ADD EMPLOYEE</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name </label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name </label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
          </div>
        </div>
        {/* The rest of your form fields go here */}

        <div className="form-buttons">
          <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Addemployee;
