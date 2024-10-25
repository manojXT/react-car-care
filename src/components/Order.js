import React from "react";
import "./Order.css";
import { FaSearch, FaPlus } from "react-icons/fa";

const OrderForm = () => {
  return (
    <div className="order-form">
      <div className="header-section">
        <div className="header-left">
          <h1>Order</h1>
          <span>Stock</span>
        </div>
        <div className="header-right">
          <p>KG CAR CARE, COIMBATORE</p>
          <p>9384530403</p>
        </div>
      </div>

      <div className="form-section">
        <div className="vendor-stock">
          <label htmlFor="vendor">Vendor *</label>
          <input type="text" id="vendor" placeholder="Select" />

          <label htmlFor="stock">Stock</label>
          <input type="text" id="stock" placeholder="Select" />

          <label htmlFor="type">Type *</label>
          <select id="type">
            <option>Cash</option>
          </select>
        </div>

        <div className="part-input-group">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="PART NAME" className="input-part-name" />
          <input type="number" placeholder="Qty" className="input-qty" />
          <input type="number" placeholder="PART PRICE" className="input-part-price" />
          <input type="number" placeholder="Price" className="input-price" />
          <input type="text" placeholder="SERVICE / LABOUR" className="input-service-labour" />
          <button className="add-button">
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>Part Name</th>
              <th>Part No</th>
              <th>Brand</th>
              <th>Requested Qty</th>
              <th>Size / Qty</th>
              <th>Pricing (Qty / Unit Price ₹)</th>
              <th>Discount</th>
              <th>HSN / Tax %</th>
              <th>Total Purchase Price ₹</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Total</td>
              <td colSpan="10">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderForm;
