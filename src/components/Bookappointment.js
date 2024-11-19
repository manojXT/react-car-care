import React, { useState } from 'react';
import './Bookappointment.css';
import './Newappointment.css';
import Newappointment from './Newappointment';

const Schedule = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]); // Store booked appointments

  const handleAddNewClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAppointmentBooking = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
    closeModal();
  };

  // Helper to check if a slot is booked
  const isSlotBooked = (day, hour) => {
    return appointments.some(
      (appt) => appt.date === day && appt.startTime.startsWith(hour.toString().padStart(2, '0'))
    );
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
        </thead>
        <tbody>
          {[...Array(12)].map((_, i) => ( // Example: 12 time slots
            <tr key={i}>
              <td>{i + 1} AM</td>
              {[...Array(7)].map((_, j) => {
                const day = `2024-11-${6 + j}`; // Example for week days
                return (
                  <td
                    key={j}
                    className={isSlotBooked(day, i + 1) ? 'booked' : ''}
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <Newappointment
              closeModal={closeModal}
              onAppointmentBooked={handleAppointmentBooking}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
