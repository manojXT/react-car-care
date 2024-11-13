import React, { useState, useEffect } from 'react';
import './DashboardTable.css';
import axios from 'axios';

const EstimationTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All'); // New state for status filter
    const [estimations, setEstimations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 5;

    // Fetch data from the backend API
    useEffect(() => {
        const fetchEstimations = async () => {
            try {
                const response = await axios.get('/api/estimations');
                setEstimations(response.data);
            } catch (error) {
                console.error('Error fetching estimations:', error);
            }
        };

        fetchEstimations();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to page 1 on new search
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
        setCurrentPage(1); // Reset to page 1 on status filter change
    };

    // Filter estimations based on search term and status
    const filteredEstimations = estimations.filter((estimation) => {
        const matchesStatus =
            statusFilter === 'All' || estimation.status === statusFilter;
        const matchesSearch =
            estimation.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            estimation.estimationNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            estimation.mobileNumber?.includes(searchTerm);

        return matchesStatus && matchesSearch;
    });

    // Pagination calculations
    const totalPages = Math.ceil(filteredEstimations.length / entriesPerPage);
    const currentEntries = filteredEstimations.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <p className="title">Estimation</p>

            <div className="search-Container">
                <input type="text" className="searchInput" value={searchTerm} onChange={handleSearch}
                placeholder="Search by customer, estimation number, or mobile number"/>
                <select value={statusFilter} onChange={handleStatusChange} className="statusDropdown">
                    <option value="All">All</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Estimation Number</th>
                            <th>JobCard No</th>
                            <th>Customer Name</th>
                            <th>Mobile Number</th>
                            <th>Amount (₹)</th>
                            <th>Estimation Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.length > 0 ? (
                            currentEntries.map((estimation, index) => (
                                <tr key={estimation.id}>
                                    <td>{index + 1 + (currentPage - 1) * entriesPerPage}</td>
                                    <td>{estimation.estimationNumber}</td>
                                    <td>{estimation.jobCardNo}</td>
                                    <td>{estimation.customerName}</td>
                                    <td>{estimation.mobileNumber}</td>
                                    <td>{estimation.amount}</td>
                                    <td>{estimation.estimationDate}</td>
                                    <td>
                                        <span className={`status ${estimation.status.toLowerCase()}`}>
                                            {estimation.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="no-data">
                                    No estimations found
                                </td>
                            </tr>
                        )}
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

export default EstimationTable;
