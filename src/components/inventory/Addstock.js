import React, { useState } from "react";
import './AddInventory.css';

const Addstock = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    partNo: '',
    partName: '',
    brand: '',
    category: '',
    qoh: '',
    avgPurchasePrice: '',
    avgSellingPrice: '',
    taxType: '',
    taxPercentage: '',
    taxAmount: '',
    rackNo: '',
    aging: '',
    barcode: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Add new stock item row to the table
  const addStockItem = () => {
    if (!newOrder.partNo || !newOrder.partName || !newOrder.qoh || !newOrder.avgPurchasePrice) {
      alert("Please fill in all required fields.");
      return;
    }

    setOrders([
      ...orders,
      {
        ...newOrder,
        avgPurchasePrice: Number(newOrder.avgPurchasePrice),
        avgSellingPrice: Number(newOrder.avgSellingPrice),
        taxPercentage: Number(newOrder.taxPercentage),
        taxAmount: Number(newOrder.taxAmount),
        qoh: Number(newOrder.qoh)
      }
    ]);

    setNewOrder({
      partNo: '',
      partName: '',
      brand: '',
      category: '',
      qoh: '',
      avgPurchasePrice: '',
      avgSellingPrice: '',
      taxType: '',
      taxPercentage: '',
      taxAmount: '',
      rackNo: '',
      aging: '',
      barcode: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <p className="title">Add Stock</p>
      <div className="breadcrumbs">
        {/* Breadcrumbs can be added here */}
      </div>

      {/* Input fields for new stock */}
      <div className="new-add-section">
        <input type="text" name="partNo" placeholder="Part NO." value={newOrder.partNo} onChange={handleInputChange} />
        <input type="text" name="partName" placeholder="Part Name" value={newOrder.partName} onChange={handleInputChange} />
        <input type="text" name="brand" placeholder="Brand" value={newOrder.brand} onChange={handleInputChange} />
        <input type="text" name="category" placeholder="Category" value={newOrder.category} onChange={handleInputChange} />
        <input type="number" name="qoh" placeholder="QoH" value={newOrder.qoh} onChange={handleInputChange} />
        <input type="number" name="avgPurchasePrice" placeholder="Avg Purchase Price ₹" value={newOrder.avgPurchasePrice} onChange={handleInputChange} />
        <input type="number" name="avgSellingPrice" placeholder="Avg Selling Price ₹" value={newOrder.avgSellingPrice} onChange={handleInputChange} />
        <input type="text" name="taxType" placeholder="Tax Type" value={newOrder.taxType} onChange={handleInputChange} />
        <input type="number" name="taxPercentage" placeholder="Tax %" value={newOrder.taxPercentage} onChange={handleInputChange} />
        <input type="number" name="taxAmount" placeholder="Tax Amt ₹" value={newOrder.taxAmount} onChange={handleInputChange} />
        <input type="text" name="rackNo" placeholder="Rack No." value={newOrder.rackNo} onChange={handleInputChange} />
        <input type="text" name="ageing" placeholder="Aging" value={newOrder.aging} onChange={handleInputChange} />
        <input type="text" name="barcode" placeholder="Barcode" value={newOrder.barcode} onChange={handleInputChange} />
        <button className="add-btn" onClick={addStockItem}>Add Stock</button>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Part NO.</th>
              <th>Part Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>QoH</th>
              <th>Avg Purchase Price ₹</th>
              <th>Avg Selling Price ₹</th>
              <th>Tax Type</th>
              <th>Tax %</th>
              <th>Tax Amt ₹</th>
              <th>Rack No.</th>
              <th>Aging</th>
              <th>Barcode</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.length > 0 ? (
              currentOrders.map((item, index) => (
                <tr key={item.partNo || index}>
                  <td>{startIndex + index + 1}</td>
                  <td>{item.partNo}</td>
                  <td>{item.partName}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>{item.qoh}</td>
                  <td>₹{item.avgPurchasePrice}</td>
                  <td>₹{item.avgSellingPrice}</td>
                  <td>{item.taxType}</td>
                  <td>{item.taxPercentage}</td>
                  <td>₹{item.taxAmount}</td>
                  <td>{item.rackNo}</td>
                  <td>{item.aging}</td>
                  <td>{item.barcode}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14">No data available</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="pagination">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            &laquo;
          </button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            &raquo;
          </button>
        </div>
      </div>
    </>
  );
};

export default Addstock;
