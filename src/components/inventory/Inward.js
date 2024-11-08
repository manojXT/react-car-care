import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Inward.css'; 
import { FaFilter } from 'react-icons/fa';
import TabInventory from './TabInventory';

const Inward = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT_HERE');
        setData(response.data);  // Assuming response.data is an array of items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Pagination calculations
  const totalItems = data.length;
  const totalInwardValue = data.reduce((sum, item) => sum + (item.inwardValue || 0), 0);  // Assuming each item has an inwardValue field
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

     {/* Summary Section */}
     <div className="summary-section">
        <p>Total Items: <span>{totalItems}</span></p>
        <p>Inward Value: ₹ <span>{totalInwardValue.toFixed(2)}</span></p>
      </div>

      {/* Filter and Search */}
      <div className="filter-section">
        <input type="text" placeholder="In Stock..." className="search-input" />
        <button className="filter-button">
          <FaFilter />
        </button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Job Card No.</th>
              <th>Reg No.</th>
              <th>Inward No.</th>
              <th>Order No.</th>
              <th>Vendor Name</th>
              <th>Order Date</th>
              <th>Inward Date</th>
              <th>Bill No/Receipt No.</th>
              <th>Inward Parts (Qty)</th>
              <th>Inward Value ₹</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id}>
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td>{item.jobCardNo || '--'}</td>
                <td>{item.regNo || '--'}</td>
                <td>{item.inwardNo || '--'}</td>
                <td>{item.orderNo || '--'}</td>
                <td>{item.vendorName || '--'}</td>
                <td>{item.orderDate || '--'}</td>
                <td>{item.inwardDate || '--'}</td>
                <td>{item.billNo || '--'}</td>
                <td>{item.partsQty || '--'}</td>
                <td>{item.inwardValue || '--'}</td>
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
    </div>
  );
};

export default Inward;
