import React, { useState } from 'react';
import './Jobcardupdate.css';
import {  FaEye, FaEdit, } from 'react-icons/fa';

const Employees = [
    {
        id: 1,
        firstName: 'Dharaa',
        lastName: 'Bhalsod',
        email: 'dhara2@dasinfomedia.com',
        mobile: '9904898460',
    },
    // Add more Employee data here as needed
];

const Jobcardupdate = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEntriesChange = (e) => {
        setEntries(e.target.value);
    };

    const filteredEmployees = Employees.filter(
        (Employee) =>
            Employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Employee.mobile.includes(searchTerm)
    );

    return (
        <div className="Employee-table-container">
            <div className="table-controls">
                <div className="entries-control">
                    <label>Show</label>
                    <select value={entries} onChange={handleEntriesChange}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                    <span>entries</span>
                </div>
                <div className="search-control">
                    <label>Search:</label>
                    <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" />
                </div>
            </div>

            <table className="Employee-table">
                <thead>
                    <tr>
                        
                        <th>Ref.no</th>
                        <th>Job card no</th>
                        <th>Reg.no</th>
                        <th>Invoice.no</th>
                        <th>Service type</th>
                        <th>Vehicle</th>
                        <th>Status</th>
                        <th>Customer name</th>
                        <th>Mobile no</th>
                        <th>Arrival date</th>
                        <th>Arrival time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.slice(0, entries).map((Employee, index) => (
                        <tr key={Employee.id}>
                            <td>{index + 1}</td>
                          
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="action-buttons">
                                <button className="view-btn">
                                    <FaEye /> View
                                </button>
                                <button className="download-btn">
                                    <FaEdit /> download
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <span>Showing 1 to {filteredEmployees.length} of {filteredEmployees.length} entries</span>
                <div className="pagination-controls">
                    <button className="pagination-btn">Previous</button>
                    <button className="pagination-btn">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Jobcardupdate;