import React, { useState } from "react";
import './AddInventory.css';

const Addorder = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderNo: '',
    regNo: '',
    jobCardNo: '',
    vendorName: '',
    orderValue: '',
    orderParts: '',
    inwardedParts: '',
    rejectedParts: '',
    pendingParts: '',
    cancelDate: '',
    status: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Add new order row to the table
  const addOrder = () => {
    if (!newOrder.orderNo || !newOrder.orderValue || !newOrder.orderParts) {
      alert("Please fill in all required fields.");
      return;
    }

    setOrders([
      ...orders,
      {
        ...newOrder,
        orderDate: new Date().toLocaleDateString(),
        orderValue: Number(newOrder.orderValue),
        inwardedParts: Number(newOrder.inwardedParts || 0),
        rejectedParts: Number(newOrder.rejectedParts || 0),
        pendingParts: Number(newOrder.pendingParts || 0)
      }
    ]);

    setNewOrder({
      orderNo: '',
      regNo: '',
      jobCardNo: '',
      vendorName: '',
      orderValue: '',
      orderParts: '',
      inwardedParts: '',
      rejectedParts: '',
      pendingParts: '',
      cancelDate: '',
      status: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <>
      <p className='title'>Add Order</p>
      <div className="breadcrumbs">
        {/* Breadcrumbs can be added here */}
      </div>

      {/* Input fields for new order */}
      <div className="new-add-section">
        <input type="text" name="orderNo" placeholder="Order NO." value={newOrder.orderNo} onChange={handleInputChange}/>
        <input type="text" name="regNo" placeholder="Reg No." value={newOrder.regNo} onChange={handleInputChange}/>
        <input type="text" name="jobCardNo" placeholder="Job Card NO." value={newOrder.jobCardNo} onChange={handleInputChange} />
        <input type="text" name="vendorName" placeholder="Vendor Name" value={newOrder.vendorName} onChange={handleInputChange}/>
        <input type="number" name="orderValue" placeholder="Order Value" value={newOrder.orderValue} onChange={handleInputChange}/>
        <input type="text" name="orderParts" placeholder="Order Parts" value={newOrder.orderParts} onChange={handleInputChange}/>
        <input type="number" name="inwardedParts" placeholder="Inwarded Parts" value={newOrder.inwardedParts} onChange={handleInputChange}/>
        <input type="number" name="rejectedParts" placeholder="Rejected Parts" value={newOrder.rejectedParts} onChange={handleInputChange}/>
        <input type="number" name="pendingParts" placeholder="Pending Parts" value={newOrder.pendingParts} onChange={handleInputChange}/>
        <input type="date" name="cancelDate" placeholder="Cancel Date" value={newOrder.cancelDate} onChange={handleInputChange}/>
        <input type="text" name="status" placeholder="Status" value={newOrder.status} onChange={handleInputChange}/>
        <button className="add-btn" onClick={addOrder}>Add Order</button>
      </div>

      {/* Orders Table */}
      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Order NO.</th>
              <th>Order Date</th>
              <th>Reg No.</th>
              <th>Job Card NO.</th>
              <th>Vendor Name</th>
              <th>Order Value</th>
              <th>Order Parts</th>
              <th>Inwarded Parts</th>
              <th>Rejected Parts</th>
              <th>Pending Parts</th>
              <th>Cancel Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={index}>
                <td>{startIndex + index + 1}</td>
                <td>{order.orderNo}</td>
                <td>{order.orderDate}</td>
                <td>{order.regNo}</td>
                <td>{order.jobCardNo}</td>
                <td>{order.vendorName}</td>
                <td>{order.orderValue}</td>
                <td>{order.orderParts}</td>
                <td>{order.inwardedParts}</td>
                <td>{order.rejectedParts}</td>
                <td>{order.pendingParts}</td>
                <td>{order.cancelDate || '-'}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            &laquo;
          </button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            &raquo;
          </button>
        </div>
      </div>
    </>
  );
};

export default Addorder;
