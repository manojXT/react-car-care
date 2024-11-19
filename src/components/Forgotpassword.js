import React, { useState } from 'react';
import './Forgotpassword.css';

const ForgotPasswordWithOTP = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleMobileSubmit = async (e) => {
    e.preventDefault();

    // Validate mobile number
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'OTP has been sent to your mobile number.');
        setStep(2);
        setError('');
      } else {
        setError(data.error || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile, otp, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Your password has been reset successfully!');
        setError('');
        setStep(3); // Move to completed step
      } else {
        setError(data.error || 'Invalid OTP or failed to reset password.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      
      {step === 1 && (
        <form onSubmit={handleMobileSubmit} className="forgot-password-form">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            required
          />
          <button type="submit" className="Reset-button">Send OTP</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOTPSubmit} className="forgot-password-form">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />

          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />

          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
          />

          <button type="submit" className="Reset-button">Reset Password</button>
        </form>
      )}

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ForgotPasswordWithOTP;
