import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import './Inward.css';
import TabInventory from './TabInventory';
import { useNavigate } from 'react-router-dom';

const PurchaseReturnTable = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Set the number of rows per page

  // Calculate total pages based on data length
  const totalPages = Math.ceil(data.length / rowsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/purchase-returns');
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

  // Calculate the data to display based on pagination
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="inventory-container">
      <p className='title'>Purchase Return</p>
       {/* Tab Navigation */}
      <TabInventory />

      {/* Search Bar and Filter */}
      <div className="filter-section">
        <div className='search-input-container'>
          <input type="text" placeholder="In Stock..." className="search-input" />
          <button className="filter-button">
            <FaFilter />
          </button>
        </div>
        <button className="add-button" onClick={() => navigate("/Addreturn")}> + </button>
      </div>

      {/* Scrollable Table */}
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
            {loading ? (
              <tr>
                <td colSpan="18">Loading...</td>
              </tr>
            ) : paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={item.orderNo}>
                  <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
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
    </div>
  );
};

export default PurchaseReturnTable;
