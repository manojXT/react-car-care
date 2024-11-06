import React from 'react';
import './Estimation.css';

const icons = [
    { name: 'Packages', icon: '📦' },
    { name: 'Relevant Parts', icon: '🔧' },
    { name: 'All Services', icon: '🛠️' },
    { name: 'Wheel Alignment', icon: '🚗' },
    { name: 'Wheel Balancing', icon: '⚙️' },
    { name: 'Wash & Detailing', icon: '🧽' },
    { name: 'PMS & Check-Ups', icon: '🚙' },
    { name: 'Tyres & Services', icon: '🚘' }
];

const Estimation = () => (
    <>
        {/* Icon Navigation */}
        <div className="icon-nav">
            {icons.map((item, index) => (
                <div key={index} className="icon-item">
                    <span className="icon">{item.icon}</span>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>

        {/* Search Bar */}
        <div className="search-bar">
            <input type="text" placeholder="Part Name / Part Number" className="search-input" />
            <select className="filter-select">
                <option>IN WORKSHOP</option>
                {/* Add other options if needed */}
            </select>
            <input type="number" placeholder="Qty" className="filter-input" />
            <input type="text" placeholder="Part Price" className="filter-input" />
            <input type="text" placeholder="Price" className="filter-input" />
            <input type="text" placeholder="Service Type/Rate" className="filter-input" />
            <button className="add-button">+</button>
        </div>

        {/* Parts Table */}
        <table className="parts-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Part Name</th>
                    <th>Part / Labour</th>
                    <th>Part No.</th>
                    <th>Unit / Rate</th>
                    <th>Discount</th>
                    <th>HSN / SAC</th>
                    <th>Tax %</th>
                    <th>Tax ₹</th>
                    <th>Total ₹</th>
                    <th>Approval</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="12">Apply Discount</td>
                </tr>
                <tr>
                    <td colSpan="12" style={{ textAlign: 'right' }}>Grand Total ₹0.00</td>
                </tr>
                <tr>
                    <td colSpan="12" style={{ textAlign: 'right' }}>Discount</td>
                </tr>
                <tr>
                    <td colSpan="12" style={{ textAlign: 'right' }}>Round off</td>
                </tr>
                <tr>
                    <td colSpan="12" style={{ textAlign: 'right' }}>Paid</td>
                </tr>
                <tr>
                    <td colSpan="12" style={{ textAlign: 'right' }}>Balance</td>
                </tr>
            </tbody>
        </table>

        {/* Footer Buttons */}
        <div className="footer-buttons">
            <button className="footer-button">Print</button>
            <button className="footer-button">Save</button>
            <button className="footer-button">Cancel Job Card</button>
        </div>
    </>
);

export default Estimation;
