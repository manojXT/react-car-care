import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; 
import './DashboardTable.css';

const Delivered = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 10;

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); 
    };

    // Filter the data based on the search query
    const filteredData = data?.filter((item) =>
        item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.mobileNo.includes(searchQuery) ||
        item.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.claimNo.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    // Calculate pagination values
    const totalPages = Math.ceil(filteredData.length / entriesPerPage);
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <p className="title">Delivered</p>   
            <div className="search-Container">
                <input type="text" className="searchInput" value={searchQuery} 
                onChange={handleSearch} placeholder="Search by customer, vehicle, or claim number"/>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job Card No.</th>
                            <th>Reg. No.</th>
                            <th>Invoice No.</th>
                            <th>Service Type</th>
                            <th>Vehicle</th>
                            <th>Customer Name</th>
                            <th>Mobile No.</th>
                            <th>Arrival Date</th>
                            <th>Arrival Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.map((item, index) => (
                            <tr key={item.id}>
                                <td>{indexOfFirstEntry + index + 1}</td>
                                <td>{item.jobCardNo}</td>
                                <td>{item.regNo}</td>
                                <td>{item.invoiceNo}</td>
                                <td>{item.serviceType}</td>
                                <td>{item.vehicle}</td>
                                <td>{item.customerName}</td>
                                <td>{item.mobileNo}</td>
                                <td>{item.arrivalDate}</td>
                                <td>{item.arrivalTime}</td>
                                <td className="statusCell">
                                    <FontAwesomeIcon icon={faCircle} size="xs" color={item.statusColor} />
                                    <span className="statusText">{item.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    &laquo;
                </button>
                <span>
                    {currentPage} of {totalPages}
                </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    &raquo;
                </button>
            </div>
        </div>
    );
};

export default Delivered;
