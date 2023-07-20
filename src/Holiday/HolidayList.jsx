import React from 'react';

const HolidayList = ({ holidays }) => {
  return (
    <div>
      <h1>Holiday List</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={index}>
              <td>{holiday.date}</td>
              <td>{holiday.name}</td>
              <td>{holiday.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayList;
