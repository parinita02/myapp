import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../employee/leavehistory.css'
import AdminNavBar from './AdminNavBar';
import config from '../config';


export default function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${config.url}/viewemployees`);
      setEmployees(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteemployee = async (email) => {
    try {
      await axios.delete(`${config.url}/deleteemployee/${email}`);
      fetchEmployees();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Employees</h1>
      
      <table id='leavehistory'border={1} >
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Qualification</th>
              <th>Work Experience</th>
              <th>Employee ID</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(employees) && employees.length > 0 ? (
    employees.map((employee, index) => (
      <tr key={index}>
        <td>{employee.fullname}</td>
        <td>{employee.gender}</td>
        <td>{employee.dateofbirth}</td>
        <td>{employee.email}</td>
        <td>{employee.location}</td>
        <td>{employee.contact}</td>
        <td>{employee.qualification}</td>
        <td>{employee.workexperience}</td>
        <td>{employee.employeeid}</td>
        <td>
        {employee.file && (employee.file.endsWith('.jpg') || employee.file.endsWith('.jpeg') || employee.file.endsWith('.png')) ? (
  <img src={`${config.url}/eventimage/${employee.file}`} alt="Event" style={{ width: '250px', height: '250px' }} />
) : (
  <a href={`${config.url}/eventimage/${employee.file}`}>Click Here</a>
)}
        </td>
        <td>
          <button onClick={() => deleteemployee(employee.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="11">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}