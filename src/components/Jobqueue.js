import React, { useState } from 'react';
import './Jobqueue.css';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const employees =[
    {
        vehicleNumber: 'TN01AB1234',
        jcNumber: 'JC001',
        service: 'Oil Change',
        employeeID: 'E123',
        technician: 'John Doe',
        startTime: '10:00 AM',
        endTime: '11:00 AM',
        duration: '1 hr',
    },
    // Add more employee data here as needed
];

const EmployeeTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entries, setEntries] = useState(10);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEntriesChange = (e) => {
        setEntries(e.target.value);
    };

    const filteredEmployees = employees.filter(
        (employee) =>
            employee.technician.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.vehicleNumber.includes(searchTerm) ||
            employee.employeeID.includes(searchTerm)
    );

    return (
        <div className="job-table-container">
            <div className="table-controls">
                <div className="entries-control">
                    <label>Show</label>
                    <select value={entries} onChange={handleEntriesChange}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                    
                </div>
                <div className="search-control">
                    <label>Search:</label>
                    <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" />
                </div>
            </div>

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.slice(0, entries).map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.vehicleNumber}</td>
                            <td>{employee.jcNumber}</td>
                            <td>{employee.service}</td>
                            <td>{employee.employeeID}</td>
                            <td>{employee.technician}</td>
                            <td>{employee.startTime}</td>
                            <td>{employee.endTime}</td>
                            <td>{employee.duration}</td>
                            <td className="action-buttons">
                                <button className="view-btn">
                                    <FaEye /> View
                                </button>
                                <button className="edit-btn">
                                    <FaEdit /> Edit
                                </button>
                                <button className="delete-btn">
                                    <FaTrash /> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <span>
                    Showing 1 to {Math.min(filteredEmployees.length, entries)} of {filteredEmployees.length} entries
                </span>
                <div className="pagination-controls">
                    <button className="pagination-btn">Previous</button>
                    <button className="pagination-btn">Next</button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTable;
