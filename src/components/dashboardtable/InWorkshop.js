import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; 
import './DashboardTable.css';

const InWorkshop = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState("All"); // New state for status filter
    const entriesPerPage = 10;

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
        setCurrentPage(1);
    };

    // Filter data based on search query and status
    const filteredData = data?.filter((item) => {
        const matchesStatus = statusFilter === "All" || item.status === statusFilter;
        const matchesSearch =
            item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.mobileNo.includes(searchQuery) ||
            item.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.claimNo.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    }) || [];

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
            <p className="title">In Workshop</p>   

            <div className="search-Container">
                <input type="text" className="searchInput" value={searchQuery}
                onChange={handleSearch} placeholder="Search by customer, vehicle, or claim number"/>
                <select value={statusFilter} onChange={handleStatusChange} className="statusDropdown">
                    <option value="All">All Statuses</option>
                    <option value="Work in Progress">Work in Progress</option>
                    <option value="Ready to Delivery">Ready to Delivery</option>
                    <option value="Delivered">Delivered</option>
                </select>
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

export default InWorkshop;
