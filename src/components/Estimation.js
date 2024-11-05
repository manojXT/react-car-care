import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FaPrint, FaSave, FaEnvelope, FaUpload, FaSearch, FaPlus } from 'react-icons/fa';
import './Estimation.css';

const Estimation = () => {
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    
    const [partName, setPartName] = useState('');
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    
    const [partsList, setPartsList] = useState([]);
    
    const fileInputRef = useRef(null);

    // Calculate the total discount amount
    const discountAmount = discount;

    // Calculate the total tax amount
    const taxAmount = (total - discountAmount) * (tax / 100);

    // Function to calculate grand total
    const grandTotal = total - discountAmount + taxAmount;

    // Function to handle adding a new part
    const addPart = () => {
        if (partName && qty > 0 && price > 0) {
            const newPart = {
                partName,
                qty,
                price,
                total: qty * price, 
                approval: "No" // Default approval to "No"
            };
            setPartsList([...partsList, newPart]);
            setTotal(prevTotal => prevTotal + newPart.total);
            setPartName('');
            setQty(0);
            setPrice(0);
        }
    };

    const handleApprovalChange = (index, newApproval) => {
        setPartsList(prevPartsList =>
            prevPartsList.map((part, i) =>
                i === index ? { ...part, approval: newApproval } : part
            )
        );
    };

    const handlePrint = () => {
        window.print();
    };

    const handleSave = async () => {
        const estimationData = {
            parts: partsList,
            discount,
            tax,
            total: grandTotal,
        };
        try {
            await axios.post('/api/estimations', estimationData);
            alert("Estimation saved!");
        } catch (error) {
            console.error("There was an error saving the estimation!", error);
            alert("Error saving estimation. Please try again.");
        }
    };

    const handleEmail = () => {
        const subject = "Estimation Details";
        const body = "Please find the estimation details attached.";
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert(`Image uploaded: ${response.data.filePath}`);
            } catch (error) {
                console.error("There was an error uploading the image!", error);
                alert("Error uploading image. Please try again.");
            }
        }
    };

    const handleCancel = () => {
        setPartName('');
        setQty(0);
        setPrice(0);
        setPartsList([]);
        setTotal(0);
        setDiscount(0);
        setTax(0);
    };

    return (
        <>
            <p className='title'>New Estimation</p>
            <div className="search-bar">
                <div className="input-group">
                    <span className="icon"><FaSearch /></span>
                    <input type="text" placeholder="Part Name / Part Number"
                        className="search-input" value={partName} onChange={(e) => setPartName(e.target.value)}/>
                </div>
                <select className="filter-select">
                    <option>IN WORKSHOP</option>
                    {/* Add other options if needed */}
                </select>
                <input type="number" placeholder="Qty" className="qty-input" value={qty} onChange={(e) => setQty(Number(e.target.value))} />
                <input type="text" placeholder="Part Price" className="price-input"
                    value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
                <select className="price-select">
                    <option value="MRP">MRP</option>
                    <option value="price">Price</option>
                </select>
                <input type="text" placeholder="Service Type/Rate" className="service-input" />
                <button className="add-button" onClick={addPart}>
                    <FaPlus />
                </button>
            </div>

            <div className="estimation-container">
                <table className="estimation-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Part Name</th>
                            <th>Part / Labour</th>
                            <th>Part No.</th>
                            <th>Unit / Rate</th>
                            <th>Discount</th>
                            <th>Tax %</th>
                            <th>Tax ₹</th>
                            <th>Total ₹</th>
                            <th>Approval</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partsList.map((part, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{part.partName}</td>
                                <td>Labour</td>
                                <td>Part No.</td>
                                <td>{part.price.toFixed(2)}</td>
                                <td>{discount.toFixed(2)}</td>
                                <td>{tax.toFixed(2)}</td>
                                <td>{part.total.toFixed(2)}</td>
                                <td>
                                    <select
                                        value={part.approval}
                                        onChange={(e) => handleApprovalChange(index, e.target.value)} >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </td>
                                <td>Reason</td>
                            </tr>
                        ))}
                        <tr className="apply-discount">
                            <td colSpan="5">Apply Discount</td>
                            <td>
                                <input type="number" placeholder="0" className="discount-input"
                                    value={discount} onChange={(e) => setDiscount(Number(e.target.value))} />
                                <select className="discount-select">
                                    <option value="₹">₹</option>
                                    <option value="%">%</option>
                                </select>
                            </td>
                            <td colSpan="6"></td>
                        </tr>
                        <tr>
                            <td colSpan="10" className="right-align">Discount</td>
                            <td colSpan="2" className="right-align">{discountAmount.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="10" className="right-align">Tax</td>
                            <td colSpan="2" className="right-align">{taxAmount.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="10" className="right-align">Total</td>
                            <td colSpan="2" className="right-align">{total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="10" className="right-align">Grand Total</td>
                            <td colSpan="2" className="right-align">{grandTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="footer-buttons">
                <button className="footer-button" onClick={handlePrint}>
                    <FaPrint /> Print
                </button>
                <button className="footer-button" onClick={handleSave}>
                    <FaSave /> Save
                </button>
                <button className="footer-button" onClick={handleEmail}>
                    <FaEnvelope /> Email
                </button>
                <button className="footer-button" onClick={handleUpload}>
                    <FaUpload /> Upload Image
                </button>
                <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                <button className="footer-button cancel-button" onClick={handleCancel}>Cancel Job Card</button>
            </div>
        </>
    );
};

export default Estimation;
