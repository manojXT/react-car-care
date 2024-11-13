import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import Select from 'react-select';
import './Inward.css';
import TabInventory from './TabInventory';
import { useNavigate } from 'react-router-dom';

const Stock = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalStockItems = data.length;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.example.com/stock');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Calculate Stock Value
  const calculateStockValue = () => {
    return data.reduce((total, item) => {
      return total + item.qoh * item.avgPurchasePrice;
    }, 0).toFixed(2); // Format to two decimal places
  };

  // Export function
  const handleExport = () => {
    const csvHeaders = "Part NO.,Part Name,Brand,Category,QoH,Avg Purchase Price,Avg Selling Price,Tax Type,Tax %,Tax Amt,Rack No.,Aging,Barcode\n";
    const csvContent = data.map(item =>
      `${item.partNo},${item.partName},${item.brand},${item.category},${item.qoh},${item.avgPurchasePrice},${item.avgSellingPrice},${item.taxType},${item.taxPercentage},${item.taxAmount},${item.rackNo},${item.aging},${item.barcode}`
    ).join('\n');
    const blob = new Blob([csvHeaders + csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const totalPages = Math.ceil(totalStockItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="inventory-container">
      <p className='title'>Stock List</p>
      {/* Tab Navigation */}
      <TabInventory />

      {/* Header with Stock Summary */}
        <div className="summary-section">
          <span>Unique Part Nos: {data.length > 0 ? new Set(data.map(item => item.partNo)).size : 0}</span>
          <span>Total Stock Items: {totalStockItems}</span>
          <span>Stock Value: ₹{calculateStockValue()}</span>
        </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="search-input-container">
          <Select className="status-dropdown" options={[
            { value: 'in-stock', label: 'In Stock' },
            { value: 'out-of-stock', label: 'Out of Stock' }
          ]} placeholder="In Stock" isClearable />

          <input type="text" placeholder="In Stock..." className="search-input" />
          <button className="filter-button">
            <FaFilter />
          </button>
          <button className="add-button" onClick={() => navigate("/Addstock")}> + </button>
        </div>
        <button onClick={handleExport} className="export-button">
          Export <FiDownload />
        </button>
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
            {loading ? (
              <tr>
                <td colSpan="14">Loading...</td>
              </tr>
            ) : currentItems.length > 0 ? (
              currentItems.map((item, index) => (
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
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stock;
