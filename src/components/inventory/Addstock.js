import React, { useState } from "react";
import './Addstock.css';

const Addstock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [qty, setQty] = useState('');

  return (
    <div className="container">
      <div className="breadcrumbs">
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
        <button className="add-btn">Add</button>
      </div>

      {/* Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Part No</th>
            <th>Part Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Qoh</th>
            <th>Avg Purchase Price</th>
            <th>Vendor Name</th>
            <th>Part Name</th>
            <th>Part No</th>
            <th>Brand</th>
            <th>Unit Price</th>
            <th>Return Date</th>
            <th>Reason</th>
            <th>Shipment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Example empty row */}
          <tr>
            <td colSpan="16">No data available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Addstock;