import React, { useState } from "react";
import './Addinward.css';

const Addinward = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [qty, setQty] = useState('');

  

        return (
            <div className="container">
                <div className="breadcrumbs">
                    <span>Parts</span> &gt; <span>Inward</span>
                </div>

                {/* Search bar and input for Quantity */}
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="PART NAME / PART NUMBER / SCAN BARCODE"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="QTY"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                    />
                    <button className="add-btn">+</button>
                </div>

                {/* Table */}
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Jobcard No</th>
                            <th>Reg No</th>
                            <th>Inward No</th>
                            <th>Order No</th>
                            <th>Vendor Name</th>
                            <th>Order Date</th>
                            <th>Ordered Parts</th>
                            <th>Inward Date</th>
                            <th>Bill No/ Receipt No</th>
                            <th>Inward Parts (qty)</th>
                            <th>Inward value </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example empty row */}
                        <tr>
                            <td colSpan="12">No data available</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    };

    export default Addinward;