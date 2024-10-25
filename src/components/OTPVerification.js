import React, { useState } from "react";
import './OTPVerification.css';

function OTPVerification() {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        // Allow only numeric input
        if (isNaN(element.value)) return;

        // Update OTP state
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Automatically move to the next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        
        // Ensure the OTP is fully entered before submission
        if (enteredOtp.length < 6 || enteredOtp.includes("")) {
            alert("Please enter all 6 digits of the OTP");
        } else {
            alert(`Entered OTP is ${enteredOtp}`);
        }
    };

    return (
        <div className="otp-container">
            <form onSubmit={handleSubmit} className="otp-form">
                <h2>OTP Verification</h2>
                <p>Enter OTP Code sent to +88017******42</p>

                <div className="otp-inputs">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-input"
                                type="text"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()} // Automatically select the value on focus
                            />
                        );
                    })}
                </div>

                <div className="resend-container">
                    <p>Didn’t receive OTP code?</p>
                    <a href="/resend" className="resend-link">
                        Resend Code
                    </a>
                </div>

                <button type="submit" className="verify-button">
                    Verify & Proceed
                </button>
            </form>
        </div>
    );
}

export default OTPVerification;
