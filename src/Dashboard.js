import React, { useState } from 'react';
import './Dashboard.css';

const mockGraphData = {
  '2024-01': 40,
  '2024-02': 60,
  '2024-03': 80,
  '2024-04': 30
};

function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2024-01');

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {Object.keys(mockGraphData).map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <div className="graph-box">
        <p>Data for {selectedMonth}: {mockGraphData[selectedMonth]}</p>
        <div
          className="bar"
          style={{ width: `${mockGraphData[selectedMonth]}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Dashboard;
