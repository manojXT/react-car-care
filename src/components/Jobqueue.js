import React, { useState, useEffect } from 'react';
import './Jobqueue.css';

const Jobqueue = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState([]); // To store fetched employee data
    const [totalPages, setTotalPages] = useState(0); // Total pages for pagination
    const entriesPerPage = 5; // Number of entries per page

    // Fetch data from the API
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await fetch('https://your-api-endpoint.com/job-queue');
                const data = await response.json();
                setEmployees(data); // Set the employee data in state
                setTotalPages(Math.ceil(data.length / entriesPerPage)); // Calculate total pages
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchEmployees();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to the first page when search term changes
    };

    const filteredEmployees = employees.filter(
        (employee) =>
            employee.technician.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.vehicleNumber.includes(searchTerm) ||
            employee.employeeID.includes(searchTerm)
    );

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

    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentEntries = filteredEmployees.slice(startIndex, startIndex + entriesPerPage);

    return (
        <>
            <p className="title">Job Queue</p>

            {/* Search Section */}
            <div className="filter-section">
                <div className='search-input-container'>
                    <input
                        type="text"
                        placeholder="Search by Technician, Service, Vehicle No, or Employee ID"
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {/* Table Section */}
            <div className="table-container">
                <table className="job-table">
                    <thead>
                        <tr>
                            <th>Vehicle Number</th>
                            <th>JC Number</th>
                            <th>Service</th>
                            <th>Employee ID</th>
                            <th>Technician</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Duration</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.vehicleNumber}</td>
                                <td>{employee.jcNumber}</td>
                                <td>{employee.service}</td>
                                <td>{employee.employeeID}</td>
                                <td>{employee.technician}</td>
                                <td>{employee.startTime}</td>
                                <td>{employee.endTime}</td>
                                <td>{employee.duration}</td>
                                <td>
                                    {/* Example action buttons */}
                                    <button className="view-btn">View</button>
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

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
        </>
    );
};

export default Jobqueue;
