import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import './Inward.css';
import TabInventory from './TabInventory';

const Issue = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [issuedItems, setIssuedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const issuedResponse = await fetch('https://api.example.com/issuedItems');
        const issuedData = await issuedResponse.json();
        setIssuedItems(issuedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on component mount

  const totalItems = issuedItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Determine the current data set based on pagination
  const currentItems = issuedItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle Pagination
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
      <>
        {/* Search Bar and Filter */}
        <div className="filter-section">
          <input type="text" placeholder="In Stock..." className="search-input" />
          <button className="filter-button">
            <FaFilter />
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {/* Data Table */}
            <div className="table-container">
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Part No.</th>
                      <th>Part Name</th>
                      <th>Brand</th>
                      <th>Job card NO.</th>
                      <th>Reg NO.</th>
                      <th>Vehicle</th>
                      <th>Avg Purchase Price ₹</th>
                      <th>Avg Selling Price ₹</th>
                      <th>Avg Margin Price ₹</th>
                      <th>Requested Qty</th>
                      <th>Issued Qty</th>
                      <th>Pending Qty</th>
                      <th>Status</th>
                      <th>Return Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Loop through currentItems */}
                    {currentItems.map((item, index) => (
                      <tr key={item.partNo}>
                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td>{item.partNo}</td>
                        <td>{item.partName}</td>
                        <td>{item.brand}</td>
                        <td>{item.jobCardNo}</td>
                        <td>{item.regNo}</td>
                        <td>{item.vehicle}</td>
                        <td>{item.avgPurchasePrice}</td>
                        <td>{item.avgSellingPrice}</td>
                        <td>{item.avgMarginPrice}</td>
                        <td>{item.requestedQty}</td>
                        <td>{item.issuedQty}</td>
                        <td>{item.pendingQty}</td>
                        <td>{item.status}</td>
                        <td>{item.returnQty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

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
      </>
    </div>
  );
};

export default Issue;
