import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './Jobcard.css';
import Approval from './Icons/Approval pending.png';
import Delivery from './Icons/Delivered.png';
import EstReject from './Icons/est rejected.png';
import Estimate from './Icons/Estiamte.png';
import RFE from './Icons/Req for estimatioin.png';
import RFD from './Icons/Ready for delivery.png';
import { useNavigate } from 'react-router-dom';

const JobCard = () => {
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch all job cards
    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching all job cards...");
            try {
                const response = await fetch("http://192.168.0.103/api/jobcards");
                console.log("Response status:", response.status); 
                if (!response.ok) throw new Error('Failed to fetch job cards');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching job card data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => setCurrentDate(new Date()), 1000 * 60 * 60 * 24); 
        return () => clearInterval(timerId);
    }, []);

    const formatDate = (date) => date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

    return (
        <div className="container">
            <p className="title">Job Card</p>
            <div className="live-date-container">
                <div className="live-date">{formatDate(currentDate)}</div>
                <button className="add-button" onClick={() => navigate('/addjobcard')}>+</button>
            </div>

            <div className="cardsContainer">
                {/* Job Cards */}
                <div className="job-card req-estimate-card">
                    <div className="icon-container">
                        <img src={RFE} alt="Req for Estimation" className="rupee-icon" />
                    </div>
                    <div className="text-container">
                        <p className="title">Req for Estimation</p>
                        <p className="value">0</p>
                        <p className="amount">₹0</p>
                    </div>
                </div>

                <div className="job-card estimate-card">
                    <div className="icon-container">
                        <img src={Estimate} alt="Estimate" className="rupee-icon"/>
                    </div>
                    <div className="text-container">
                        <p className="title">Estimate</p>
                        <p className="value">0</p>
                        <p className="amount">₹0</p>
                    </div>
                </div>

                <div className="job-card estimate-reject-card">
                    <div className="icon-container">
                        <img src={EstReject} alt="Estimation Reject" className="rupee-icon"/>
                    </div>
                    <div className="text-container">
                        <p className="title">Estimation Reject</p>
                        <p className="value">0</p>
                        <p className="amount">₹0</p>
                    </div>
                </div>

                <div className="job-card RFD-card">
                    <div className="icon-container">
                        <img src={RFD} alt="Ready for Delivery" className="rupee-icon"/>
                    </div>
                    <div className="text-container">
                        <p className="title">Ready for Delivery</p>
                        <p className="value">0</p>
                        <p className="amount">₹0</p>
                    </div>
                </div>

                <div className="job-card approval-card">
                    <div className="icon-container">
                        <img src={Approval} alt="Approval Pending" className="rupee-icon"/>
                    </div>
                    <div className="text-container">
                        <p className="title">Approval Pending</p>
                        <p className="value">0</p>
                        <p className="amount">₹0</p>
                    </div>
                </div>

                <div className="job-card delivered-card">
                    <div className="icon-container">
                        <img src={Delivery} alt="Delivered" className="rupee-icon"/>
                    </div>
                    <div className="text-container">
                        <p className="title">Delivered</p>
                        <p className="value">0</p>
                        <p className="amount">₹0</p>
                    </div>
                </div>
            </div>
            <div className="searchContainer">
                <FaSearch size={20} color="#ccc" />
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Customer Name / Mobile No / Vehicle No / Claim No."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>RFE No.</th>
                        <th>Job Card No.</th>
                        <th>Reg. No.</th>
                        <th>Invoice No.</th>
                        <th>Service Type</th>
                        <th>Vehicle</th>
                        <th>Status</th>
                        <th>Customer Name</th>
                        <th>Mobile No.</th>
                        <th>Arrival Date</th>
                        <th>Arrival Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter((item) =>
                            item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.mobileNo.includes(searchQuery) ||
                            item.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.claimNo.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((item) => (
                            <tr key={item.id}>
                                <td>{item.rfeNo}</td>
                                <td>{item.jobCardNo}</td>
                                <td>{item.regNo}</td>
                                <td>{item.invoiceNo}</td>
                                <td>{item.serviceType}</td>
                                <td>{item.vehicle}</td>
                                <td className="statusCell">
                                    <FontAwesomeIcon icon={faCircle} size="xs" color={item.statusColor} />
                                    <span className="statusText">{item.status}</span>
                                </td>
                                <td>{item.customerName}</td>
                                <td>{item.mobileNo}</td>
                                <td>{item.arrivalDate}</td>
                                <td>{item.arrivalTime}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default JobCard;
