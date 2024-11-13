import React, { useState } from 'react';
import './DashboardTable.css';
import { FaEllipsisV, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

 
const InvoiceTable = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [invoices] = useState([]); // Invoices array initialized as empty
    const [currentPage, setCurrentPage] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const entriesPerPage = 5;
 
    const handleSearch = (e) => setSearchTerm(e.target.value);
 
    // Calculate pagination
    const totalPages = Math.ceil(invoices.length / entriesPerPage);
 
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
 
    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
 
    const filteredInvoices = invoices.filter((invoice) =>
        invoice.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.invoiceNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.mobileNumber?.includes(searchTerm)
    );
 
    const currentEntries = filteredInvoices.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );
 
    const toggleMenu = (id) => {
        setIsMenuOpen(isMenuOpen === id ? null : id);
    };
 
    return (
        <div>
            <p className="title">Invoice</p>
 
            <div className="search-Container">
                    <input type="text" className="searchInput" value={searchTerm} onChange={handleSearch}
                    placeholder="Search by customer, invoice number, or mobile number"/>
            </div>

            <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Invoice Number</th>
                        <th>Customer Name</th>
                        <th>Mobile Number</th>
                        <th>Amount (₹)</th>
                        <th>Payment Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEntries.length > 0 ? (
                        currentEntries.map((invoice, index) => (
                            <tr key={invoice.id}>
                                <td>{index + 1 + (currentPage - 1) * entriesPerPage}</td>
                                <td>{invoice.invoiceNumber}</td>
                                <td>{invoice.customerName}</td>
                                <td>{invoice.mobileNumber}</td>
                                <td>{invoice.amount}</td>
                                <td>{invoice.paymentDate}</td>
                                <td className="action-buttons">
                                    <div className="menu-container">
                                        <FaEllipsisV
                                            onClick={() => toggleMenu(invoice.id)}
                                            className="menu-icon"
                                        />
                                        {isMenuOpen === invoice.id && (
                                            <div className="menu-dropdown">
                                                <button className="view-btn" onClick={() => navigate(`/view/${invoice.id}`)}>
                                                    <FaEye /> View
                                                </button>
                                                <button className="edit-btn" onClick={() => navigate(`/edit/${invoice.id}`)}>
                                                    <FaEdit /> Edit
                                                </button>
                                                <button className="delete-btn" onClick={() => console.log('Delete', invoice.id)}>
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
                            <td colSpan="7" className="no-data">No invoices found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
 
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
 
export default InvoiceTable;