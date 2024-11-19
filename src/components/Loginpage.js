import React, { useState } from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';
import amico from './Icons/amico.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset the message before the API call
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        setMessage('Login successful!');  
        console.log('API response:', data);
        navigate('/Dashboard');
      } else {
        // Handle errors if the status code is not successful
        const errorData = await response.json();
        setMessage(errorData.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setMessage(''); 
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <img src={amico} alt="Logo" className="logo" />
      </div>
      <div className="right-panel">
        <div className="login-box">
          <h2>Welcome !</h2>
          <h3>Sign in to</h3>
          <h4>KG Car Care</h4>
          <form onSubmit={handleLogin}>
            <div className="login-section">
              <label htmlFor="username">Username</label>
              <input type="text" className="user-field" id="username" placeholder="Enter your user name"
                value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="login-section">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input type={showPassword ? 'text' : 'password'} className="password-field" id="password" placeholder="Enter your password"
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="Forgotpassword" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
          </form>

          {/* Display success or error message */}
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
