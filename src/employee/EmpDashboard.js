import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../admin/card.css"
import "./LeaveHistory.js"

export default function EmpDashboard() {
  const [employeeData, setEmployeeData] = useState("");
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedEmployeeData = localStorage.getItem('employee');
    if (storedEmployeeData) {
      const parsedEmployeeData = JSON.parse(storedEmployeeData);
      setEmployeeData(parsedEmployeeData);
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`http://localhost:2032/analysis1`);
      setCounts(response.data);
    } catch (error) {
      setError('Failed to fetch counts');
    }
  };


  return (
    <div>
      {employeeData && (
        <div style={{alignContent:"center"}}>
          <h4>Welcome <span style={{ color: '#753BBD' }}></span> {employeeData.fullname}</h4>
          {counts ? (
      <div>
     <section className="page-contain">
        <a href=" # "  className="data-card">
          <h3>{counts.leavesCount}</h3>
          <h4>No.of Leaves Applied</h4>
          <span className="link-text">
          
           
          </span>
        </a>
</section>
      </div>
       ) : (
        <p>Loading counts...</p>
      )}
       {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}