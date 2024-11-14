import React, { useState } from 'react';
import './DashboardTable.css';


const SparePendingTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sparePendings] = useState([]); // Spare pending array initialized as empty
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 5;

    const handleSearch = (e) => setSearchTerm(e.target.value);

    // Calculate pagination
    const totalPages = Math.ceil(sparePendings.length / entriesPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const filteredSparePendings = sparePendings.filter((sparePending) =>
        sparePending.partName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sparePending.partNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sparePending.customerName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentEntries = filteredSparePendings.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    return (
        <div>
            <p className="title">Spare Pending</p>

            <div className="search-Container">
                <input 
                    type="text" 
                    className="searchInput" 
                    value={searchTerm} 
                    onChange={handleSearch}
                    placeholder="Search by part name, part number, or customer name"
                />
            </div>

            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Part ID</th>
                            <th>Part Name</th>
                            <th>Category</th>
                            <th>Vehicle Model</th>
                            <th>Requested Date</th>
                            <th>Order Status</th>
                            <th>Requested Quantity</th>
                            <th>Quantity Received</th>
                            <th>Estimated Arrival</th>
                            <th>Vendor</th>
                            <th>Cost Per Unit</th>
                            <th>Total Cost</th>
                            <th>Order Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((sparePending, index) => (
                                <tr key={sparePending.id}>
                                    <td>{index + 1 + (currentPage - 1) * entriesPerPage}</td>
                                    <td>{sparePending.partId}</td>
                                    <td>{sparePending.partName}</td>
                                    <td>{sparePending.category}</td>
                                    <td>{sparePending.vehicleModel}</td>
                                    <td>{sparePending.requestedDate}</td>
                                    <td>{sparePending.orderStatus}</td>
                                    <td>{sparePending.requestedQuantity}</td>
                                    <td>{sparePending.quantityReceived}</td>
                                    <td>{sparePending.estimatedArrival}</td>
                                    <td>{sparePending.vendor}</td>
                                    <td>{sparePending.costPerUnit}</td>
                                    <td>{sparePending.totalCost}</td>
                                    <td>{sparePending.orderNotes}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="13" className="no-data">No spare parts pending found</td>
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

export default SparePendingTable;
