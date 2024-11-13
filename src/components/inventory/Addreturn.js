import React, { useState } from "react";
import './AddInventory.css';

const Addreturn = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    orderNo: '',
    inwardNo: '',
    regNo: '',
    jobCardNo: '',
    vendorName: '',
    partName: '',
    
    partNo: '',
    brand: '',
    unitPrice: '',
    returnQty: '',
    returnedQty: '',
    returnedDate: '',
    reason: '',
    shipment: '',
    status: ''
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Function to fetch order details based on search term
  const fetchOrderDetails = async (term) => {
    try {
      const response = await fetch(`/api/orders?search=${term}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch order details:", error);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 2) {
      fetchOrderDetails(term);  // Fetches details as the user types
    } else {
      setOrders([]); // Clears the orders if search term is too short
    }
  };

  // Add new return row to the table
  const addOrder = () => {
    if (!newOrder.orderNo || !newOrder.partName || !newOrder.unitPrice) {
      alert("Please fill in all required fields.");
      return;
    }

    setOrders([
      ...orders,
      {
        ...newOrder,
        orderDate: new Date().toLocaleDateString(),
        unitPrice: Number(newOrder.unitPrice),
        returnQty: Number(newOrder.returnQty || 0),
        returnedQty: Number(newOrder.returnedQty || 0)
      }
    ]);

    setNewOrder({
      orderNo: '',
      inwardNo: '',
      regNo: '',
      jobCardNo: '',
      vendorName: '',
      partName: '',
      partNo: '',
      brand: '',
      unitPrice: '',
      returnQty: '',
      returnedQty: '',
      returnedDate: '',
      reason: '',
      shipment: '',
      status: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  // Calculate pagination
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <>
      <p className='title'>Add Return</p>
      <div className="breadcrumbs">
        {/* Breadcrumbs can be added here */}
      </div>

      {/* Search bar for filtering by Order No., Inward No., or Job Card No. */}
      <div className="searchRow">
        <input type="text" placeholder="Search by Order No., Inward No., or Job Card No." value={searchTerm} onChange={handleSearchChange}/>
      </div>

      {/* Input fields for new return order */}
      <div className="new-add-section">
        <input type="text" name="orderNo" placeholder="Order NO." value={newOrder.orderNo} onChange={handleInputChange} />
        <input type="text" name="inwardNo" placeholder="Inward No" value={newOrder.inwardNo} onChange={handleInputChange} />
        <input type="text" name="regNo" placeholder="Reg No." value={newOrder.regNo} onChange={handleInputChange} />
        <input type="text" name="jobCardNo" placeholder="Job Card NO." value={newOrder.jobCardNo} onChange={handleInputChange} />
        <input type="text" name="vendorName" placeholder="Vendor Name" value={newOrder.vendorName} onChange={handleInputChange} />
        <input type="text" name="partName" placeholder="Part Name" value={newOrder.partName} onChange={handleInputChange} />
        <input type="text" name="partNo" placeholder="Part No." value={newOrder.partNo} onChange={handleInputChange} />
        <input type="text" name="brand" placeholder="Brand" value={newOrder.brand} onChange={handleInputChange} />
        <input type="number" name="unitPrice" placeholder="Unit Price ₹" value={newOrder.unitPrice} onChange={handleInputChange} />
        <input type="number" name="returnQty" placeholder="Return Qty" value={newOrder.returnQty} onChange={handleInputChange} />
        <input type="number" name="returnedQty" placeholder="Returned Qty" value={newOrder.returnedQty} onChange={handleInputChange} />
        <input type="date" name="returnedDate" placeholder="Returned Date" value={newOrder.returnedDate} onChange={handleInputChange} />
        <input type="text" name="reason" placeholder="Reason" value={newOrder.reason} onChange={handleInputChange} />
        <input type="text" name="shipment" placeholder="Shipment" value={newOrder.shipment} onChange={handleInputChange} />
        <input type="text" name="status" placeholder="Status" value={newOrder.status} onChange={handleInputChange} />
        <button className="add-btn" onClick={addOrder}>Add Return</button>
      </div>

      {/* Table for return orders */}
      <div className="table-container">
        <table className="table-wrapper">
          <thead>
            <tr>
              <th>#</th>
              <th>Order No.</th>
              <th>Inward No</th>
              <th>Order Date</th>
              <th>Inward Date</th>
              <th>Reg No.</th>
              <th>Job Card No.</th>
              <th>Vendor Name</th>
              <th>Part Name</th>
              <th>Part No.</th>
              <th>Brand</th>
              <th>Unit Price</th>
              <th>Return Qty</th>
              <th>Returned Qty</th>
              <th>Returned Date</th>
              <th>Reason</th>
              <th>Shipment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.length > 0 ? (
              currentOrders.map((item, index) => (
                <tr key={item.orderNo || index}>
                  <td>{startIndex + index + 1}</td>
                  <td>{item.orderNo}</td>
                  <td>{item.inwardNo}</td>
                  <td>{item.orderDate}</td>
                  <td>{item.inwardDate}</td>
                  <td>{item.regNo}</td>
                  <td>{item.jobCardNo}</td>
                  <td>{item.vendorName}</td>
                  <td>{item.partName}</td>
                  <td>{item.partNo}</td>
                  <td>{item.brand}</td>
                  <td>₹{item.unitPrice}</td>
                  <td>{item.returnQty}</td>
                  <td>{item.returnedQty}</td>
                  <td>{item.returnedDate}</td>
                  <td>{item.reason}</td>
                  <td>{item.shipment}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="18">No data available</td>
              </tr>
            )}
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

export default Addreturn;
