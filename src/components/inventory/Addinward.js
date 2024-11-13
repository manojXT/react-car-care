import React, { useState } from 'react';
import './AddInventory.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const Addinward = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        date: getTodayDate(),
        deliveryReceipt: '',
        billNo: '',
        billDate: '', 
        vendor: '',
        taxType: 'GST',
    });

    const [parts, setParts] = useState([]);
    const [newPart, setNewPart] = useState({
        partName: '',
        qty: '',
        partPrice: '',
        price: '',
        serviceOrLabour: '',
        discount: 0,
    });

    const [partSuggestions, setPartSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePartChange = (e) => {
        const { name, value } = e.target;
        setNewPart({ ...newPart, [name]: value });
    };

    const addPart = () => {
        if (!newPart.partName || !newPart.qty || !newPart.partPrice) {
            alert("Please fill in all required fields for the part.");
            return;
        }
        setParts([...parts, { 
            ...newPart, 
            qty: parseFloat(newPart.qty), 
            partPrice: parseFloat(newPart.partPrice), 
            discount: parseFloat(newPart.discount) 
        }]);
        setNewPart({ partName: '', qty: '', partPrice: '', price: '', serviceOrLabour: '', discount: 0 });
    };

    const calculateTotals = () => {
        const totalPurchasePrice = parts.reduce((acc, part) => acc + (part.partPrice * part.qty), 0);
        const totalDiscount = parts.reduce((acc, part) => acc + part.discount, 0);
        const grandTotal = totalPurchasePrice - totalDiscount;
        return { totalPurchasePrice, totalDiscount, grandTotal };
    };

    const { totalPurchasePrice, totalDiscount, grandTotal } = calculateTotals();

    // Fetch part suggestions when partName changes
    const searchPart = async (partName) => {
        try {
            const response = await axios.get(`/api/parts/search?name=${partName}`);
            setPartSuggestions(response.data); // Assume the API returns an array of parts
        } catch (error) {
            console.error("Error fetching parts:", error);
            setPartSuggestions([]);
        }
    };

    const selectPart = (part) => {
        setNewPart({
            partName: part.name,
            qty: 1,
            partPrice: part.price,
            price: '',
            serviceOrLabour: '',
            discount: 0,
        });
        setPartSuggestions([]); // Hide suggestions after selection
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const dataToSubmit = {
            formData,
            parts,
        };
        try {
            const response = await axios.post('/api/inward', dataToSubmit);
            console.log("Inward submitted successfully:", response.data);
            // Handle successful submission (e.g., navigate to another page)
            navigate('/success'); // Example of redirection
        } catch (error) {
            console.error("Error submitting inward data:", error);
        }
    };

    return (
        <div>
            <p className="title">Add Inward</p>
            <form onSubmit={handleFormSubmit}>
                <div className="header-section">
                    <div className="form-row">
                        <label>Vendor: </label>
                        <input type="text" name="vendor" placeholder="Vendor" value={formData.vendor} onChange={handleInputChange} className="input-field" />
                        <button className="add-button" onClick={() => navigate('/vendor')}>+</button>
                        <label>Date: </label>
                        <input type="date" name="Date" value={formData.date} onChange={handleInputChange} className="input-field" />
                    </div>
                </div>

                <div className="new-add-section">
                    <input type="text" placeholder="Delivery Receipt" name="deliveryReceipt" value={formData.deliveryReceipt}
                        onChange={handleInputChange} className="input-field" />
                    <input type="text" placeholder="Bill No." name="billNo" value={formData.billNo}
                        onChange={handleInputChange} className="input-field" />

                    <label className="date-label">
                        Bill Date<span className="required">*</span>
                    </label>
                    <div className="date-input-wrapper">
                        <input type="date" name="billDate" value={formData.billDate} onChange={handleInputChange} className="date-input" />
                    </div>

                    <label>Tax Type: </label>
                    <select name="taxType" value={formData.taxType} onChange={handleInputChange} className="input-select">
                        <option value="GST">GST</option>
                        <option value="VAT">VAT</option>
                        <option value="None">None</option>
                    </select>

                    <div className="searchRow">
                        <input type="text" placeholder="Part Name" name="partName" value={newPart.partName}
                            onChange={handlePartChange} onBlur={() => searchPart(newPart.partName)} className="input-field" />
                        <input type="number" placeholder="Qty" name="qty" value={newPart.qty}
                            onChange={handlePartChange} className="input-field" />
                        <input type="number" placeholder="Part Price" name="partPrice" value={newPart.partPrice}
                            onChange={handlePartChange} className="input-field" />
                        <select name="price" value={newPart.price} onChange={handlePartChange} className="input-select">
                            <option value="">Price</option>
                            <option value="mrp">MRP</option>
                        </select>
                        <input type="text" placeholder="Service / Labour" name="serviceOrLabour" value={newPart.serviceOrLabour}
                            onChange={handlePartChange} className="input-field" />
                        <button className="add-button" onClick={addPart}>+</button>
                    </div>

                    {partSuggestions.length > 0 && (
                        <div className="part-suggestions">
                            {partSuggestions.map((part) => (
                                <div key={part.id} onClick={() => selectPart(part)} className="part-suggestion-item">
                                    {part.name} - ₹{part.price}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="table-container">
                    <table className="purchase-summary-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>#</th>
                                <th>Part Name</th>
                                <th>Part No.</th>
                                <th>Brand</th>
                                <th>Requested Qty</th>
                                <th>Size / Qty</th>
                                <th>Rack No.</th>
                                <th>Inward Qty / Unit Price ₹</th>
                                <th>Discount ₹</th>
                                <th>HSN / Tax %</th>
                                <th>Total Purchase Price ₹</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parts.map((part, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>{index + 1}</td>
                                    <td>{part.partName}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>{part.qty}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>{part.partPrice}</td>
                                    <td>{part.discount}</td>
                                    <td>0.00</td>
                                    <td>{(part.partPrice * part.qty) - part.discount}</td>
                                    <td>-</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="9" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total</td>
                                <td style={{ fontWeight: 'bold' }}>{totalDiscount}</td>
                                <td style={{ fontWeight: 'bold' }}>{totalPurchasePrice}</td>
                            </tr>
                            <tr>
                                <td colSpan="9" style={{ textAlign: 'right' }}>Freight / Delivery / Other</td>
                                <td>0</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan="9" style={{ textAlign: 'right' }}>TCS</td>
                                <td>0</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan="9" style={{ textAlign: 'right', fontWeight: 'bold' }}>Grand Total</td>
                                <td></td>
                                <td>{grandTotal}</td>
                            </tr>
                            <tr>
                                <td colSpan="9" style={{ textAlign: 'right' }}>Paid (-)</td>
                                <td>0</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan="9" style={{ textAlign: 'right', fontWeight: 'bold' }}>Balance</td>
                                <td></td>
                                <td>{grandTotal}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Addinward;
