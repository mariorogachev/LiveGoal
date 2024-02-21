import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const DateSelector = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div>
      <Calendar locale="en-GB" onChange={handleDateChange} value={date} />
    </div>
  );
};

export default DateSelector;
