import React, { useState, useEffect } from 'react';
import './Reports.css';
import { FaEllipsisV, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import TabReport from "./TabReport";

const ReportBill = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [bills, setBills] = useState([]); // Initialize state for bills
    const [currentPage, setCurrentPage] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const entriesPerPage = 5;

    useEffect(() => {
        // Fetch bills from the backend API when the component mounts
        const fetchBills = async () => {
            try {
                const response = await fetch('YOUR_API_URL'); // Replace with your actual API endpoint
                const data = await response.json();
                setBills(data); // Set the fetched data to the state
            } catch (error) {
                console.error('Error fetching bills:', error);
            }
        };

        fetchBills();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const handleSearch = (e) => setSearchTerm(e.target.value);

    // Calculate pagination
    const totalPages = Math.ceil(bills.length / entriesPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const filteredBills = bills.filter((bill) =>
        bill.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bill.billNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bill.mobile?.includes(searchTerm)
    );

    const currentEntries = filteredBills.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    const toggleMenu = (id) => {
        setIsMenuOpen(isMenuOpen === id ? null : id);
    };

    return (
        <div className="bill-table-container">
            <p className="title">Bill Report</p>
            {/* Tab Navigation */}
            <TabReport />

            {/* Header with Stock Summary */}
            <div className="table-controls">
                <div className="search-control">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search by bill number, customer, or mobile"
                    />
                </div>
            </div>

            <table className="bill-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bill Number</th>
                        <th>Customer Name</th>
                        <th>Mobile Number</th>
                        <th>Amount (₹)</th>
                        <th>Payment Status</th>
                        <th>Payment Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEntries.length > 0 ? (
                        currentEntries.map((bill, index) => (
                            <tr key={bill.id}>
                                <td>{index + 1 + (currentPage - 1) * entriesPerPage}</td>
                                <td>{bill.billNumber}</td>
                                <td>{bill.customerName}</td>
                                <td>{bill.mobile}</td>
                                <td>{bill.amount}</td>
                                <td>{bill.paymentStatus}</td>
                                <td>{bill.paymentDate}</td>
                                <td className="action-buttons">
                                    <div className="menu-container">
                                        <FaEllipsisV
                                            onClick={() => toggleMenu(bill.id)}
                                            className="menu-icon"
                                        />
                                        {isMenuOpen === bill.id && (
                                            <div className="menu-dropdown">
                                                <button
                                                    className="view-btn"
                                                    onClick={() => navigate(`/view/${bill.id}`)}
                                                >
                                                    <FaEye /> View
                                                </button>
                                                <button
                                                    className="edit-btn"
                                                    onClick={() => navigate(`/edit/${bill.id}`)}
                                                >
                                                    <FaEdit /> Edit
                                                </button>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() => console.log('Delete', bill.id)}
                                                >
                                                    <FaTrash /> Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="no-data">No bills found</td>
                        </tr>
                    )}
                </tbody>
            </table>

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

export default ReportBill;
