import React, { useState } from 'react';
// import axios from 'axios';
import './Employee.css';
import { FaUser, FaEllipsisV, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EmployeeTable = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(null); // To track which row's menu is open
    const entriesPerPage = 5; // Set number of entries per page

    // Fetch employee data from the backend API
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/employees')
    //         .then((response) => {
    //             setEmployees(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching employee data:', error);
    //         });
    // }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Pagination controls
    const totalPages = Math.ceil(employees.length / entriesPerPage);

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

    const filteredEmployees = employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.mobile.includes(searchTerm)
    );

    const currentEntries = filteredEmployees.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    const toggleMenu = (id) => {
        setIsMenuOpen(isMenuOpen === id ? null : id);
    };

    return (
        <div className="employee-table-container">
             <p className="title">Employees</p>
            <div className="table-controls">
                <div className="search-control">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search"
                    />
                    <button className="add-button" onClick={() => navigate('/Addemployee')}>+</button>
                </div>
            </div>

            <table className="employee-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEntries.map((employee, index) => (
                        <tr key={employee.id}>
                            <td>{index + 1 + (currentPage - 1) * entriesPerPage}</td>
                            <td>
                                <FaUser className="employee-icon" />
                            </td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
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
                                            <button className="view-btn" onClick={() => navigate(`/view/${employee.id}`)}>
                                                <FaEye /> View
                                            </button>
                                            <button className="edit-btn" onClick={() => navigate(`/edit/${employee.id}`)}>
                                                <FaEdit /> Edit
                                            </button>
                                            <button className="delete-btn" onClick={() => console.log('Delete', employee.id)}>
                                                <FaTrash /> Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
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
    );
};

export default EmployeeTable;
