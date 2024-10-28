import React from 'react';
import './Inward.css';  // Ensure CSS file is correctly imported
import { FaSearch, FaGlobe, FaPlus, FaCalendarAlt } from 'react-icons/fa'; // Import icons

const Inward = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header-section">
                {/* Left Section: Search bar and checkbox */}
                <div className="left-section">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Register No. / Job Card"
                            className="search-input"
                        />
                    </div>
                    <div className="stock-checkbox">
                        <input type="checkbox" id="stock" />
                        <span>Stock</span>
                    </div>
                </div>

                {/* Right Section: Company info */}
                <div className="right-section">
                    <span className="company-name">KG CAR CARE, COIMBATORE</span>
                    <FaGlobe className="globe-icon" />
                    <span className="company-contact">9384530403</span>
                </div>
            </div>

            {/* Inward Form Section */}
            <div className="inward-form-container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <span>Home &raquo; Inward </span>
                </div>

                {/* Form Section */}
                <div className="form-section">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Delivery Receipt :</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Bill No :</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Tax Type :</label>
                            <select>
                                <option value="gst">GST</option>
                                <option value="vat">VAT</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        <div className="form-group vendor-group">
                            <label>Vendor :</label>
                            <div className="vendor-input">
                                <input type="text" />
                                <button className="plus-button">
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date :</label>
                            <input type="text" value="16/10/2024" readOnly />
                        </div>
                        <div className="form-group date-group">
                            <label>Bill Date :</label>
                            <div className="bill-date-input">
                                <input type="text" value="16-10-2024" readOnly />
                                <FaCalendarAlt className="calendar-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inward;
