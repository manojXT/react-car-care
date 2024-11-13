import React, { useState } from 'react';
import './Bookappointment.css';
import './Newappointment.css';
import Newappointment from './Newappointment';

const Schedule = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddNewClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="schedule-container">
            <div className="controls">
                <p className="appointment">Book Appointment</p>
                <select className="staff-dropdown">
                    <option>Working staff</option>
                </select>
                <button className="add-new" onClick={handleAddNewClick}>Add New</button>
            </div>

            <table className="schedule-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>SUN</th>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th>SAT</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(7)].map((_, i) => (
                        <tr key={i}>
                            <td>{i + 1} AM</td>
                            {[...Array(7)].map((_, j) => (
                                <td key={j}></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>X</button>
                        <Newappointment closeModal={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Schedule;
