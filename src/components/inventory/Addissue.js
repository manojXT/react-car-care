import React, { useState, useEffect } from 'react';
import './AddInventory.css';

const Addissue = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    partNo: '',
    partName: '',
    brand: '',
    qtyOnHand: 0,
    requestedQty: 0,
    issueQty: 0,
    pendingQty: 0,
    sellingPrice: 0,
    issuedTo: ''
  });

  const [checked, setChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch data from Stock and Inward pages
  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const stockResponse = await fetch('/api/stock'); // Adjust to your actual stock API
        const inwardResponse = await fetch('/api/inward'); // Adjust to your actual inward API

        const stockData = await stockResponse.json();    
        const inwardData = await inwardResponse.json();

        // Combine the data
        const combinedData = [...stockData, ...inwardData];
        setInventory(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInventoryData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addItem = () => {
    if (!newItem.partNo || !newItem.partName) {
      alert("Please fill in all required fields.");
      return;
    }

    setInventory([
      ...inventory,
      {
        ...newItem,
        qtyOnHand: Number(newItem.qtyOnHand || 0),
        requestedQty: Number(newItem.requestedQty || 0),
        issueQty: Number(newItem.issueQty || 0),
        pendingQty: Number(newItem.pendingQty || 0),
        sellingPrice: Number(newItem.sellingPrice || 0)
      }
    ]);

    setNewItem({
      partNo: '',
      partName: '',
      brand: '',
      qtyOnHand: 0,
      requestedQty: 0,
      issueQty: 0,
      pendingQty: 0,
      sellingPrice: 0,
      issuedTo: ''
    });
  };

  // Filter inventory based on search term
  const filteredInventory = inventory.filter(item =>
    item.partNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.partName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInventory = filteredInventory.slice(startIndex, startIndex + itemsPerPage);

  const goToPreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div>
        <p className='title'>Add Issue</p>
      <div className="searchRow">
        <input type="text" placeholder="Part Name / Part Number / Scan Barcode" value={searchTerm} onChange={handleSearchChange} className="search-input"/>
        <input type="number" placeholder="QTY" name="requestedQty" value={newItem.requestedQty} onChange={handleInputChange} className="qty-input"/>
        <button className="add-button" onClick={addItem}>+</button>
      </div>

      <div className="table-container">
        <table>
        <thead>
          <tr>
            <th><input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /></th>
            <th>#</th>
            <th>In Stock</th>
            <th>Part Name</th>
            <th>Part No.</th>
            <th>Brand</th>
            <th>Qty On Hand</th>
            <th>Requested Qty</th>
            <th>Issue Qty</th>
            <th>Pending Qty</th>
            <th>Selling Price</th>
            <th>Issued To</th>
          </tr>
        </thead>
        <tbody>
          {currentInventory.length > 0 ? (
            currentInventory.map((item, index) => (
              <tr key={index}>
                <td>{startIndex + index + 1}</td>
                <td>{item.qtyOnHand > 0 ? 'Yes' : 'No'}</td>
                <td>{item.partName}</td>
                <td>{item.partNo}</td>
                <td>{item.brand}</td>
                <td>{item.qtyOnHand}</td>
                <td>{item.requestedQty}</td>
                <td>{item.issueQty}</td>
                <td>{item.pendingQty}</td>
                <td>₹{item.sellingPrice}</td>
                <td>{item.issuedTo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" style={{ textAlign: 'center' }}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>

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
  );
};

export default Addissue;
