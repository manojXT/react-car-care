import React, { useState, useEffect } from 'react';
import './Reports.css';
import { FaUser, FaEllipsisV, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import TabReport from './TabReport';

const ReportEmployee = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const [loading, setLoading] = useState(true); // To show loading state
    const [error, setError] = useState(null); // To handle errors
    const entriesPerPage = 5;

    // Fetch employee data from backend API when component mounts
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('https://your-api-url.com/employees'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch employee data');
                }
                const data = await response.json();
                setEmployees(data); // Set the employee data to state
            } catch (error) {
                setError(error.message); // Handle errors
            } finally {
                setLoading(false); // Stop loading when the request is complete
            }
        };

        fetchEmployees();
    }, []);

    // Handle search input change
    const handleSearch = (e) => setSearchTerm(e.target.value);

    // Calculate total pages for pagination
    const totalPages = Math.ceil(employees.length / entriesPerPage);

    // Move to the next page
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // Move to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Filter employees based on search term
    const filteredEmployees = employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.mobile.includes(searchTerm)
    );

    // Get current page's employees
    const currentEntries = filteredEmployees.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    // Toggle the menu for actions (view, edit, delete)
    const toggleMenu = (id) => {
        setIsMenuOpen(isMenuOpen === id ? null : id);
    };

    return (
        <div className="employee-table-container">
            <p className="title">Employee</p>
            {/* Tab Navigation */}
            <TabReport />

            <div className="table-controls">
                <div className="search-control">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search"
                    />
                </div>
            </div>

            {/* Show loading spinner if fetching data */}
            {loading && <p>Loading...</p>}

            {/* Show error message if there's an error fetching data */}
            {error && <p className="error-message">{error}</p>}

            <table className="employee-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEntries.length > 0 ? (
                        currentEntries.map((employee, index) => (
                            <tr key={employee.id}>
                                <td>{index + 1 + (currentPage - 1) * entriesPerPage}</td>
                                <td>
                                    <FaUser className="employee-icon" />
                                </td>
                                <td>{employee.firstName} {employee.lastName}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.email}</td>
                                <td>{employee.mobile}</td>
                                <td className="action-buttons">
                                    <div className="menu-container">
                                        <FaEllipsisV
                                            onClick={() => toggleMenu(employee.id)}
                                            className="menu-icon"
                                        />
                                        {isMenuOpen === employee.id && (
                                            <div className="menu-dropdown">
                                                <button
                                                    className="view-btn"
                                                    onClick={() => navigate(`/view/${employee.id}`)}
                                                >
                                                    <FaEye /> View
                                                </button>
                                                <button
                                                    className="edit-btn"
                                                    onClick={() => navigate(`/edit/${employee.id}`)}
                                                >
                                                    <FaEdit /> Edit
                                                </button>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() => console.log('Delete', employee.id)}
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
                            <td colSpan="7" className="no-data">No employees found</td>
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

export default ReportEmployee;
