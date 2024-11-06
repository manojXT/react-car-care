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
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Branch</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="">Select Branch</option>
              <option value="Main">Main</option>
              <option value="Branch 1">Branch 1</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Profile Image</label>
            <input type="file" name="image" onChange={handleChange} />
            {formData.image && (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Employee"
                className="image-preview"
              />
            )}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              {Object.keys(countryStateCityData).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-buttons">
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addemployee;
