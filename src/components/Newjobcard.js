import React, { useState, useEffect } from 'react';
import { FaTicketAlt, FaCog, FaKey, FaSearch, FaCogs } from 'react-icons/fa';
import { MdAttachMoney, } from 'react-icons/md';
import './Newjobcard.css';

const JobCardScreen = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000 * 60 * 60 * 24); // Update every 24 hours

        // Cleanup the interval on component unmount
        return () => clearInterval(timerId);
    }, []);

    // Formatting the date
    const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    };



    return (
        <div className="container">
            <div className="live-date">
                {formatDate(currentDate)}
            </div>

            <div className="cardsContainer">

                {/* Job Card 1 */}
                <div className="card" style={{ backgroundColor: '#ffa29f' }}>
                    <FaTicketAlt size={40} color="#fff" />
                    <span className="cardTitle">Req for Estimation</span>
                    <span className="cardValue">1</span>
                    <span className="cardPrice">₹ 0</span>
                </div>

                {/* Job Card 2 */}
                <div className="card" style={{ backgroundColor: '#d3d3d3' }}>
                    <MdAttachMoney size={40} color="#fff" />
                    <span className="cardTitle">Estimate</span>
                    <span className="cardValue">2</span>
                    <span className="cardPrice">₹ 0</span>
                </div>

                {/* Job Card 3 */}
                <div className="card" style={{ backgroundColor: '#ffcc80' }}>
                    <FaCog size={40} color="#fff" />
                    <span className="cardTitle">Spares Pending</span>
                    <span className="cardValue">2</span>
                    <span className="cardPrice">₹ 3,500</span>
                </div>

                {/* Job Card 4 */}
                <div className="card" style={{ backgroundColor: '#fff9a1' }}>
                    <FaCogs size={40} color="#fff" />
                    <span className="cardTitle">Work-In-Progress</span>
                    <span className="cardValue">0</span>
                    <span className="cardPrice">₹ 0</span>
                </div>

                {/* Job Card 5 */}
                <div className="card" style={{ backgroundColor: '#a3e4e9' }}>
                    <FaKey size={40} color="#fff" />
                    <span className="cardTitle">Ready For Delivery</span>
                    <span className="cardValue">0</span>
                    <span className="cardPrice">₹ 0</span>
                </div>
                {/* Job Card 6 */}
                <div className="card" style={{ backgroundColor: '#a3e4e9' }}>
                    <FaKey size={40} color="#fff" />
                    <span className="cardTitle">Ready For Delivery</span>
                    <span className="cardValue">0</span>
                    <span className="cardPrice">₹ 0</span>
                </div>
                

            </div>

            <div className="searchContainer">
                <FaSearch size={24} color="#ccc" />
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Customer Name / Mobile No / Vehicle No / Claim No."
                />
            </div>
        </div>
    );
};

export default JobCardScreen;