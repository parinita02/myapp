import React, { useEffect, useState } from 'react'
import './empprofile.css'
import profile from './image1.jpg'

export default function EmpProfile() {
  const [employeeData, setEmployeeData] = useState("");
  useEffect(() => {
    const storedEmployeeData = localStorage.getItem('employee');
    if (storedEmployeeData) {
      const parsedEmployeeData = JSON.parse(storedEmployeeData);
      setEmployeeData(parsedEmployeeData);
    }
  }, []);
 
    return <div>
     {employeeData &&(
      <div className='card'>
      <img src={profile} alt='profile' width="50%"/> 
      <h5>Full Name: {employeeData.fullname}</h5>   
      <h4>Employee ID: {employeeData.employeeid}</h4>
      <h5>Gender: {employeeData.gender}</h5>  
      <p >Date of Birth:{employeeData.dateofbirth}</p>
      <i>Location : {employeeData.location}</i><br/>
      <i>Qualification:{employeeData.qualification}</i><br/>
      <i>Work Experience:{employeeData.workexperience}</i>
      </div>
           )}
    </div>
}