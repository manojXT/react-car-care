import React, { useState } from "react";
import './Addreturn.css';

const Addreturn = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [qty, setQty] = useState('');

  return (
    <div className="container">
      <div className="breadcrumbs">
        <span>Parts</span> &gt; <span>Purchasereturn</span>
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
            <th>Order No</th>
            <th>Inward No</th>
            <th>Order Date</th>
            <th>Inward Date</th>
            <th>Reg No</th>
            <th>Jobcard No</th>
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

export default Addreturn;