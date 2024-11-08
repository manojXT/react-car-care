import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Inward.css';
import TabInventory from './TabInventory';

const Order = () => {
  const [status, setStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (selectedOption) => {
    setStatus(selectedOption);
  };

  const statusOptions = [
    { value: 'in-stock', label: 'In Stock' },
    { value: 'out-of-stock', label: 'Out of Stock' },
  ];

  // Fetch orders from API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/orders'); 
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Pagination logic
  const totalItems = orders.length;
  const totalInwarded = orders.reduce((sum, order) => sum + order.inwardedParts, 0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  // Navigation
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="inventory-container">
      {/* Tab Navigation */}
      <TabInventory />

      {/* Content Section */}
      <div>
        {/* Search Bar */}
        <div className="filter-section">
          <input type="text" placeholder="Search..." className="search-input" value={searchTerm} onChange={handleSearchChange}/>
          <Select className="stock-status-dropdown" value={status} onChange={handleStatusChange}
            options={statusOptions} placeholder="Select Status" isClearable />
        </div>

        {loading ? (
          <p>Loading orders...</p>
        ) : (
          <>
            {/* Orders Table */}
            <div className="table-container">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th># ({totalItems})</th>
                    <th>Order NO.</th>
                    <th>Order Date</th>
                    <th>Reg No.</th>
                    <th>Job card NO.</th>
                    <th>Vendor Name</th>
                    <th>Order Value</th>
                    <th>Order parts</th>
                    <th>Inwarded parts ({totalInwarded})</th>
                    <th>Rejected parts</th>
                    <th>Pending parts</th>
                    <th>Cancel Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.map((order, index) => (
                    <tr key={order.orderNo}>
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
        )}
      </div>
    </div>
  );
};

export default Order;
