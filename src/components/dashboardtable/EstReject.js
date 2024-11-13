import React, { useState, useEffect } from 'react';
import './DashboardTable.css';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // To make HTTP requests

const EstimationTable = () => {
   
    const [searchTerm, setSearchTerm] = useState('');
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

    const handleSearch = (e) => setSearchTerm(e.target.value);

    // Calculate pagination
    const totalPages = Math.ceil(estimations.length / entriesPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const filteredEstimations = estimations.filter((estimation) =>
        estimation.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        estimation.estimationNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        estimation.mobileNumber?.includes(searchTerm)
    );

    const currentEntries = filteredEstimations.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    return (
        <div>
            <p className="title">Estimation Reject</p>

                <div className="search-Container">
                    <input type="text" value={searchTerm} className='searchInput'
                    onChange={handleSearch} placeholder="Search by customer, estimation number, or mobile number"/>
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
                                        {/* Displaying status, assuming estimation has a status field */}
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
