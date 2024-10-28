import React, { useState } from "react";
import "./Appointment.css";

const hours = [
  "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", 
  "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Appointment = () => {
  const [selectedTime, setSelectedTime] = useState({ day: null, hour: null });

  const handleTimeClick = (day, hour) => {
    setSelectedTime({ day, hour });
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="appointment-title">
          <h3>BOOK APPOINTMENT</h3>
        </div>
        <div className="working-staff-select">
          <select>
            <option>Working Staff</option>
          </select>
        </div>
        <button className="add-new-button">ADD NEW</button>
      </div>

      <div className="calendar-body">
        <div className="time-column">
          {hours.map((hour, index) => (
            <div key={index} className="time-slot">
              {hour}
            </div>
          ))}
        </div>
        <div className="day-columns">
          {daysOfWeek.map((day, dayIndex) => (
            <div key={dayIndex} className="day-column">
              <div className="day-header">{day}</div>
              {hours.map((hour, hourIndex) => (
                <div
                  key={hourIndex}
                  className={`day-slot ${
                    selectedTime.day === dayIndex && selectedTime.hour === hourIndex
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleTimeClick(dayIndex, hourIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
