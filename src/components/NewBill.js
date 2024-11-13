import React, { useState } from 'react';
import './NewBill.css'; // Make sure to create this CSS file for styles
import { useNavigate } from 'react-router-dom';

const NewBill = () => {
    const navigate = useNavigate();

    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [concerns, setConcerns] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const billData = {
            customerName,
            mobileNumber,
            serviceDescription,
            amount,
            paymentMethod,
            paymentDate,
            deliveryDate,
            concerns,
        };

        console.log('Bill Submitted:', billData);
        // Here you would typically send the data to your backend API
    };

    return (
        <div className="new-bill-container">
            <p className='title'>New Bill</p>
            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="customerName">Customer Name </label>
                        <input type="text" id="customerName" placeholder="Customer Name *" value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number </label>
                        <input type="text" id="mobileNumber" placeholder="Mobile Number *" value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceDescription">Service Description </label>
                        <input type="text" id="serviceDescription" placeholder="Service Description *" value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount (₹) </label>
                        <input type="number" id="amount" placeholder="Amount (₹) *" value={amount} 
                        onChange={(e) => setAmount(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Payment Method *</label>
                        <select id="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                            <option value="">Select Payment Method *</option>
                            <option value="cash">Cash</option>
                            <option value="credit_card">Credit Card</option>
                            <option value="debit_card">Debit Card</option>
                            <option value="bank_transfer">Bank Transfer</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentDate">Payment Date *</label>
                        <input type="date" id="paymentDate" placeholder="Payment Date *" value={paymentDate}
                        onChange={(e) => setPaymentDate(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deliveryDate">Delivery Date *</label>
                        <input type="date" id="deliveryDate" placeholder="Delivery Date *" value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)} required/>
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="concerns">Concerns / Additional Notes</label>
                        <textarea id="concerns" placeholder="Concerns / Additional Notes" value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="submit-button">Submit Bill</button>
            </form>
            <div className="footer">
                <button className="footerButton" onClick={() => navigate('/home')}>Back to Home</button>
            </div>
        </div>
    );
};

export default NewBill;
