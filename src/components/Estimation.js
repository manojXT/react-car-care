import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import './Estimation.css';

const Estimation = () => {
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(0);
    
    const [partName, setPartName] = useState('');
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    
    const [partsList, setPartsList] = useState([]);
    
    const discountAmount = discount;

    const grandTotal = total - discountAmount;

    const addPart = () => {
        if (partName && qty > 0 && price > 0) {
            const newPart = {
                partName,
                qty,
                price,
                total: qty * price, 
                approval: "No"
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
                                <td>{part.tax}</td>
                                {/* <td>{part.tax}</td> */}
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
                            <td colSpan="4"></td>
                        </tr>
                        <tr>
                            <td colSpan="10" className="right-align">Discount</td>
                            <td>{discountAmount.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="10" className="right-align">Total</td>
                            <td>{total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="10" className="right-align">Grand Total</td>
                            <td>{grandTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Estimation;
