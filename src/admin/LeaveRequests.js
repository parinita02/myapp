import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import '../employee/leavehistory.css';

export default function LeaveRequests() {
  const [employeeData, setEmployeeData] = useState("");
  const [leaverequests, setLeaveRequests] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedEmployeeData = localStorage.getItem('admin');
    if (storedEmployeeData) {
      const parsedEmployeeData = JSON.parse(storedEmployeeData);
      setEmployeeData(parsedEmployeeData);
    }
  }, []);

  useEffect(() => {
    fetchLeaveRequests();
  }, []); // Add an empty dependency array to useEffect to run only once

  const fetchLeaveRequests = async () => {
    try {
      const response = await axios.get(`${config.url}/viewleaverequestsbyemployee/${employeeData.employeeid}`);
      setLeaveRequests(response.data); // Set the data property of the response
    } catch (error) {
      setError(error.response.data);
    }
  }

  const handleStatusChange = async (employeeid, status) => {
    try {
      const response = await axios.post(`${config.url}/changeleavestatus`, { employeeid, status });
      setLeaveRequests(response.data); // Set the data property of the response
    } catch (error) {
      setError(error.response.data);
      setMessage(''); // Set message to ""
    }
  };

  return (
    <div className="table-container">
      <h3>Leave Requests</h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: "red" }}>{error}</h4>}
      <table id='leavehistory' align='center'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Leave ID</th>
            <th>Type of Leave</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Document</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(leaverequests) && leaverequests.length > 0 ? (
            leaverequests.map((leaverequest, index) => (
              <tr key={index}>
                <td>{leaverequest.emp.employeeid}</td>
                <td>{leaverequest.leaveid}</td>
                <td>{leaverequest.typeofleave}</td>
                <td>{leaverequest.startdate}</td>
                <td>{leaverequest.enddate}</td>
                <td>{leaverequest.reason}</td>
                <td>
                  {leaverequest.file.endsWith('.jpg') || leaverequest.file.endsWith('.jpeg') || leaverequest.file.endsWith('.png') ? (
                    <img src={`${config.url}/eventimage/${leaverequest.file}`} alt="Document" style={{ width: '100px', height: '100px' }} />
                  ) : (
                    <a href={`${config.url}/eventimage/${leaverequest.file}`}>View Document</a>
                  )}
                </td>
                <td>{leaverequest.leaveStatus}</td>
                <td>
                  <button className='selected' onClick={() => handleStatusChange(leaverequest.emp.employeeid, "SELECTED")}>SELECTED</button>
                  <button className='rejected' onClick={() => handleStatusChange(leaverequest.emp.employeeid, "REJECTED")}>REJECTED</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No Leave Requests found</td>
            </tr>
          )}
        </tbody>
      </table>+
    </div>
  );
}
