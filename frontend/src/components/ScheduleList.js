import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/schedules`);
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules', error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div>
      <h2>Schedules</h2>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>
            {schedule.course} - {schedule.day} - {schedule.startTime} - {schedule.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
