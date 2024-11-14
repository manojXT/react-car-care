import React, { useState } from 'react';
import './NewInvoice.css';

const NewInvoice = () => {

    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const invoiceData = {
            invoiceNumber,
            customerName,
            mobileNumber,
            serviceDescription,
            amount,
            paymentMethod,
            paymentDate,
            dueDate,
            notes,
        };

        console.log('Invoice Submitted:', invoiceData);
        // Here you would typically send the data to your backend API
    };

    return (
        <div className="new-invoice-container">
            <p className='title'>New Invoice</p>
            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="invoiceNumber">Invoice Number *</label>
                        <input 
                            type="text" 
                            id="invoiceNumber" 
                            placeholder="Invoice Number *" 
                            value={invoiceNumber}
                            onChange={(e) => setInvoiceNumber(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerName">Customer Name *</label>
                        <input 
                            type="text" 
                            id="customerName" 
                            placeholder="Customer Name *" 
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number *</label>
                        <input 
                            type="text" 
                            id="mobileNumber" 
                            placeholder="Mobile Number *" 
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceDescription">Service Description *</label>
                        <input type="text" id="serviceDescription" placeholder="Service Description *" value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount (₹) *</label>
                        <input type="number" id="amount" placeholder="Amount (₹) *" value={amount} 
                        onChange={(e) => setAmount(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Payment Method *</label>
                        <select 
                            id="paymentMethod" 
                            value={paymentMethod} 
                            onChange={(e) => setPaymentMethod(e.target.value)} 
                            required
                        >
                            <option value="">Select Payment Method *</option>
                            <option value="cash">Cash</option>
                            <option value="credit_card">Credit Card</option>
                            <option value="debit_card">Debit Card</option>
                            <option value="bank_transfer">Bank Transfer</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentDate">Payment Date *</label>
                        <input 
                            type="date" 
                            id="paymentDate" 
                            value={paymentDate}
                            onChange={(e) => setPaymentDate(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date *</label>
                        <input 
                            type="date" 
                            id="dueDate" 
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="notes">Notes / Additional Information</label>
                        <textarea 
                            id="notes" 
                            placeholder="Notes / Additional Information" 
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="submit-button">Submit Invoice</button>
            </form>
        </div>
    );
};

export default NewInvoice;
