import React, { useState } from 'react';
import axios from 'axios';

const ScheduleForm = () => {
  const [course, setCourse] = useState('');
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const entry = { id: Date.now(), course, day, startTime, endTime };

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/schedules`, entry);
      setCourse('');
      setDay('');
      setStartTime('');
      setEndTime('');
    } catch (error) {
      console.error('Error adding schedule entry', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course" required />
      <input type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Day" required />
      <input type="text" value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="Start Time" required />
      <input type="text" value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="End Time" required />
      <button type="submit">Add Schedule</button>
    </form>
  );
};

export default ScheduleForm;
