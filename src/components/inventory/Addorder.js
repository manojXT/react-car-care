import React, { useState } from "react";
import './Addorder.css';

const Addorder = () => {
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
            <th>Order No</th>
            <th>Order Date</th>
            <th>Reg No</th>
            <th>Jobcard No</th>
            <th>Vendor Name</th>
            <th>Ordervalue</th>
            <th>Ordered Parts</th>
            <th>Rejected Parts</th>
            <th>Pending Parts</th>
            <th>Cancel Date</th>
            <th>Status</th>
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

export default Addorder;