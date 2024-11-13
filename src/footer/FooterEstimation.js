import React, { useState, useEffect, useRef } from 'react';
import { FaPrint, FaSave, FaEnvelope, FaUpload } from 'react-icons/fa';
import axios from 'axios';
import './Footer.css';

const FooterEstimation = () => {
    const [showPrintOptions, setShowPrintOptions] = useState(false);
    const [printOption, setPrintOption] = useState('');
    const [estimationApproved, setEstimationApproved] = useState(false);
    const [yardSelected, setYardSelected] = useState('');
    const [technicianStatus, setTechnicianStatus] = useState('absent');
    const [stockAvailability, setStockAvailability] = useState(false);
    const [estimationDetails, setEstimationDetails] = useState(null);
    const fileInputRef = useRef(null);

    const fetchEstimationData = async () => {
        try {
            const response = await axios.get('/api/estimation-details');
            if (response.data.estimationApproved) {
                setEstimationApproved(true);
                setTechnicianStatus(response.data.technicianStatus);
                setStockAvailability(response.data.stockAvailability);
                setEstimationDetails(response.data);
            } else {
                setEstimationApproved(false);
                alert('Estimation not approved.');
            }
        } catch (error) {
            console.error('Error fetching estimation data:', error);
            alert('Failed to fetch estimation data.');
        }
    };

    useEffect(() => {
        fetchEstimationData();
    }, []);

    const handleBackClick = () => {
        window.history.back(); 
      };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('File selected:', file.name);
            alert(`File selected: ${file.name}`);
        }
    };

    const handlePrint = () => {
        if (printOption) {
            console.log(`Printing ${printOption}`);
            window.print();  // This will trigger the browser's print dialog
        } else {
            alert("Please select a print option.");
        }
    };

    const handleSave = async () => {
        try {
            const response = await axios.post('/api/save-estimation', estimationDetails);
            if (response.status === 200) {
                console.log('Estimation saved successfully');
                alert('Estimation saved successfully!');
            }
        } catch (error) {
            console.error('Error saving estimation:', error);
            alert('Failed to save estimation.');
        }
    };

    const handleEmail = async () => {
        try {
            const emailData = {
                customerEmail: estimationDetails?.customerEmail,
                estimationId: estimationDetails?.id,
            };
            const response = await axios.post('/api/send-email', emailData);
            if (response.status === 200) {
                console.log('Email sent successfully');
                alert('Email sent successfully!');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email.');
        }
    };

    return (
        <div>
            <div className="footer-container">
            <div className="footer-left">
                <button className="back-button" onClick={handleBackClick}>&larr; Back</button>
                <button className="footer-button" onClick={() => setShowPrintOptions(!showPrintOptions)} aria-label="Print Options">
                    <FaPrint /> Print
                </button>
                <button className="footer-button" onClick={handleSave} aria-label="Save">
                    <FaSave /> Save
                </button>
                <button className="footer-button" onClick={handleEmail} aria-label="Email">
                    <FaEnvelope /> Email
                </button>
                <button className="footer-button" onClick={() => fileInputRef.current.click()} aria-label="Upload Image">
                    <FaUpload /> Upload Image
                </button>
                <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
            </div>
                <div className="footer-right">
                    <span>Powered by <br/> Xtown</span>
                    <img src="/path/to/autox-logo.png" alt="AutoX" className="autox-logo" />
                </div>
            </div>

            {showPrintOptions && (
                <div className="print-options">
                    <button onClick={() => setPrintOption('estimation')}>Estimation</button>
                    <button onClick={() => setPrintOption('invoice')}>Generate Invoice</button>
                    <button onClick={handlePrint}>Print</button>
                </div>
            )}

            {estimationApproved && (
                <div>
                    <div>
                        <label>Technician Status: </label>
                        <span>{technicianStatus === 'present' ? 'Technician is present' : 'Technician is absent'}</span>
                    </div>
                    <div>
                        <label>Stock Availability: </label>
                        <span>{stockAvailability ? 'Stock is available' : 'Stock is not available'}</span>
                    </div>
                    <div>
                        <label>Select Yard: </label>
                        <select value={yardSelected} onChange={(e) => setYardSelected(e.target.value)} disabled={technicianStatus === 'absent'}>
                            <option value="">-- Select Yard --</option>
                            <option value="yard1">Yard 1</option>
                            <option value="yard2">Yard 2</option>
                        </select>
                        {technicianStatus === 'absent' && (
                            <span className="warning-text">Technician is absent, unable to select yard.</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FooterEstimation;
