import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './leavehistory.css';
import config from '../config';

export default function LeaveHistory() {
  const [leavehistories, setLeaveHistories] = useState([]);
  

  
  const fetchLeaveHistories = async () => {
    try {
      
      const response = await axios.get(`${config.url}/leavehistory`);
      setLeaveHistories(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchLeaveHistories();
  }, []);





  return (
    <div style={{ textAlign: 'center' }}>
 
      <h1>Leave History</h1>
      
      <table id='leavehistory' align='center' border={1} >
          <thead>
            <tr>
              <th>leave id</th>
              <th>Type Of Leave</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Document</th>
              <th>Posted Time</th>
              <th>Leave status</th>
            </tr>
          </thead>
          <tbody>
            
          {leavehistories.length > 0 ? (
            leavehistories.map((leavehistory, index) => (
              <tr key={index}>
                <td>{leavehistory.leaveid}</td>
        <td>{leavehistory.typeofleave}</td>
        <td>{leavehistory.startdate}</td>
        <td>{leavehistory.enddate}</td>
        <td>{leavehistory.reason}</td>
                <td>
  {leavehistory.file.endsWith('.jpg') || leavehistory.file.endsWith('.jpeg') || leavehistory.file.endsWith('.png') ? (
    <img src={`${config.url}/eventimage/${leavehistory.file}`} alt="Event" style={{ width: '250px', height: '250px' }} />
  ) : (
    <a href={`${config.url}/eventimage/${leavehistory.file}`}>Click Here</a>
    )}
    </td>
    <td>{leavehistory.postedtime}</td>
    <td>{leavehistory.leavestatus}</td>
    
                  </tr>
                ))
              ) : (
    <tr>
      <td colSpan="8">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}

