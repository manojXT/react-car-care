import React, { useState } from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';

export default function Loginpage() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: { required: false },
    password: { required: false },
    custom_error: null,
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [event.target.name]: { required: false }, custom_error: null }));
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();

    let newErrors = { username: { required: false }, password: { required: false }, custom_error: null };
    let hasErrors = false;

    // Basic form validation
    if (inputs.username === '') {
      newErrors.username.required = true;
      hasErrors = true;
    }
    if (inputs.password === '') {
      newErrors.password.required = true;
      hasErrors = true;
    }

    if (!hasErrors) {
      setLoading(true);
      // Sending JSON request to backend
      fetch('http://172.19.0.3:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: inputs.username,
          password: inputs.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);  // Stop loading
          if (data.message === 'Login successful!') {
            setMessage('Login successful!');  // Set success message
            navigate('/Jobcard');  // Redirect to "Inward" page upon successful login
          } else {
            setErrors({ ...newErrors, custom_error: data.error });
          }
        })
        .catch((error) => {
          setLoading(false);  // Stop loading
          setErrors({ ...newErrors, custom_error: 'Error: ' + error.message });
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="login-block">
      <div className="row">
        <div className="image col">
          <img
            src="https://via.placeholder.com/500"
            alt="Login Illustration"
            className="image-side"
          />
        </div>
        <div className="col login-sec">
          <form onSubmit={handleLogin} className="login-form">
            <h2 className="text-center">LOGIN NOW</h2>

            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username" className="text-uppercase"> Username or Phone Number </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={inputs.username}
                onChange={handleInputChange}
                placeholder="Enter your username or phone number"
              />
              {errors.username.required && (
                <span className="text-danger">Username or phone number is required.</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="text-uppercase"> Password </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={inputs.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                maxLength={8}
              />
              {errors.password.required && (
                <span className="text-danger">Password is required.</span>
              )}
            </div>

            {/* Error or Loading Indicator */}
            <div className="form-group">
              {loading && (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {errors.custom_error && (
                <span className="text-danger">{errors.custom_error}</span>
              )}
            </div>

            <p className="forgot-password">
              <a href="/">Forgot Password?</a>
            </p>

            {/* Submit Button */}
            <button type="submit" disabled={loading}>
              Login
            </button>

            {/* Success or Error Message */}
            {message && <p className="text-success">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
